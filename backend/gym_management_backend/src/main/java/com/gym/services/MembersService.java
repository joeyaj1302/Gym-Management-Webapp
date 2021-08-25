package com.gym.services;

import java.util.List;

import com.gym.entities.Members;

public interface MembersService {
	Members findByMid(int id);
	Members findByMemail(String email);
	void save(Members m);
	void update(Members m, int id);
	List<Members> findAllMembers();
	List<Members> findByTrainer(int id);
}
