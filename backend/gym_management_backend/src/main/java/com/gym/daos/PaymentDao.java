package com.gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gym.entities.Members;
import com.gym.entities.Payments;



public interface PaymentDao extends JpaRepository<Payments, Integer>{
	
	//Payments findBymid(int mid);
	Payments findByPid(int id);
	List<Payments> findAll();
	//void deleteByPid(int id);
	List<Payments> findByMember(Members m);

}
