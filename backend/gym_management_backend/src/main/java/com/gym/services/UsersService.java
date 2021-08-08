package com.gym.services;

import com.gym.entities.Users;

public interface UsersService {
	Users findByUemail(String email);
	Users findByUid(int id);
	void save(Users user);
}
