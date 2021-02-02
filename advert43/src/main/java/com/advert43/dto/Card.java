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
public class Card implements Serializable{


	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="card_id")
	private int id;
	private String header; // title
	private String description;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "footer_id", referencedColumnName = "footer_id")
	private Footer footer;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id", referencedColumnName = "user_id")
	private User user;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "card_detail_id", referencedColumnName = "card_detail_id")
	private CardDetails cardDetail;
	
        
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "location_id", referencedColumnName = "location_id")
	private Location location;

	public Card() {
	}
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
	public Footer getFooter() {
		return footer;
	}
	public void setFooter(Footer footer) {
		this.footer = footer;
	}



	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public CardDetails getCardDetail() {
		return cardDetail;
	}
	public void setCardDetail(CardDetails cardDetail) {
		this.cardDetail = cardDetail;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Card [id=");
		builder.append(id);
		builder.append(", header=");
		builder.append(header);
		builder.append(", description=");
		builder.append(description);
		builder.append(", footer=");
		builder.append(footer);
		builder.append(", user=");
		builder.append(user);
		builder.append(", cardDetails=");
		builder.append(cardDetail);
		builder.append("]");
		return builder.toString();
	}
}
