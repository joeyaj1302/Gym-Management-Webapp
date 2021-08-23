package com.gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gym.entities.Plans;


public interface PlanDao extends JpaRepository<Plans, Integer>{
	Plans findByPid(int id);
	List<Plans> findAll();
<<<<<<< HEAD
	void deleteByPid(int id);
	
=======
>>>>>>> b643a4be7afe8e5b75e7526aa614250a1668857b
}