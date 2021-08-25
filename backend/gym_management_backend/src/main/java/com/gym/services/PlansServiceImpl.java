package com.gym.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.daos.PlanDao;
import com.gym.entities.Plans;


@Transactional
@Service
public class PlansServiceImpl implements PlansService{
	@Autowired
	private PlanDao planDao;

	@Override
	public void save(Plans p) {
		planDao.save(p);
		
	}

	@Override
	public void update(Plans p, int id) {
		Plans plan1 = planDao.findByPid(id);
		plan1.setPid(p.getPid());
		
		plan1.setPname(p.getPname());
		plan1.setPdesc(p.getPdesc());
		plan1.setPdesc(p.getPdesc());
		plan1.setPduration(p.getPduration());
		plan1.setPcost(p.getPcost());
		planDao.save(plan1);
		
	}

	@Override
	public Plans findByPlid(int id) {
		Plans plan = planDao.findByPid(id);
		return plan;
	}

	@Override
	public boolean deleteById(int id) {
		Plans plan = planDao.findByPid(id);
		if (plan != null) {
			planDao.deleteByPid(id);
			return true;
		}
		else {
			return false;
		}
		
		
	}

	@Override
	public List<Plans> findAllPlans() {
		List<Plans> planList =planDao.findAll();
		return planList;
	}

}
