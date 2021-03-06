package com.gym.entities;

import java.util.Date;

import javax.annotation.PostConstruct;
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
import javax.persistence.Transient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;

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
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "m_joindate")
	private Date mjoindate;
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@Column(name = "m_duedate")
	private Date mduedate;
	@Column(name = "m_image")
	private String mimage;
	@Column(name = "m_membershiptype")
	@JsonIgnore 
	int membershiptype;
	@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinColumn(name = "u_id")
	@JsonIgnore
	private Users user;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "t_id")
	private Trainers trainer;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "pl_id")
	private Plans plan;
	public Members() {	
		this.trainer = new Trainers();
		this.user = new Users();
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
	
	public Date getMduedate() {
		return this.mduedate;
	}
	//@PostConstruct
	public void setMduedate() {
		System.out.println("Setter duedate");
		Date joindate = this.mjoindate ; 
		int month = joindate.getMonth() + membershiptype;
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
		this.mduedate = duedate;
	}


	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public Trainers getTrainer() {
		return trainer;
	}

	public void setTrainer(Trainers trainer) {
		this.trainer = trainer;
	}
	
	public Plans getPlan() {
		return plan;
	}

	public void setPlan(Plans plan) {
		this.plan = plan;
	}
	
	public String getMimage() {
		return mimage;
	}

	public void setMimage(String mimage) {
		this.mimage = mimage;
	}
	
	public int getMembershiptype() {
		return membershiptype;
	}

	public void setMembershiptype(int membershiptype) {
		this.membershiptype = membershiptype;
	}
	


	@Override
	public String toString() {
		return "Members [mid=" + mid + ", mfname=" + mfname + ", mlname=" + mlname + ", memail=" + memail
				+ ", mpassword=" + mpassword + ", mage=" + mage + ", mgender=" + mgender + ", maddress=" + maddress
				+ ", mjoindate=" + mjoindate +   ", mduedate = " + mduedate + "]";
	}
	
	
}