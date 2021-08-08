package com.gym.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class Users {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "u_id")
	private int uid; 
	@Column(name = "u_fname")
	private String ufname;
	@Column(name = "u_lname")
	private String ulname;
	@Column(name = "u_email")
	private String uemail;
	@Column(name = "u_password")
	private String upassword;
	@Column(name = "u_role")
	private String urole;
	@OneToOne(mappedBy = "user")
	private Members member;
	
	public Users() {
	}
	
	public Users(int uid, String ufname, String ulname, String uemail, String upassword, String urole, Members member) {
		this.uid = uid;
		this.ufname = ufname;
		this.ulname = ulname;
		this.uemail = uemail;
		this.upassword = upassword;
		this.urole = urole;
		this.member = member;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getUfname() {
		return ufname;
	}
	public void setUfname(String ufname) {
		this.ufname = ufname;
	}
	public String getUlname() {
		return ulname;
	}
	public void setUlname(String ulname) {
		this.ulname = ulname;
	}
	public String getUemail() {
		return uemail;
	}
	public void setUemail(String uemail) {
		this.uemail = uemail;
	}
	public String getUpassword() {
		return upassword;
	}
	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}
	public String getUrole() {
		return urole;
	}
	public void setUrole(String urole) {
		this.urole = urole;
	}
	public Members getMember() {
		return member;
	}
	public void setMember(Members member) {
		this.member = member;
	}
	@Override
	public String toString() {
		return "Users [uid=" + uid + ", ufname=" + ufname + ", ulname=" + ulname + ", uemail=" + uemail + ", upassword="
				+ upassword + ", urole=" + urole + ", member=" + member + "]";
	}
	
	
	
	
}
