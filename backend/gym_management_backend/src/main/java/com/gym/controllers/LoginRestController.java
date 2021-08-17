package com.gym.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gym.entities.Members;
import com.gym.entities.Trainers;
import com.gym.entities.Users;
import com.gym.models.Response;
import com.gym.services.MembersService;
import com.gym.services.UsersService;

@CrossOrigin
@RestController
public class LoginRestController {
	@Autowired
	private UsersService userService;
	@Autowired
	private MembersService memberService;
	
	@PostMapping("/authenticaterest")
	private ResponseEntity<?> authenticate(@RequestParam(name = "email") String email,@RequestParam(name = "password") String password) {
		Users user = userService.findByUemail(email);
		if (user != null && user.getUpassword().equals(password) && user.getUrole().equals("member")) {
			Members member = user.getMember();
			return Response.success(member);
		}
		else if (user != null && user.getUpassword().equals(password) && user.getUrole().equals("trainer")) {
			Trainers trainer = user.getTrainer();
			return Response.success(trainer);
		}
		else if (user != null && user.getUpassword().equals(password) && user.getUrole().equals("admin")) {
			return null;
		}
		else {
			return Response.error("Invalid Login Credentials");
		}
<<<<<<< HEAD
	}
	
	
}
=======
	}
	
	@GetMapping("/getbyid")
	private ResponseEntity<?> getByid(@RequestParam(name = "id") String id) {
		int mid = Integer.parseInt(id);
		Members member = memberService.findByMid(mid);
		if (member != null ) {
			return Response.success(member);
		}
		else {
			return Response.error("Wrong id fool");
		}
		
	}
	@PutMapping("/updatebyid")
	private ResponseEntity<?> updatebyid(@RequestParam(name = "id") String id ,Members member)  {
		int mid = Integer.parseInt(id);
		System.out.println(member.toString());
		memberService.update(member,mid);
		Members member1 = memberService.findByMid(mid);
		Users user = member1.getUser();
		System.out.println(user.toString());
		user.setUfname(member1.getMfname());
		user.setUlname(member.getMlname());
		user.setUpassword(member1.getMpassword());
		user.setUemail(member1.getMemail());
		userService.save(user);
		return Response.success(member1);
		
	}
}
>>>>>>> 0db838b23f176fa40da67bcae0b73ad6e79fd876
