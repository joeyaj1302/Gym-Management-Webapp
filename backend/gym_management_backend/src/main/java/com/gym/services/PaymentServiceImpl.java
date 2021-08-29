package com.gym.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.daos.PaymentDao;
import com.gym.entities.Payments;



@Transactional
@Service
public class PaymentServiceImpl implements PaymentService{
	@Autowired
	private PaymentDao paymentDao;

	@Override
	public void save(Payments p) {
		paymentDao.save(p);
		
	}

	@Override
	public void update(Payments p, int id) {
		Payments payment = paymentDao.findByPid(id);
		payment.setPid(p.getPid());
		
		payment.setPid(p.getPid());
		payment.setPamount(p.getPamount());
		payment.setPdate(p.getPdate());
		payment.setPstatus(p.isPstatus());
		paymentDao.save(payment);
		
	}

	@Override
	public Payments findByPid(int id) {
		Payments payment = paymentDao.findByPid(id);
		return payment;
	}

//	@Override
//	public boolean deleteById(int id) {
//		Payments payment = paymentDao.findByPid(id);
//		if (payment != null) {
//			paymentDao.deleteByPid(id);
//			return true;
//		}
//		else {
//			return false;
//		}
//		
//		
//	}

	@Override
	public List<Payments> findAllPayments() {
		List<Payments> paymentList =paymentDao.findAll();
		return paymentList;
	}



}
