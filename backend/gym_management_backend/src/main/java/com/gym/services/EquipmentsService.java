package com.gym.services;

import java.util.List;

import com.gym.entities.Equipments;

public interface EquipmentsService {
	Equipments findByEid(int id);
	void save(Equipments e);
	void update(Equipments e, int id);
	List<Equipments> findAllEquipments();
}

