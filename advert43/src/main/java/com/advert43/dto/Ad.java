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

@Entity
public class Ad  implements Serializable{
	

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ad_id")
	private int id;
	private String header;
	private String description;
	private byte[] image;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "footer_id", referencedColumnName = "footer_id")
	private Footer footer;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getHeader() {
		return header;
	}

	public void setHeader(String header) {
		this.header = header;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public Footer getFooter() {
		return footer;
	}

	public void setFooter(Footer footer) {
		this.footer = footer;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Ad [id=");
		builder.append(id);
		builder.append(", header=");
		builder.append(header);
		builder.append(", description=");
		builder.append(description);
		builder.append(", image=");
		builder.append(image);
		builder.append(", footer=");
		builder.append(footer);
		builder.append("]");
		return builder.toString();
	}
	
	
	
	
	

}
