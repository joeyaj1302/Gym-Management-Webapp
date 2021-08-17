package com.gym.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.daos.TrainerDao;
import com.gym.entities.Trainers;

@Transactional
@Service
public class TrainerServiceImpl implements TrainerService {
	@Autowired
	private TrainerDao trainerDao;
	@Override
	public Trainers findByTemail(String email) {
		Trainers trainer = trainerDao.findByTemail(email);
		return trainer;
	}

	@Override
	public Trainers findByTid(int id) {
		Trainers trainer = trainerDao.findByTid(id);
		return trainer;
	}

	@Override
	public void save(Trainers user) {
		trainerDao.save(user);
	}

}
