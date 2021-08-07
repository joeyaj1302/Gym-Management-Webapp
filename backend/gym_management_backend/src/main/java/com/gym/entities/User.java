package com.gym.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
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
}
