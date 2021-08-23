package com.gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gym.entities.Trainers;

public interface TrainerDao extends JpaRepository< Trainers, Integer>{
	Trainers findByTemail(String email);
	Trainers findByTid(int id);
	List<Trainers> findAll();
}
