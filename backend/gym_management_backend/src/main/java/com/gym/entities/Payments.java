package com.gym.entities;

import java.util.Date;
import java.time.LocalDate;
import java.time.ZoneId;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "payments")
public class Payments {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "p_id")
	private int pid;
	@Column(name = "p_status")
	private boolean pstatus;
	@Column(name = "p_amount")
	private double pamount;
	@Temporal(TemporalType.DATE)
	@Column(name = "p_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date pdate;
	@Temporal(TemporalType.DATE)
	@Column(name = "p_duedate")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date pduedate;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "m_id")
	private Members member;
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JoinColumn(name = "pl_id")
	@JsonIgnore
	private Plans plan;
	public Payments() {
		this.member = new Members();

	}


	public Payments(int pid, boolean pstatus, double pamount, Date pdate) {
		
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
	
	public Plans getPlan() {
		return plan;
	}


	public void setPlan(Plans plan) {
		this.plan = plan;
	}
	

	public Date getPduedate() {
		return pduedate;
	}


	public void setPduedate() {
		System.out.println("Setter duedate");
		Date joindate = this.pdate ; 
		int month = joindate.getMonth() + member.membershiptype;
		Date duedate = (Date) joindate.clone();
		System.out.println("month");
		if(month>11)  {
			int diff = month - 11;
			int year = duedate.getYear() + 1;
			duedate.setMonth(diff);
			duedate.setYear(year);
		}else {
			duedate.setMonth(month);
		}
		System.out.println(duedate);
		this.pduedate = duedate;
		this.pduedate = pduedate;
	}


	@Override
	public String toString() {
		return "Payments [pid=" + pid + ", pstatus=" + pstatus + ", pamount=" + pamount + ", pdate=" + pdate + "]";
	}



	
	
	
	

}
