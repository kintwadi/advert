package com.advert43.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
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
		try {
			Query query = entityManager.createNativeQuery("Select * from footer where price = ?",Footer.class);
			query.setParameter(1, price);
			return (Footer) query.getSingleResult();
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	@Transactional 
	@Override
	public void updateCardPublish(int id,boolean publish) {
		Query query = entityManager.createNativeQuery("UPDATE card_details cd SET cd.publish = ? WHERE cd.card_detail_id = (select c.card_detail_id from card c where c.card_id = ?)",CardDetails.class);
		int value = 0;
		if(publish) {
			value = 1;
		}
		query.setParameter(1, value);
		query.setParameter(2, id);
		query.executeUpdate();
	}
	@Override
	public Category findCategoryById(int category_id){
		// TODO Auto-generated method stub
		try {
			Query query = entityManager.createNativeQuery("Select * from category where category_id = ?",Category.class);
			query.setParameter(1, category_id);
			return (Category) query.getSingleResult();
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	@Override
	public SubCategory findSubCategoryById(int subcategory_id) {
		// TODO Auto-generated method stub
		try {
			Query query = entityManager.createNativeQuery("Select * from sub_category where sub_category_id = ?",SubCategory.class);
			query.setParameter(1, subcategory_id);
			return (SubCategory) query.getSingleResult();
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	@Override
	@Transactional
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
	@Transactional
	public int deleteCard(Card card) {
		// TODO Auto-generated method stub
		Query query = entityManager.createNativeQuery("delete from card where card_id = ?",Card.class);
		query.setParameter(1, card.getId());
		return query.executeUpdate();
	}
	@Override
	@Transactional
	public int deleteCardDetails(CardDetails cardDetail) {
		// TODO Auto-generated method stub
		Query query = entityManager.createNativeQuery("delete from card_details where card_detail_id = ?",CardDetails.class);
		query.setParameter(1, cardDetail.getId());
		return query.executeUpdate();
	}
	@Override
	@Transactional
	public int deleteCardImage(CardImage cardImage) {
		// TODO Auto-generated method stub
		Query query = entityManager.createNativeQuery("delete  from card_image where card_image_id = ?",CardImage.class);
		query.setParameter(1, cardImage.getId());
		return query.executeUpdate();
	}
	@Override
	public Location findLocationByLocationId(int location_id) {
		try {
			Query query = entityManager.createNativeQuery("Select * from location where location_id = ?",Location.class);
			query.setParameter(1, location_id);
			return  (Location)query.getSingleResult();
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	@Override
	public User findByEmail(String email) {
		try {
			Query query = entityManager.createNativeQuery("Select * from user where email = ?",User.class);
			query.setParameter(1, email);
			return  (User)query.getSingleResult();
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
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
		public List<Card> getAllCardsByuserId(int user_id) {
			try {
				Query query = entityManager.createNativeQuery("SELECT * FROM advert43.card where user_id = ?  order by card_id DESC;",Card.class);
				query.setParameter(1, user_id);
				List<Card> cards = query.getResultList();
				cards.forEach(card->{
					card.getCardDetail().setCardImages(this.findCardImagesByCardDetailsId(card.getCardDetail().getId()));
				});
				return cards;
			} catch (NoResultException  e) {
				// TODO: handle exception
				return null;
			}

		}

	@SuppressWarnings("unchecked")
	@Override
	public List<Card> newEntries() {
		try {		
			Query query = entityManager.createNativeQuery("SELECT c.*, TIMESTAMPDIFF(DAY, DATE(c.create_date), CURDATE()) as dias FROM advert43.card c join card_details cd on cd.card_detail_id = c.card_detail_id where cd.publish = 1 and (TIMESTAMPDIFF(DAY, DATE(c.create_date),CURDATE()) <= 7) order by c.create_date DESC;",Card.class);
			List<Card> cards = query.getResultList();
			cards.forEach(card->{
				card.getCardDetail().setCardImages(this.findCardImagesByCardDetailsId(card.getCardDetail().getId()));
			});
			return cards;
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Card> oldEntries() {
		try {		
			Query query = entityManager.createNativeQuery("SELECT c.*, TIMESTAMPDIFF(DAY, DATE(c.create_date), CURDATE()) as dias FROM advert43.card c join card_details cd on cd.card_detail_id = c.card_detail_id where cd.publish = 1 and (TIMESTAMPDIFF(DAY, DATE(c.create_date),CURDATE()) > 7) order by c.create_date DESC;",Card.class);
			List<Card> cards = query.getResultList();
			cards.forEach(card->{
				card.getCardDetail().setCardImages(this.findCardImagesByCardDetailsId(card.getCardDetail().getId()));
			});
			return cards;
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<SubCategory> subCategoryListFromCategory(int category) {
		try {
			Query query = entityManager.createNativeQuery("Select s.* from sub_category s where s.category_id = ?",SubCategory.class);
			query.setParameter(1, category);
			List<SubCategory> subcategories = query.getResultList();
			return subcategories;
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<Category> Categories() {
		try {
			Query query = entityManager.createNativeQuery("Select * from category ",Category.class);
			List<Category> categories = query.getResultList();
			return categories;
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	@Override
	public ArrayList<CardImage> findCardImagesByCardDetailsId(int cardDetailsId){
		try {
			Query query = entityManager.createNativeQuery("Select * from card_image where card_detail_id = ?",CardImage.class);
			query.setParameter(1, cardDetailsId);
			@SuppressWarnings("unchecked")
			List<CardImage> cardImages = query.getResultList();
			ArrayList<CardImage> imgs = new ArrayList<>();
			return (ArrayList<CardImage>) cardImages;
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	public List<CardImage> findCardImagesByCardDetailsId2(int cardDetailsId){
		
		try {
			Query query = entityManager.createNativeQuery("Select * from card_image where card_detail_id = ?",CardImage.class);
			query.setParameter(1, cardDetailsId);
			@SuppressWarnings("unchecked")
			List<CardImage> cardImages = query.getResultList();
			ArrayList<CardImage> imgs = new ArrayList<>();
			return cardImages;
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	@Override
	public List<List<SubCategory>> categoryDataList() {
		try {
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
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	@Override
	public List<Ad> randomAds() {
		try {	
			Query query = entityManager.createNativeQuery("Select * from ad ",Ad.class);
			@SuppressWarnings("unchecked")
			List<Ad> ads = query.getResultList();
			return ads;
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
		
	}
	@Override
	public List<Location> locations() {
		try {
			Query query = entityManager.createNativeQuery("Select * from location ",Location.class);

			@SuppressWarnings("unchecked")
			List<Location> locations = query.getResultList();
			return locations;
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	@Override
	public Card getSingleCard(int id) {
		
		try {
			Query query = entityManager.createNativeQuery("Select * from card where card_id = ?",Card.class);
			query.setParameter(1, id);
			Card card = (Card)query.getSingleResult();
			return card;
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	@Override
	public User findUserById(int id) {
		try {
			Query query = entityManager.createNativeQuery("Select * from user where user_id = ?",User.class);
			query.setParameter(1, id);
			return  (User)query.getSingleResult();
		} catch (NoResultException  e) {
			// TODO: handle exception
			return null;
		}
	}
	

	@Transactional 
	@Override
	public int updateFooter(Footer footer) {
		return 0;
	}
	@Transactional 
	@Override
	public int updateSubCategory(SubCategory subcategory) {
		return 0;
	}
	@Transactional 
	@Override
	public int updateCard(Card card) {
		Query query = entityManager.createNativeQuery("UPDATE card SET description = ?,header = ?, footer_id = ?,user_id = ?, location_id = ?,card_detail_id = ? WHERE card_id = ?");
		
		query.setParameter(1, card.getDescription());
		query.setParameter(2, card.getHeader());
		query.setParameter(3, card.getFooter().getId());
		query.setParameter(4, card.getUser().getId());
		query.setParameter(5, card.getLocation().getId());
		query.setParameter(6, card.getCardDetail().getId());
		query.setParameter(7, card.getId());
		return query.executeUpdate();
	}
	@Transactional 
	@Override
	public int updateCardDetails(CardDetails cardDetail) {
		Query query = entityManager.createNativeQuery("UPDATE card_details SET category = ?, dealtype = ?, price = ?,province = ?, publish = ?, reference = ?, status = ?, street = ?, subcategory = ?, type = ?,zipcode = ? WHERE card_detail_id = ?");
		cardDetail.setCardImages(null);
		query.setParameter(1, cardDetail.getCategory());
		query.setParameter(2, cardDetail.getDealtype());
		query.setParameter(3, cardDetail.getPrice());
		query.setParameter(4, cardDetail.getProvince());
		query.setParameter(5, cardDetail.isPublish());
		query.setParameter(6, cardDetail.getReference());
		query.setParameter(7, cardDetail.isStatus());
		query.setParameter(8, cardDetail.getStreet());
		query.setParameter(9, cardDetail.getSubcategory());
		query.setParameter(10, cardDetail.getType());
		query.setParameter(11, cardDetail.getZipcode());
		query.setParameter(12, cardDetail.getId());
		return query.executeUpdate();
	}
	@Transactional 
	@Override
	public int updateCardImage(CardImage cardImage) {
		Query query = entityManager.createNativeQuery("UPDATE card_image SET image = ?,is_cover = ?, card_detail_id = ? WHERE card_image_id = ?",CardImage.class);
		int value = 0;
		if(cardImage.isCover()) {
			value = 1;
		}
		query.setParameter(1, cardImage.getImage());
		query.setParameter(2, value);
		query.setParameter(3, cardImage.getCardDetail().getId());
		query.setParameter(4, cardImage.getId());
		return query.executeUpdate();
	}

}
