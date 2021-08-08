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

import com.gym.entities.Users;
import com.gym.services.UsersService;


@Controller
public class LoginController {
	@Autowired
	private UsersService userService;
	
	@RequestMapping("/login")
	private String login() {
		Users user = userService.findByUemail("jithil@gmail.com");
		System.out.println(user.toString());
		return "login";
	}
	
	@GetMapping("/authenticate")
	private ResponseEntity<?> authenticate(@RequestParam(name = "email") String email, Model model) {
		Users user = userService.findByUemail(email);
		System.out.println(user.toString());
		return null;
		
	}

}
