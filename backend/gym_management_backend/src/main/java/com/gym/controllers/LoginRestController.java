package com.gym.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gym.entities.Members;
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
			return null;
		}
		else if (user != null && user.getUpassword().equals(password) && user.getUrole().equals("admin")) {
			return null;
		}
		else {
			return Response.error("Invalid Login Credentials");
		}
		
		
	}
<<<<<<< HEAD
	
	
}
=======
}
>>>>>>> 0ad1c42171ac6684f8c4f901cb33d76269e91c91
