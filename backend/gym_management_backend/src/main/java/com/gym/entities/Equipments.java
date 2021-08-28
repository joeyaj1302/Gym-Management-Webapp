package com.gym.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "equipments")
public class Equipments  {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "e_id")
	private int eid;
	@Column(name = "e_name")
	private String ename;
	@Column(name = "e_cost")
	private double ecost;
	@Column(name = "e_desc")
	private String edesc;
	@Column(name = "e_purchasedate")
	private Date epurchasedate;
	@Column(name = "e_qty")
	private int eqty;
	
	
	public Equipments() {
		
	}


	public Equipments(int eid, String ename, double ecost, String edesc, Date epurchasedate, int eqty) {
		super();
		this.eid = eid;
		this.ename = ename;
		this.ecost = ecost;
		this.edesc = edesc;
		this.epurchasedate = epurchasedate;
		this.eqty = eqty;
	}


	public int getEid() {
		return eid;
	}


	public void setEid(int eid) {
		this.eid = eid;
	}


	public String getEname() {
		return ename;
	}


	public void setEname(String ename) {
		this.ename = ename;
	}


	public double getEcost() {
		return ecost;
	}


	public void setEcost(double ecost) {
		this.ecost = ecost;
	}


	public String getEdesc() {
		return edesc;
	}


	public void setEdesc(String edesc) {
		this.edesc = edesc;
	}


	public Date getEpurchasedate() {
		return epurchasedate;
	}


	public void setEpurchasedate(Date epurchasedate) {
		this.epurchasedate = epurchasedate;
	}


	public int getEqty() {
		return eqty;
	}


	public void setEqty(int eqty) {
		this.eqty = eqty;
	}


	@Override
	public String toString() {
		return "Equipments [eid=" + eid + ", ename=" + ename + ", ecost=" + ecost + ", edesc=" + edesc
				+ ", epurchasedate=" + epurchasedate + ", eqty=" + eqty + "]";
	}
	
	
	
}
