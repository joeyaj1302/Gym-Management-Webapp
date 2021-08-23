package com.gym.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.daos.TrainerDao;
import com.gym.entities.Members;
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
	@Override
	public void update(Trainers m, int id) {
		Trainers trainer1 = trainerDao.findByTid(id);
		trainer1.settfname(m.gettfname());
		trainer1.settlname(m.gettlname());
		trainer1.settemail(m.gettemail());
		trainer1.settpassword(m.gettpassword());
		trainer1.settage(m.gettage());
		trainer1.settaddress(m.gettaddress());
		trainerDao.save(trainer1);
	}

	@Override
	public List<Trainers> findAllTrainers() {
		List<Trainers> trainerList = trainerDao.findAll();
		return trainerList;
	}
}
