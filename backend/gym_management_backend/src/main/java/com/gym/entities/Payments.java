package com.gym.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
	@Column(name = "p_date")
	private Date pdate;
	
	
	public Payments() {
		
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


	@Override
	public String toString() {
		return "Payments [pid=" + pid + ", pstatus=" + pstatus + ", pamount=" + pamount + ", pdate=" + pdate + "]";
	}



	
	
	
	

}
