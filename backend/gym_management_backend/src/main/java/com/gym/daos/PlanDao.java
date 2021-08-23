package com.gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gym.entities.Plans;


public interface PlanDao extends JpaRepository<Plans, Integer>{
	Plans findByPid(int id);
	List<Plans> findAll();
}