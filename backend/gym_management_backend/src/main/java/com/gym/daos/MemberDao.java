package com.gym.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gym.entities.Members;
import com.gym.entities.Trainers;
import com.gym.entities.Plans;

public interface MemberDao extends JpaRepository<Members, Integer>{
	Members findByMid(int id);
	Members findByMemail(String email);
	List<Members> findAll();
	List<Members> findByTrainer(Trainers id);
	@Query(value = "SELECT * FROM MEMBERS ORDER BY m_fname ASC;", nativeQuery = true)
    List<Members> findAllSortedMembers();
	@Query(value = "SELECT * FROM MEMBERS ORDER BY m_joindate ASC;", nativeQuery = true)
    List<Members> sortMembersByJoindate();
	List<Members> findByPlan(Plans plan);
}