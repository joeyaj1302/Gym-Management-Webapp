package com.gym.controllers;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gym.entities.Members;
import com.gym.entities.Users;
import com.gym.exceptions.UserNotFoundException;
import com.gym.models.Utility;
import com.gym.services.MembersService;
import com.gym.services.UsersService;
import com.sun.source.tree.MemberSelectTree;

import net.bytebuddy.utility.RandomString;

@CrossOrigin
@Controller
public class LoginController {
	@Autowired
	private UsersService userService;
	@Autowired
	private MembersService memberService;
	@Autowired
	private JavaMailSender mailSender;
	
	@RequestMapping("/login")
	private String login() {
		return "login";
	}
	
	@RequestMapping("/authenticate")
	private String authenticate(@RequestParam(name = "email") String email,
			@RequestParam(name = "password") String password, Model model,HttpServletResponse response) {
		HttpHeaders headers = new HttpHeaders();
	      
		Users user = userService.findByUemail(email);
		if (user != null && user.getUpassword().equals(password) ) {
			if(user.getUrole().equals("member")) {
				int id = user.getMember().getMid();
				headers.add("Location", "localhost:3009/MainPage/account/?id="+id);
				model.addAttribute("member", user.getMember());
				return "members";
			}
			else if (user.getUrole().equals("trainer")) {
				headers.add("Location", "localhost:3007/account");
				model.addAttribute("user", user);
				return "trainers";
			}
			else {
				model.addAttribute("user", user);
				headers.add("Location", "localhost:3008/dashboard");
				return "admin";
			}
		}
		
		System.out.println(user.toString());
		model.addAttribute("message", "Invalid Creadentials");
		return "login";
		
	}
	
	@RequestMapping("/edit")
	public String edit(@RequestParam(name = "id") String id, Model model) {
		int mid = Integer.parseInt(id);
		Members member = memberService.findByMid(mid);
		model.addAttribute("member", member);
		return "edit";
	}
	
	@RequestMapping("/editdetails")
	public String editdetails(@RequestParam(name = "id") String id,@RequestParam(name = "name") String name,@RequestParam(name = "password") String password, Model model) {
		int mid = Integer.parseInt(id);
		Members member = memberService.findByMid(mid);
		member.setMfname(name);
		member.setMpassword(password);
		memberService.save(member);
		model.addAttribute("member", member);
		Users user = member.getUser();
		user.setUfname(name);
		user.setUpassword(password);
		userService.save(user);
		return "members";
	}
	
	/*@GetMapping("/forgot_password")
    public String showForgotPasswordForm() {
		return null;
    }*/
 
	@PostMapping("/forgot_password")
	public void processForgotPassword(HttpServletRequest request, Model model) {
	    String email = request.getParameter("resetemail");
	    String token = RandomString.make(30);
	    System.out.println("in process forgot password   " +email);
	     
	    try {
	        userService.updateResetPasswordToken(token, email);
	        String resetPasswordLink = Utility.getSiteURL(request) + "/reset_password?token=" + token;
	        sendEmail(email, resetPasswordLink);
	           model.addAttribute("message", "We have sent a reset password link to your email. Please check.");
	         
	    } catch (UserNotFoundException ex) {
	        model.addAttribute("error", ex.getMessage());
	        ex.printStackTrace();
	    } catch (UnsupportedEncodingException | MessagingException e) {
	        model.addAttribute("error", "Error while sending email");
	        e.printStackTrace();
	    }
	       System.out.println("in process forgot password   " +email);
	    //return "forgot_password_form";
	}
     
	
	 public void sendEmail(String recipientEmail, String link)
	            throws MessagingException, UnsupportedEncodingException {
	        MimeMessage message = mailSender.createMimeMessage();              
	        MimeMessageHelper helper = new MimeMessageHelper(message);
	         
	        helper.setFrom("gymmanagement@gmail.com", "Gym Management Support");
	        helper.setTo(recipientEmail);
	         
	        String subject = "Here's the link to reset your password";
	         
	        String content = "<p>Hello,</p>"
	                + "<p>You have requested to reset your password.</p>"
	                + "<p>Click the link below to change your password:</p>"
	                + "<p><a href=\"" + link + "\">Change my password</a></p>"
	                + "<br>"
	                + "<p>Ignore this email if you do remember your password, "
	                + "or you have not made the request.</p>";
	         
	        helper.setSubject(subject);
	         
	        helper.setText(content, true);
	         
	        mailSender.send(message);
	        System.out.println("Inside Send Email :");
	    }
     
     
    @GetMapping("/reset_password")
    public String showResetPasswordForm(@Param(value = "token") String token, Model model) {
        Users user = userService.getByResetPasswordToken(token);
        model.addAttribute("token", token);
         
        if (user == null) {
            model.addAttribute("message", "Invalid Token");
            return "message";
        }
         
        return "reset_password_form";
    }
     
    
    @PostMapping("/reset_password")
    public String processResetPassword(HttpServletRequest request, Model model) {
        String token = request.getParameter("token");
        String password = request.getParameter("password");
         
        Users user = userService.getByResetPasswordToken(token);
        model.addAttribute("title", "Reset your password");
         
        if (user == null) {
            model.addAttribute("message", "Invalid Token");
            return "message";
        } else {           
        	userService.updatePassword(user, password);
             
            model.addAttribute("message", "You have successfully changed your password.");
        }
         
        return "message";
    }
	
}
