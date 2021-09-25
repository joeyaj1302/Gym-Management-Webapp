package com.gym.aop;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import com.gym.services.UsersService;

@Aspect
@Configuration
public class SecurityFilter {
	@Autowired
	private UsersService userService;
	
	
	
	
}
