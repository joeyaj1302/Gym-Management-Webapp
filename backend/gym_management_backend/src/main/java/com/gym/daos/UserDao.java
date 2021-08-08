package com.gym.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gym.entities.Users;

public interface UserDao extends JpaRepository<Users, Integer> {
	Users findByUemail(String email);
	Users findByUid(int id);
}
