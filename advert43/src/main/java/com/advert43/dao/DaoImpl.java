package com.advert43.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.hibernate.Hibernate;
import org.hibernate.action.internal.EntityInsertAction;
import org.springframework.data.jpa.provider.HibernateUtils;
import org.springframework.orm.jpa.EntityManagerHolder;
import org.springframework.stereotype.Repository;

import com.advert43.dto.Ad;
import com.advert43.dto.Card;
import com.advert43.dto.CardDetails;
import com.advert43.dto.CardImage;
import com.advert43.dto.Category;
import com.advert43.dto.Footer;
import com.advert43.dto.Location;
import com.advert43.dto.SubCategory;
import com.advert43.dto.User;

@Repository
public class DaoImpl  implements IDao {

	@PersistenceContext
	private EntityManager entityManager;
	private EntityManagerHolder entityManagerHolder; 
	
	@Override
	public Footer findFooterByPrice(String price) {
		// TODO Auto-generated method stub
		Query query = entityManager.createNativeQuery("Select * from footer where price = ?",Footer.class);
		query.setParameter(1, price);
		return (Footer) query.getSingleResult();
	}
	@Override
	public SubCategory findSubCategoryById(int subcategory_id) {
		// TODO Auto-generated method stub
		Query query = entityManager.createNativeQuery("Select * from subcategory where subcategory_id = ?",SubCategory.class);
		query.setParameter(1, subcategory_id);
		return (SubCategory) query.getSingleResult();
	}
	@Override
	public void saveFooter(Footer footer) {
		// TODO Auto-generated method stub
		entityManager.persist(footer);
	}
	@Override
	public void saveSubCategory(SubCategory subcategory) {
		// TODO Auto-generated method stub
		
	}
	@Override
	@Transactional
	public void saveCard(Card card) {
		// TODO Auto-generated method stub
		entityManager.persist(card);
	}
	@Override
	@Transactional
	public int saveCardDetails(CardDetails cardDetail) {
		// TODO Auto-generated method stub
		entityManager.persist(cardDetail);
		entityManager.flush();
		return cardDetail.getId();
	}
	@Override
	@Transactional
	public void saveCardImage(CardImage cardImage) {
		// TODO Auto-generated method stub
		entityManager.persist(cardImage);
	}
	@Override
	public User addUser(User user) {
		
		return null;
		
	}
	@Override
	public Location findLocationByLocationId(int location_id) {
		
		Query query = entityManager.createNativeQuery("Select * from location where location_id = ?",Location.class);
		query.setParameter(1, location_id);
		return  (Location)query.getSingleResult();
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
		cards.forEach(card->{
			card.getCardDetail().setCardImages(this.findCardImagesByCardDetailsId(card.getCardDetail().getId()));
		});
		return cards;

	}
	@SuppressWarnings("unchecked")
	@Override
	public List<SubCategory> subCategoryListFromCategory(int category) {

		Query query = entityManager.createNativeQuery("Select s.* from sub_category s where s.category_id = ?",SubCategory.class);
		query.setParameter(1, category);
		List<SubCategory> subcategories = query.getResultList();
		return subcategories;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<Category> Categories() {

		Query query = entityManager.createNativeQuery("Select * from category ",Category.class);

		List<Category> categories = query.getResultList();
		return categories;
	}
	@Override
	public ArrayList<CardImage> findCardImagesByCardDetailsId(int cardDetailsId){
		Query query = entityManager.createNativeQuery("Select * from card_image where card_detail_id = ?",CardImage.class);
		query.setParameter(1, cardDetailsId);
		@SuppressWarnings("unchecked")
		List<CardImage> cardImages = query.getResultList();
		ArrayList<CardImage> imgs = new ArrayList<>();
		imgs.addAll(cardImages);
		return imgs;
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
