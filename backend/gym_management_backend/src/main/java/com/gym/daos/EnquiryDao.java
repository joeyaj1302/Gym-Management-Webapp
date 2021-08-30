package com.gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gym.entities.Enquiry;

public interface EnquiryDao  extends JpaRepository<Enquiry, Integer> {
	Enquiry findByEqid(int id);
	List<Enquiry> findAll();
	
}
