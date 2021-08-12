package com.gym.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gym.entities.Members;
import com.gym.entities.Users;
import com.gym.services.MembersService;
import com.gym.services.UsersService;
import com.sun.source.tree.MemberSelectTree;


@Controller
public class LoginController {
	@Autowired
	private UsersService userService;
	@Autowired
	private MembersService memberService;
	
	@RequestMapping("/login")
	private String login() {
		return "login";
	}
	
	@RequestMapping("/authenticate")
	private String authenticate(@RequestParam(name = "email") String email,@RequestParam(name = "password") String password, Model model) {
		Users user = userService.findByUemail(email);
		if (user != null && user.getUpassword().equals(password) ) {
			if(user.getUrole().equals("member")) {
				
				model.addAttribute("member", user.getMember());
				return "members";
			}
			else if (user.getUrole().equals("trainer")) {
				model.addAttribute("user", user);
				return "trainers";
			}
			else {
				model.addAttribute("user", user);
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
}
