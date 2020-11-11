package com.advert43.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.advert43.dto.Ad;
import com.advert43.dto.Card;
import com.advert43.dto.Category;
import com.advert43.dto.Location;
import com.advert43.dto.SubCategory;
import com.advert43.dto.User;

@Repository
public class DaoImpl  implements IDao {

	@PersistenceContext
	private EntityManager entityManager;
	
	
	@Override
	public User addUser(User user) {
		
		return null;
		
	}
	@Override
	public User findByEmail(String email) {
		
		Query query = entityManager.createNativeQuery("Select * from user where email = ?",User.class);
		query.setParameter(1, email);
		return  (User)query.getSingleResult();
	}
	
	 @Transactional 
	@Override
	public void updateUserRemember(String email,boolean remember) {
		Query query = entityManager.createNativeQuery("UPDATE user SET remember = ? WHERE email = ?",User.class);
		int value = 0;
		if(remember) {
			value = 1;
		}
		query.setParameter(1, value);
		query.setParameter(2, email);
		query.executeUpdate();
		
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Card> newEntries() {
		
		Query query = entityManager.createNativeQuery("Select * from card ",Card.class);

		List<Card> cards = query.getResultList();

		return cards;


	}
	@SuppressWarnings("unchecked")
	@Override
	public List<Category> Categories() {

		Query query = entityManager.createNativeQuery("Select * from category ",Category.class);

		List<Category> categories = query.getResultList();
		return categories;
	}
	@Override
	public List<List<SubCategory>> categoryDataList() {


		Query query = entityManager.createNativeQuery("Select * from sub_category where category_id = ?",SubCategory.class);

		List<List<SubCategory>> subCategoryList = new ArrayList<>();
                // observation:
		// big complexity, try to do join of the tables subcategory with category 
                // on back with foreach is more slow than to do with query join tables
		Categories().forEach(category ->{

			
			query.setParameter(1, category.getId());

			@SuppressWarnings("unchecked")
			List<SubCategory> subCategories = query.getResultList();
			

			subCategoryList.add(subCategories);

		});
	

		
		return subCategoryList;
	}
	@Override
	public List<Ad> randomAds() {
		
		Query query = entityManager.createNativeQuery("Select * from ad ",Ad.class);

		@SuppressWarnings("unchecked")
		List<Ad> ads = query.getResultList();
	
		
		return ads;
	}
	@Override
	public List<Location> locations() {
		
		Query query = entityManager.createNativeQuery("Select * from location ",Location.class);

		@SuppressWarnings("unchecked")
		List<Location> locations = query.getResultList();
		
		return locations;
		
		
	}
	@Override
	public Card getSingleCard(int id, String type) {
		
		Query query = entityManager.createNativeQuery("Select * from card where card_id = ?",Card.class);
		
		query.setParameter(1, id);
		Card card = (Card)query.getSingleResult();
		
		
		return card;
	}
	@Override
	public User findUserById(int id) {
		Query query = entityManager.createNativeQuery("Select * from user where user_id = ?",User.class);
		query.setParameter(1, id);
		return  (User)query.getSingleResult();
	}
	

	
	

}
