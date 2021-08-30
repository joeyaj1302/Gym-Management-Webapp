package com.gym.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	@Column(name = "pl_cost")
	private double pcost;
	@Column(name = "pl_image")
	private String plimage;
	@ManyToOne( fetch = FetchType.EAGER)
	@JoinColumn(name = "t_id")
	private Trainers trainer;
	@OneToMany(mappedBy = "plan")
	@JsonIgnore
	private List<Members> memberList;
	public Plans() {
		this.trainer = new Trainers();
		this.memberList = new ArrayList<Members>();
	}
	
	public Plans(int pid, String pname, String pdesc, int pduration, double pcost) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.pdesc = pdesc;
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
	
	

	public List<Members> getMemberList() {
		return memberList;
	}

	public void setMemberList(List<Members> memberList) {
		this.memberList = memberList;
	}

	@Override
	public String toString() {
		return "Plans [pid=" + pid + ", pname=" + pname + ", pdesc=" + pdesc + ", pduration=" + ", pcost="
				+ pcost + "]";
	}
}
