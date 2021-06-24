package com.advert43.dto;
import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;


@Entity
public class Plan implements Serializable{

	//@Embeddable
	/*public class EntityPropertyPK implements Serializable{

		public EntityPropertyPK() {
			// TODO Auto-generated constructor stub
		}	

	}
	*/
//	@EmbeddedId
//    private EntityPropertyPK id;
	@EmbeddedId
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "package_id", referencedColumnName = "package_id")
	private Package thePackage;
	@EmbeddedId
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "feacture_id", referencedColumnName = "feacture_id")
	private Feacture feacture;
	
	public Package getPackage() {
		return thePackage;
	}

	public void setPackage(Package thePackage) {
		this.thePackage = thePackage;
	}

	public Feacture getFeacture() {
		return feacture;
	}

	public void setFeacture(Feacture feacture) {
		this.feacture = feacture;
	}

	public Plan() {
		// TODO Auto-generated constructor stub
	}
	
	
}
