package com.gym.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gym.entities.Members;

public interface MemberDao extends JpaRepository<Members, Integer>{
	Members findByMid(int id);
	Members findByMemail(String email);
}
