package com.gym.services;


import java.util.List;

import com.gym.entities.Plans;

public interface PlansService {
	void save(Plans p);
	void update(Plans p, int id);
	Plans findByPlid(int id);
	boolean deleteById(int id);
	List<Plans> findAllPlans();
}