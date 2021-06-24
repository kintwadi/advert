package com.advert43.dto;

import java.util.ArrayList;
import java.util.List;


public class Profile {

	private User user;
	private List<Plan> plan;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Plan> getPlan() {
		return plan;
	}

	public void setPlan(List<Plan> plan) {
		this.plan = plan;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Profile [user=");
		builder.append(",");
		builder.append("Plan=");
		builder.append(plan);
		builder.append("]");
		return builder.toString();
	}
	
	
}
