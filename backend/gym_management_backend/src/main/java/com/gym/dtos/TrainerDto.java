package com.gym.dtos;

public class TrainerDto {
	private int tid;
	private String tfname;
	private String tlname;
	private String temail;
	private String tpassword;
	private int tage;
	private char tgender;
	private String taddress;
	public TrainerDto() {
		
	}
	public TrainerDto(int tid, String tfname, String tlname, String temail, String tpassword, int tage, char tgender,
			String taddress) {
		this.tid = tid;
		this.tfname = tfname;
		this.tlname = tlname;
		this.temail = temail;
		this.tpassword = tpassword;
		this.tage = tage;
		this.tgender = tgender;
		this.taddress = taddress;
	}
	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public String getTfname() {
		return tfname;
	}
	public void setTfname(String tfname) {
		this.tfname = tfname;
	}
	public String getTlname() {
		return tlname;
	}
	public void setTlname(String tlname) {
		this.tlname = tlname;
	}
	public String getTemail() {
		return temail;
	}
	public void setTemail(String temail) {
		this.temail = temail;
	}
	public String getTpassword() {
		return tpassword;
	}
	public void setTpassword(String tpassword) {
		this.tpassword = tpassword;
	}
	public int getTage() {
		return tage;
	}
	public void setTage(int tage) {
		this.tage = tage;
	}
	public char getTgender() {
		return tgender;
	}
	public void setTgender(char tgender) {
		this.tgender = tgender;
	}
	public String getTaddress() {
		return taddress;
	}
	public void setTaddress(String taddress) {
		this.taddress = taddress;
	}
	@Override
	public String toString() {
		return "TrainerDto [tid=" + tid + ", tfname=" + tfname + ", tlname=" + tlname + ", temail=" + temail
				+ ", tpassword=" + tpassword + ", tage=" + tage + ", tgender=" + tgender + ", taddress=" + taddress
				+ "]";
	}
	
	

}
