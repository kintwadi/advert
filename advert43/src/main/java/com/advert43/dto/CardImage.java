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
public class CardImage implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="card_image_id")
	private int id;
	private byte[] image;
	private boolean isCover;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "card_detail_id", referencedColumnName = "card_detail_id")
	private CardDetails cardDetail;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public boolean isCover() {
		return isCover;
	}
	public void setCover(boolean isCover) {
		this.isCover = isCover;
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
		builder.append("CardImage [id=");
		builder.append(id);
		builder.append(", image=");
		builder.append(image);
		builder.append(", isCover=");
		builder.append(isCover);
		builder.append("]");
		return builder.toString();
	}

}
