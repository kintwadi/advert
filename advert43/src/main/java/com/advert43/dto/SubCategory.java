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
public class SubCategory implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="sub_category_id")
	private int id;
	private String name;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "category_id", referencedColumnName = "category_id")
	private Category category;


	public SubCategory() {
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}


	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("SubCategory [id=");
		builder.append(id);
		builder.append(", name=");
		builder.append(name);
		builder.append(", parent=");
		builder.append(category);
		builder.append("]");
		return builder.toString();
	}






}
