package com.gym.services;

import java.util.List;

import com.gym.entities.Enquiry;

public interface EnquiryService {
	Enquiry findByEqid(int id);
	List<Enquiry> findAll();
	void save(Enquiry enq);
	
}
