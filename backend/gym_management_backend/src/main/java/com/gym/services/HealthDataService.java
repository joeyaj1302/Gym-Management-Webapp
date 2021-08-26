package com.gym.services;

import java.util.List;

import com.gym.entities.HealthData;

public interface HealthDataService {
	HealthData findByHid(int id);
	void save(HealthData h);
	void update(HealthData h, int id);
	List<HealthData> findAllHealthData();
}

