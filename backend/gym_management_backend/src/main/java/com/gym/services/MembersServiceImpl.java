package com.gym.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.daos.MemberDao;
import com.gym.daos.PlanDao;
import com.gym.daos.TrainerDao;
import com.gym.entities.Members;
import com.gym.entities.Plans;
import com.gym.entities.Trainers;
import com.gym.entities.Users;
import com.sun.xml.bind.v2.runtime.reflect.ListIterator;

@Transactional
@Service
public class MembersServiceImpl implements MembersService{
	@Autowired
	private MemberDao memberDao;
	@Autowired
	private TrainerDao trainerDao;
	@Autowired
	private PlanDao planDao;
	
	@Override
	public Members findByMid(int id) {
		Members member = memberDao.findByMid(id);
		member.setMduedate();
		return member;
	}

	@Override
	public Members findByMemail(String email) {
		Members member = memberDao.findByMemail(email);
		member.setMduedate();
		return member;
	}

	@Override
	public void save(Members m) {
		m.setMduedate();
		memberDao.save(m);
		
	}

	@Override
	public void update(Members m, int id) {
		Members member1 = memberDao.findByMid(id);
		member1.setMfname(m.getMfname());
		member1.setMlname(m.getMlname());
		member1.setMemail(m.getMemail());
		member1.setMpassword(m.getMpassword());
		member1.setMage(m.getMage());
		member1.setMaddress(m.getMaddress());
		m.setMduedate();
		memberDao.save(member1);
	}

	@Override
	public List<Members> findAllMembers() {
		ArrayList<Members> memberList = new ArrayList<Members>();
		memberList = (ArrayList<Members>) memberDao.findAll();
		for (Members members : memberList) {
			members.setMduedate();
		}
		return memberList;
	}

	@Override
	public List<Members> findByTrainer(int id) {
		Trainers trainer = trainerDao.findByTid(id);
		List<Members> memberList = memberDao.findByTrainer(trainer);
		for (Members members : memberList) {
			members.setMduedate();
		}
		return memberList;
	}

	@Override
	public boolean deleteById(int id) {
		memberDao.deleteById(id);
		if (memberDao.findByMid(id)==null) {;
			return true;
		}
		return false;
		
	}

	@Override
	public List<Members> findAllSortedMembers() {
		List<Members> memberList = memberDao.findAllSortedMembers();
		for (Members members : memberList) {
			members.setMduedate();
		}
		return memberList;
	}

	@Override
	public List<Members> sortMembersByJoindate() {
		List<Members> memberList = memberDao.sortMembersByJoindate();
		for (Members members : memberList) {
			members.setMduedate();
		}
		return memberList;
	}

	@Override
	public List<Members> findByPlan(Plans plan) {
		List<Members> memberList = memberDao.findByPlan(plan);
		for (Members members : memberList) {
			members.setMduedate();
		}
		return memberList;
	}


}
