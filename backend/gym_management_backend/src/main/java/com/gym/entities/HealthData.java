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

import org.hibernate.annotations.LazyToOne;

@Entity
@Table(name = "hdata")
public class HealthData {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "h_id")
	private int hid;
	@Column(name = "h_height")
	private double hheight;
	@Column(name = "h_weight")
	private double hweight;
	@Column(name = "h_fatp")
	private double hfatp;
	@Column(name = "h_targetweight")
	private double htargetweight;
	@Column(name = "h_bmi")
	private int hbmi;
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "m_id")
	private Members member;
	

public HealthData() {
}


public HealthData(int hid, double hheight, double hweight, double hfatp, double htargetweight, int hbmi,
		Members member) {
	super();
	this.hid = hid;
	this.hheight = hheight;
	this.hweight = hweight;
	this.hfatp = hfatp;
	this.htargetweight = htargetweight;
	this.hbmi = hbmi;
	this.member = member;
}


public int getHid() {
	return hid;
}


public void setHid(int hid) {
	this.hid = hid;
}


public double getHheight() {
	return hheight;
}


public void setHheight(double hheight) {
	this.hheight = hheight;
}


public double getHweight() {
	return hweight;
}


public void setHweight(double hweight) {
	this.hweight = hweight;
}


public double getHfatp() {
	return hfatp;
}


public void setHfatp(double hfatp) {
	this.hfatp = hfatp;
}


public double getHtargetweight() {
	return htargetweight;
}


public void setHtargetweight(double htargetweight) {
	this.htargetweight = htargetweight;
}


public int getHbmi() {
	return hbmi;
}


public void setHbmi(int hbmi) {
	this.hbmi = hbmi;
}


public Members getMember() {
	return member;
}


public void setMember(Members member) {
	this.member = member;
}


@Override
public String toString() {
	return "HealthData [hid=" + hid + ", hheight=" + hheight + ", hweight=" + hweight + ", hfatp=" + hfatp
			+ ", htargetweight=" + htargetweight + ", hbmi=" + hbmi + ", member=" + member + "]";
}

}


