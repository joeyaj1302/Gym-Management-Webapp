package com.gym.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gym.entities.Trainers;

public interface TrainerDao extends JpaRepository< Trainers, Integer>{
	Trainers findByTemail(String email);
	Trainers findByTid(int id);
}
