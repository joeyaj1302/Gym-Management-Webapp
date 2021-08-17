package com.gym.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.daos.MemberDao;
import com.gym.entities.Members;
import com.gym.entities.Users;

@Transactional
@Service
public class MembersServiceImpl implements MembersService{
	@Autowired
	private MemberDao memberDao;

	
	@Override
	public Members findByMid(int id) {
		Members member = memberDao.findByMid(id);
		return member;
	}

	@Override
	public Members findByMemail(String email) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void save(Members m) {
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
		memberDao.save(member1);
	}






}
