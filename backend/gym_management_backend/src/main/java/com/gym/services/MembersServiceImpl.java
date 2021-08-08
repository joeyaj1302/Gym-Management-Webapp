package com.gym.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.daos.MemberDao;
import com.gym.entities.Members;

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

}
