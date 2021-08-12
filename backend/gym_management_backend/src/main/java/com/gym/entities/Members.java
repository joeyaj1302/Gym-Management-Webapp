package com.gym.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
@Entity
@Table(name = "members")
public class Members {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "m_id")
	private int mid;
	@Column(name = "m_fname")
	private String mfname;
	@Column(name = "m_lname")
	private String mlname;
	@Column(name = "m_email")
	private String memail;
	@Column(name = "m_password")
	private String mpassword;
	@Column(name = "m_age")
	private int mage;
	@Column(name = "m_gender")
	private char mgender;
	@Column(name = "m_address")
	private String maddress;
	@Column(name = "m_joindate")
	private Date mjoindate;
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "u_id")
	@JsonIgnore
	private Users user;
	
	public Members() {	
		
	}

	public Members(int mid, String mfname, String mlname, String memail, String mpassword, int mage, char mgender,
			String maddress, Date mjoindate, Users user) {

		this.mid = mid;
		this.mfname = mfname;
		this.mlname = mlname;
		this.memail = memail;
		this.mpassword = mpassword;
		this.mage = mage;
		this.mgender = mgender;
		this.maddress = maddress;
		this.mjoindate = mjoindate;
		this.user = user;
	}

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public String getMfname() {
		return mfname;
	}

	public void setMfname(String mfname) {
		this.mfname = mfname;
	}

	public String getMlname() {
		return mlname;
	}

	public void setMlname(String mlname) {
		this.mlname = mlname;
	}

	public String getMemail() {
		return memail;
	}

	public void setMemail(String memail) {
		this.memail = memail;
	}

	public String getMpassword() {
		return mpassword;
	}

	public void setMpassword(String mpassword) {
		this.mpassword = mpassword;
	}

	public int getMage() {
		return mage;
	}

	public void setMage(int mage) {
		this.mage = mage;
	}

	public char getMgender() {
		return mgender;
	}

	public void setMgender(char mgender) {
		this.mgender = mgender;
	}

	public String getMaddress() {
		return maddress;
	}

	public void setMaddress(String maddress) {
		this.maddress = maddress;
	}

	public Date getMjoindate() {
		return mjoindate;
	}

	public void setMjoindate(Date mjoindate) {
		this.mjoindate = mjoindate;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Members [mid=" + mid + ", mfname=" + mfname + ", mlname=" + mlname + ", memail=" + memail
				+ ", mpassword=" + mpassword + ", mage=" + mage + ", mgender=" + mgender + ", maddress=" + maddress
				+ ", mjoindate=" + mjoindate + "]";
	}
	
	
}
