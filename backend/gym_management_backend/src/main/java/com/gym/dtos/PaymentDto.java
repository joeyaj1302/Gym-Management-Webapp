package com.gym.dtos;


import java.util.Date;
import java.time.LocalDate;
import java.time.ZoneId;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gym.entities.Members;
import com.gym.entities.Payments;


public class PaymentDto {
	private int pid;
	private boolean pstatus;
	private double pamount;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date pdate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date duedate;
	private Members member;
	
	public PaymentDto() {
		this.member = new Members();

		
	}


	public PaymentDto(int pid, boolean pstatus, double pamount, Date pdate) {
		
		this.pid = pid;
		this.pstatus = pstatus;
		this.pamount = pamount;
		this.pdate = pdate;
	}


	public int getPid() {
		return pid;
	}


	public void setPid(int pid) {
		this.pid = pid;
	}


	public boolean isPstatus() {
		return pstatus;
	}


	public void setPstatus(boolean pstatus) {
		this.pstatus = pstatus;
	}


	public double getPamount() {
		return pamount;
	}


	public void setPamount(double pamount) {
		this.pamount = pamount;
	}


	public Date getPdate() {
		return pdate;
	}


	public void setPdate(Date pdate) {
		this.pdate = pdate;
	}
	

	public Members getMember() {
		return member;
	}


	public void setMember(Members member) {
		this.member = member;
	}

	
	public Date getDuedate() {
		return duedate;
	}


	public void setDuedate(Date duedate) {
//		LocalDate joindate = member.getMjoindate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
//		LocalDate ddate = joindate.plusDays(member.getMembershiptype()*30);
//		ZoneId defaultZoneId = ZoneId.systemDefault();
//		Date date = Date.from(ddate.atStartOfDay(defaultZoneId).toInstant());
//		System.out.println(date);
		this.duedate = duedate;
	}
	
	public static PaymentDto fromEntity(Payments entity) {
		PaymentDto dto = new PaymentDto();
		BeanUtils.copyProperties(entity, dto);
		int d = entity.getMember().getMembershiptype() - 2;
		System.out.println("membership type is :" +d);
		Date e = entity.getMember().getMjoindate();
		e.setMonth(d);
		dto.setDuedate(e);
		System.out.println(dto.toString());
		return dto;
		
	}



	@Override
	public String toString() {
		return "PaymentDto [pid=" + pid + ", pstatus=" + pstatus + ", pamount=" + pamount + ", pdate=" + pdate + "]";
	}



	
	
	
	

}
