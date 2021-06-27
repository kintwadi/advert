package com.advert43.dao;

import java.util.ArrayList;
import java.util.List;

import com.advert43.dto.Ad;
import com.advert43.dto.Card;
import com.advert43.dto.CardDetails;
import com.advert43.dto.CardImage;
import com.advert43.dto.Category;
import com.advert43.dto.Footer;
import com.advert43.dto.Location;
import com.advert43.dto.SubCategory;
import com.advert43.dto.Feacture;
import com.advert43.dto.Package;
import com.advert43.dto.Plan;
import com.advert43.dto.User;

public interface IDao {

	
	public List<Card> getAllCardsByuserId(int user_id);
	public List<Card> newEntries();
	public List<Card> oldEntries();
	public void updateCardPublish(int id,boolean publish);
	public List<Category> Categories();
	public List<SubCategory> subCategoryListFromCategory(int category);
	public List<List<SubCategory>> categoryDataList();
	public List<Ad>randomAds();
	public List<Location> locations();
	public Card getSingleCard(int id);
	public List<Feacture> feactures();
	public List<Package> packages();
	public List<Plan> getPlansByPackage(int package_id);
	public User addUser(User user);
	public User findByEmail(String email);
	public Location findLocationByLocationId(int location_id); 
	public User findUserById(int id);
	public User findUserByCode(int code);
	public Footer findFooterByPrice(String price);
	public SubCategory findSubCategoryById(int subcategory_id);
	public Category findCategoryById(int category_id);
	public ArrayList<CardImage> findCardImagesByCardDetailsId(int cardDetailsId);
	public List<CardImage> findCardImagesByCardDetailsId2(int cardDetailsId);
	public void updateUserRemember(String email,boolean remember);
	public void updateUserCode(String email,String code);
	public void updateUserCodeToNullAndPassword(String email,String password);
	public void saveFooter(Footer footer);
	public void saveSubCategory(SubCategory subcategory);
	public void saveCard(Card card);
	public int saveCardDetails(CardDetails cardDetail);
	public void saveCardImage(CardImage cardImage);
	public int deleteCard(Card card);
	public int deleteCardDetails(CardDetails cardDetail);
	public int deleteCardImage(CardImage cardImage);
	public int updateFooter(Footer footer);
	public int updateSubCategory(SubCategory subcategory);
	public int updateCard(Card card);
	public int updateCardDetails(CardDetails cardDetail);
	public int updateCardImage(CardImage cardImage);
	
}
