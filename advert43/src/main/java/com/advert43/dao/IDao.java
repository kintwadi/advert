package com.advert43.dao;

import java.util.ArrayList;
import java.util.List;

import com.advert43.dto.Ad;
import com.advert43.dto.Card;
import com.advert43.dto.CardImage;
import com.advert43.dto.Category;
import com.advert43.dto.Location;
import com.advert43.dto.SubCategory;
import com.advert43.dto.User;

public interface IDao {


	public List<Card> newEntries();
	public List<Category> Categories();
	public List<List<SubCategory>> categoryDataList();
	public List<Ad>randomAds();
	public List<Location> locations();
	public Card getSingleCard(int id,String type);
	public User addUser(User user);
	public User findByEmail(String email);
	public User findUserById(int id);
	public ArrayList<CardImage> findCardImagesByCardDetailsId(int cardDetailsId);
	public void updateUserRemember(String email,boolean remember);
}
