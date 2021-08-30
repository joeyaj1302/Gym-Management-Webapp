package com.gym.dtos;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.gym.entities.Members;
import com.gym.entities.Plans;
import com.gym.entities.Trainers;

public class MemberDto {
	private int mid;
	private String mfname;
	private String mlname;
	private String memail;
	private String mpassword;
	private int mage;
	private char mgender;
	private String maddress;
	private Date mjoindate;
	private Trainers trainer;
	private Plans plans;
	public MemberDto() {
		this.trainer = new Trainers();
		this.plans = new Plans();
	}
	
	
	public MemberDto(int mid, String mfname, String mlname, String memail, String mpassword, int mage, char mgender,
			String maddress, Date mjoindate, Trainers trainer, Plans plans) {

		this.mid = mid;
		this.mfname = mfname;
		this.mlname = mlname;
		this.memail = memail;
		this.mpassword = mpassword;
		this.mage = mage;
		this.mgender = mgender;
		this.maddress = maddress;
		this.mjoindate = mjoindate;
		this.trainer = trainer;
		this.plans = plans;
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


	public Trainers getTrainer() {
		return trainer;
	}


	public void setTrainer(Trainers trainer) {
		this.trainer = trainer;
	}


	public Plans getPlans() {
		return plans;
	}


	public void setPlans(Plans plans) {
		this.plans = plans;
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
	public static MemberDto fromEntity(Members entity) {
		MemberDto dto = new MemberDto();
		BeanUtils.copyProperties(entity, dto);
		System.out.println(dto.toString());
		return dto;
		
	}


	@Override
	public String toString() {
		return "MemberDto [mid=" + mid + ", mfname=" + mfname + ", mlname=" + mlname + ", memail=" + memail
				+ ", mpassword=" + mpassword + ", mage=" + mage + ", mgender=" + mgender + ", maddress=" + maddress
				+ ", mjoindate=" + mjoindate +  "]";
	}
	
	
	
}
