package com.gym.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "enquiry")
public class Enquiry {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "e_id")
	private int eqid;
	@Column(name = "e_fname")
	private String efname;
	@Column(name = "e_lname")
	private String elname;
	@Column(name = "e_email")
	private String eemail;
	@Column(name = "e_phone")
	private String ephone;
	@Column(name = "e_message")
	private String message;
	
	public Enquiry(){
		
	}
	
	public Enquiry(int eqid, String efname, String elname, String eemail, String ephone, String message) {
		super();
		this.eqid = eqid;
		this.efname = efname;
		this.elname = elname;
		this.eemail = eemail;
		this.ephone = ephone;
		this.message = message;
	}

	
	public int getEqid() {
		return eqid;
	}


	public void setEqid(int eqid) {
		this.eqid = eqid;
	}

	public String getEfname() {
		return efname;
	}
	public void setEfname(String efname) {
		this.efname = efname;
	}
	public String getElname() {
		return elname;
	}
	public void setElname(String elname) {
		this.elname = elname;
	}
	public String getEemail() {
		return eemail;
	}
	public void setEemail(String eemail) {
		this.eemail = eemail;
	}
	public String getEphone() {
		return ephone;
	}
	public void setEphone(String ephone) {
		this.ephone = ephone;
	}
	
	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Enquiry [eqid=" + eqid + ", efname=" + efname + ", elname=" + elname + ", eemail=" + eemail
				+ ", ephone=" + ephone + ", message=" + message + "]";
	}


	
}
