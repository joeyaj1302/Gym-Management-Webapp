package com.gym.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.daos.EnquiryDao;
import com.gym.entities.Enquiry;
import com.gym.entities.Equipments;

@Transactional
@Service
public class EnquiryServiceImpl implements EnquiryService{

	@Autowired
	EnquiryDao enquiryDao;
	@Override
	public Enquiry findByEqid(int id) {
		
		return enquiryDao.findByEqid(id);
	}

	@Override
	public List<Enquiry> findAll() {
		
		return enquiryDao.findAll();
	}
	
	@Override
	public void save(Enquiry enq) {
		enquiryDao.save(enq);
		
	}


}
