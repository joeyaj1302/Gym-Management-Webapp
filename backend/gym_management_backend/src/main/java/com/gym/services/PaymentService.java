package com.gym.services;


import java.util.List;

import com.gym.entities.Payments;


public interface PaymentService {
	void save(Payments p);
	void update(Payments p, int id);
	Payments findByPid(int id);
	//boolean deleteById(int id);
	List<Payments> findAllPayments();
}