package com.gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gym.entities.HealthData;


public interface HealthDataDao extends JpaRepository<HealthData, Integer>{
	HealthData findByHid(int id);
	List<HealthData> findAll();
	void deleteByHid(int id);


}