package com.gym.services;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.gym.entities.Members;
import com.gym.entities.Plans;

public interface MembersService {
	Members findByMid(int id);
	Members findByMemail(String email);
	void save(Members m);
	void update(Members m, int id);
	List<Members> findAllMembers();
	List<Members> findByTrainer(int id);
	boolean deleteById(int id);
    List<Members> findAllSortedMembers();
    List<Members> sortMembersByJoindate();
    List<Members> findByPlan(Plans plan);
    
}
