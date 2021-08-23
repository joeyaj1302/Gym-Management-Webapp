package com.gym.services;


import java.util.List;

import com.gym.entities.Plans;

public interface PlansService {
	void save(Plans p);
	void update(Plans p, int id);
	Plans findByPlid(int id);
<<<<<<< HEAD
	boolean deleteById(int id);
=======
	void deleteById(int id);
>>>>>>> b643a4be7afe8e5b75e7526aa614250a1668857b
	List<Plans> findAllPlans();
}