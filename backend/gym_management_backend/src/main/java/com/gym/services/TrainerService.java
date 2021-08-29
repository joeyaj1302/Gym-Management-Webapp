package com.gym.services;

import java.util.List;

import com.gym.entities.Members;
import com.gym.entities.Trainers;

public interface TrainerService {
	Trainers findByTemail(String email);
	Trainers findByTid(int id);
	void save(Trainers user);
	void update(Trainers m, int id);
	List<Trainers> findAllTrainers();
	boolean deleteById(int tid);
}
