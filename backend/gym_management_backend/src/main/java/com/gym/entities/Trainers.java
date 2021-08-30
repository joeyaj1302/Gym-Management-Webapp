package com.gym.entities;


import java.util.ArrayList;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

@Entity
@Table(name = "trainers")
public class Trainers {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "t_id")
	private int tid;
	@Column(name = "t_fname")
	private String tfname;
	@Column(name = "t_lname")
	private String tlname;
	@Column(name = "t_email")
	private String temail;
	@Column(name = "t_password")
	private String tpassword;
	@Column(name = "t_age")
	private int tage;
	@Column(name = "t_gender")
	private char tgender;
	@Column(name = "t_address")
	private String taddress;
	@Column(name = "t_image")
	private String timage;
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JoinColumn(name = "u_id")
	@JsonIgnore
	private Users user; 
	@OneToMany(mappedBy = "trainer")
	@JsonIgnore
	private List<Plans> planList;
//	@OneToMany(mappedBy = "trainer", cascade = CascadeType.ALL)
//	private List<Members> memberlist;
	
	public Trainers() {	
//		this.memberlist = new ArrayList<Members>();
		this.planList = new ArrayList<Plans>();
		this.user = new Users();
	}

	public Trainers(int tid, String tfname, String tlname, String temail, String tpassword, int tage, char tgender,
			String taddress, Date mjoindate, Users user) {

		this.tid = tid;
		this.tfname = tfname;
		this.tlname = tlname;
		this.temail = temail;
		this.tpassword = tpassword;
		this.tage = tage;
		this.tgender = tgender;
		this.taddress = taddress;
		this.user = user;
//		this.memberlist = new ArrayList<Members>();
		this.planList = new ArrayList<Plans>();
	}

	public int gettid() {
		return tid;
	}

	public void settid(int tid) {
		this.tid = tid;
	}

	public String gettfname() {
		return tfname;
	}

	public void settfname(String tfname) {
		this.tfname = tfname;
	}

	public String gettlname() {
		return tlname;
	}

	public void settlname(String tlname) {
		this.tlname = tlname;
	}

	public String gettemail() {
		return temail;
	}

	public void settemail(String temail) {
		this.temail = temail;
	}

	public String gettpassword() {
		return tpassword;
	}

	public void settpassword(String tpassword) {
		this.tpassword = tpassword;
	}

	public int gettage() {
		return tage;
	}

	public void settage(int tage) {
		this.tage = tage;
	}

	public char gettgender() {
		return tgender;
	}

	public void settgender(char tgender) {
		this.tgender = tgender;
	}

	public String gettaddress() {
		return taddress;
	}

	public void settaddress(String taddress) {
		this.taddress = taddress;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}
	
	
//	public List<Members> getMemberlist() {
//		return memberlist;
//	}
//
//	public void setMemberlist(List<Members> memberlist) {
//		this.memberlist = memberlist;
//	}

	public String getTimage() {
		return timage;
	}

	public void setTimage(String timage) {
		this.timage = timage;
	}
	
	public List<Plans> getPlanList() {
		return planList;
	}

	public void setPlanList(List<Plans> planList) {
		this.planList = planList;
	}

	@Override
	public String toString() {
		return "Trainers [tid=" + tid + ", tfname=" + tfname + ", tlname=" + tlname + ", temail=" + temail
				+ ", tpassword=" + tpassword + ", tage=" + tage + ", tgender=" + tgender + ", taddress=" + taddress
				+ ", mjoindate="  + "]";
	}
	
	
}
