package com.gym.entities;

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

import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name = "plans")
public class Plans {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "pl_id")
	private int pid;
	@Column(name = "pl_name")
	private String pname;
	@Column(name = "pl_desc")
	private String pdesc;
	@Column(name = "pl_duration")
	private int pduration;
	@Column(name = "pl_cost")
	private double pcost;
	@Column(name = "pl_image")
	private String plimage;
	@ManyToOne( fetch = FetchType.EAGER )
	@JoinColumn(name = "t_id")
	private Trainers trainer;
	
	public Plans() {
	}
	
	public Plans(int pid, String pname, String pdesc, int pduration, double pcost) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.pdesc = pdesc;
		this.pduration = pduration;
		this.pcost = pcost;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getPdesc() {
		return pdesc;
	}
	public void setPdesc(String pdesc) {
		this.pdesc = pdesc;
	}
	public int getPduration() {
		return pduration;
	}
	public void setPduration(int pduration) {
		this.pduration = pduration;
	}
	public double getPcost() {
		return pcost;
	}
	public void setPcost(double pcost) {
		this.pcost = pcost;
	}
	
	public Trainers getTrainer() {
		return trainer;
	}

	public void setTrainer(Trainers trainer) {
		this.trainer = trainer;
	}
	
	public String getPlimage() {
		return plimage;
	}

	public void setPlimage(String plimage) {
		this.plimage = plimage;
	}

	@Override
	public String toString() {
		return "Plans [pid=" + pid + ", pname=" + pname + ", pdesc=" + pdesc + ", pduration=" + pduration + ", pcost="
				+ pcost + "]";
	}
}
