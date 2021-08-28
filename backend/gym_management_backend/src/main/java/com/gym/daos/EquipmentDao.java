package com.gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gym.entities.Equipments;



public interface EquipmentDao extends JpaRepository<Equipments, Integer> {
	Equipments findByEid(int id);
	List<Equipments> findAll();
	void deleteByEid(int id);
}