package com.advert43.dto;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class CardDetails {


	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="card_detail_id")
	private int id;
	// I offer, I am looking for etc,
	private String type;
	private double price;
	// new, used
	private boolean status;
	// Negotiable, To change, To give a away
	private String dealtype;
	private String category;
	private String subcategory;
	private String zipcode;
	private String province;
	private String street;
	private String reference;
	// publish now
	private boolean publish;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "card_image", referencedColumnName = "card_image_id")
	private CardImage cardImage;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getDealtype() {
		return dealtype;
	}

	public void setDealtype(String dealtype) {
		this.dealtype = dealtype;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getSubcategory() {
		return subcategory;
	}

	public void setSubcategory(String subcategory) {
		this.subcategory = subcategory;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
	}

	public boolean isPublish() {
		return publish;
	}

	public void setPublish(boolean publish) {
		this.publish = publish;
	}

	public CardImage getCardImage() {
		return cardImage;
	}

	public void setCardImage(CardImage cardImage) {
		this.cardImage = cardImage;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("CardDetails [id=");
		builder.append(id);
		builder.append(", type=");
		builder.append(type);
		builder.append(", price=");
		builder.append(price);
		builder.append(", status=");
		builder.append(status);
		builder.append(", dealtype=");
		builder.append(dealtype);
		builder.append(", category=");
		builder.append(category);
		builder.append(", subcategory=");
		builder.append(subcategory);
		builder.append(", zipcode=");
		builder.append(zipcode);
		builder.append(", province=");
		builder.append(province);
		builder.append(", street=");
		builder.append(street);
		builder.append(", reference=");
		builder.append(reference);
		builder.append(", publish=");
		builder.append(publish);
		builder.append(", cardImage=");
		builder.append(cardImage);
		builder.append("]");
		return builder.toString();
	}



}
