package com.gym.services;

import com.gym.entities.Trainers;

public interface TrainerService {
	Trainers findByTemail(String email);
	Trainers findByTid(int id);
	void save(Trainers user);
}
