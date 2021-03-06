package com.advert43.dto;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.validator.constraints.UniqueElements;

@Entity
public class User implements Serializable {

	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer id;
	private String name;
	private byte[] photo;
	private String telefone;
	private  boolean telVisible;
	@Column(unique = true)
	private String email;
	@Column(name = "code_recovery",unique = true)
	private String codeRecovery;
	private boolean emailVisible;
	private String activeSince;
	private String password;
	private boolean remember;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "package_id", referencedColumnName = "package_id")
	private Package thepackage;

	
	
	public String getActiveSince() {
		return activeSince;
	}




	public String getCodeRecovery() {
		return codeRecovery;
	}




	public void setCodeRecovery(String codeRecovery) {
		this.codeRecovery = codeRecovery;
	}




	public void setActiveSince(String activeSince) {
		this.activeSince = activeSince;
	}




	public User() {
		
	}
	
	
	
	
	public Package getPackage() {
		return thepackage;
	}




	public void setPackage(Package thepackage) {
		this.thepackage = thepackage;
	}




	public User(Integer id, String name) {
		super();
		this.id = id;
		this.name = name;
	}




	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	


	public byte[] getPhoto() {
		return photo;
	}




	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}




	public String getTelefone() {
		return telefone;
	}




	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}




	public boolean isTel_visible() {
		return telVisible;
	}




	public void setTel_visible(boolean tel_visible) {
		this.telVisible = tel_visible;
	}




	public String getPassword() {
		return password;
	}




	public void setPassword(String password) {
		this.password = password;
	}




	public boolean isRemember() {
		return remember;
	}




	public void setRemember(boolean remember) {
		this.remember = remember;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public boolean isEmail_visible() {
		return emailVisible;
	}




	public void setEmail_visible(boolean email_visible) {
		this.emailVisible = email_visible;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("User [id=");
		builder.append(id);
		builder.append(", name=");
		builder.append(name);
		builder.append(", photo=");
		builder.append(photo);
		builder.append(", telefone=");
		builder.append(telefone);
		builder.append(", telVisible=");
		builder.append(telVisible);
		builder.append(", email=");
		builder.append(email);
		builder.append(", emailVisible=");
		builder.append(emailVisible);
		builder.append(", activeSince=");
		builder.append(activeSince);
		builder.append(", password=");
		builder.append(password);
		builder.append(", remember=");
		builder.append(remember);
		builder.append("]");
		return builder.toString();
	}
	
	
	
	
}
