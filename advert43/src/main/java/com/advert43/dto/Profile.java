package com.advert43.dto;

public class Profile {

	private User user;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Profile [user=");
		builder.append(user);
		builder.append("]");
		return builder.toString();
	}
	
	
}
