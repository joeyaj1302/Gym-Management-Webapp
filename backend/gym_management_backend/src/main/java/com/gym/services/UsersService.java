package com.gym.services;

import com.gym.entities.Users;
import com.gym.exceptions.UserNotFoundException;

public interface UsersService {
	Users findByUemail(String email);
	Users findByUid(int id);
	void save(Users user);
	void updateResetPasswordToken(String token, String email) throws UserNotFoundException;
	Users getByResetPasswordToken(String token);
	void updatePassword(Users user, String findByResetToken);
}
