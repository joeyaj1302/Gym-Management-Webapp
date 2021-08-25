package com.gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gym.entities.Members;
import com.gym.entities.Trainers;

public interface TrainerDao extends JpaRepository< Trainers, Integer>{
	Trainers findByTemail(String email);
	Trainers findByTid(int id);
	List<Trainers> findAll();
//	@Query("From members m WHERE m.t_id = ?1")
//	List<Members> findAllMembers(int tid);
}
