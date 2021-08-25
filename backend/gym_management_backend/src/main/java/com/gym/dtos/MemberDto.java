package com.gym.dtos;

import java.util.Date;

public class MemberDto {
	private int m_id;
	private String m_fname;
	private String m_lname;
	private String m_email;
	private String m_password;
	private int m_age;
	private char m_gender;
	private String m_address;
	private Date m_joindate;
	public MemberDto() {
		
	}
	public MemberDto(int m_id, String m_fname, String m_lname, String m_email, String m_password, int m_age,
			char m_gender, String m_address, Date m_joindate) {
		this.m_id = m_id;
		this.m_fname = m_fname;
		this.m_lname = m_lname;
		this.m_email = m_email;
		this.m_password = m_password;
		this.m_age = m_age;
		this.m_gender = m_gender;
		this.m_address = m_address;
		this.m_joindate = m_joindate;
	}
	public int getM_id() {
		return m_id;
	}
	public void setM_id(int m_id) {
		this.m_id = m_id;
	}
	public String getM_fname() {
		return m_fname;
	}
	public void setM_fname(String m_fname) {
		this.m_fname = m_fname;
	}
	public String getM_lname() {
		return m_lname;
	}
	public void setM_lname(String m_lname) {
		this.m_lname = m_lname;
	}
	public String getM_email() {
		return m_email;
	}
	public void setM_email(String m_email) {
		this.m_email = m_email;
	}
	public String getM_password() {
		return m_password;
	}
	public void setM_password(String m_password) {
		this.m_password = m_password;
	}
	public int getM_age() {
		return m_age;
	}
	public void setM_age(int m_age) {
		this.m_age = m_age;
	}
	public char getM_gender() {
		return m_gender;
	}
	public void setM_gender(char m_gender) {
		this.m_gender = m_gender;
	}
	public String getM_address() {
		return m_address;
	}
	public void setM_address(String m_address) {
		this.m_address = m_address;
	}
	public Date getM_joindate() {
		return m_joindate;
	}
	public void setM_joindate(Date m_joindate) {
		this.m_joindate = m_joindate;
	}
	
//	public static AlbumDTO fromEntity(Album entity) {
//		AlbumDTO dto = new AlbumDTO();
//		BeanUtils.copyProperties(entity, dto);
//		dto.setArtistId(entity.getArtist().getId());
//		dto.setArtistFirstName(entity.getArtist().getFirstName());
//		dto.setArtistLastName(entity.getArtist().getLastName());
//		dto.setArtistThumbnail(entity.getArtist().getThumbnail());
//		return dto;
//	}
	@Override
	public String toString() {
		return "MemberDto [m_id=" + m_id + ", m_fname=" + m_fname + ", m_lname=" + m_lname + ", m_email=" + m_email
				+ ", m_password=" + m_password + ", m_age=" + m_age + ", m_gender=" + m_gender + ", m_address="
				+ m_address + ", m_joindate=" + m_joindate + "]";
	}
	
	
	
}
