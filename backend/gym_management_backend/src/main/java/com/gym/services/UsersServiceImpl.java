package com.gym.services;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.daos.UserDao;
import com.gym.entities.Users;

@Transactional
@Service
public class UsersServiceImpl implements UsersService {
	@Autowired
	private UserDao userDao;
	@Override
	public Users findByUemail(String email) {
		Users user = userDao.findByUemail(email);
		return user;
	}

	@Override
	public Users findByUid(int id) {
		Optional<Users> user = userDao.findById(id);
		return user.orElse(null);
	}

}
