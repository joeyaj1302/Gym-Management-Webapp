package com.gym.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.daos.EquipmentDao;
import com.gym.daos.HealthDataDao;
import com.gym.entities.Equipments;
import com.gym.entities.HealthData;

@Transactional
@Service
public class EquipmentsServiceImpl implements EquipmentsService{
	@Autowired
	private EquipmentDao equipmentDao;

	
	@Override
	public Equipments findByEid(int id) {
		Equipments equipments = equipmentDao.findByEid(id);
		return equipments;
	}

	

	@Override
	public void save(Equipments h) {
		equipmentDao.save(h);
		
	}


	@Override
	public List<Equipments> findAllEquipments() {
		ArrayList<Equipments> equipmentsList = new ArrayList<Equipments>();
		equipmentsList = (ArrayList<Equipments>) equipmentDao.findAll();
		return equipmentsList;
	}



	@Override
	public void update(Equipments e, int id) {
		Equipments equipments1 = equipmentDao.findByEid(id);
		equipments1.setEid(e.getEid());
		equipments1.setEname(e.getEname());
		equipments1.setEdesc(e.getEdesc());
		equipments1.setEpurchasedate(e.getEpurchasedate());
		equipments1.setEcost(e.getEcost());
		equipments1.setEqty(e.getEqty());
		
		equipmentDao.save(equipments1);
		
	}






}