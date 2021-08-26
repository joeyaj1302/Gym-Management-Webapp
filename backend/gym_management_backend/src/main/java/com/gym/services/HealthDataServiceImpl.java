package com.gym.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.daos.HealthDataDao;
import com.gym.entities.HealthData;

@Transactional
@Service
public class HealthDataServiceImpl implements HealthDataService{
	@Autowired
	private HealthDataDao healthdataDao;

	
	@Override
	public HealthData findByHid(int id) {
		HealthData healthdata = healthdataDao.findByHid(id);
		return healthdata;
	}

	

	@Override
	public void save(HealthData h) {
		healthdataDao.save(h);
		
	}

	@Override
	public void update(HealthData h, int id) {
		HealthData healthdata1 = healthdataDao.findByHid(id);
		healthdata1.setHheight(h.getHheight());
		healthdata1.setHweight(h.getHweight());
		healthdata1.setHfatp(h.getHfatp());
		healthdata1.setHtargetweight(h.getHtargetweight());
		healthdata1.setHbmi(h.getHbmi());
		
		healthdataDao.save(healthdata1);
	}

	@Override
	public List<HealthData> findAllHealthData() {
		ArrayList<HealthData> healthdataList = new ArrayList<HealthData>();
		healthdataList = (ArrayList<HealthData>) healthdataDao.findAll();
		return healthdataList;
	}






}