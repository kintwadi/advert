package com.advert43.service;

//import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import javax.persistence.Query;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jackson.JsonObjectSerializer;
import org.springframework.stereotype.Service;

import com.advert43.dao.IDao;
import com.advert43.dto.Ad;
import com.advert43.dto.Card;
import com.advert43.dto.CardDetails;
import com.advert43.dto.CardImage;
import com.advert43.dto.Category;
import com.advert43.dto.Feacture;
import com.advert43.dto.Footer;
import com.advert43.dto.Location;
import com.advert43.dto.Package;
import com.advert43.dto.Plan;
import com.advert43.dto.SubCategory;
import com.advert43.dto.User;
import com.advert43.util.Util;
import com.google.gson.JsonObject;

import net.bytebuddy.description.TypeVariableSource.Visitor;

@Service
public class Adver43Service {

	private JSONObject app;
	@Autowired
	private IDao dao;



	public User addUser(User user) {

		return dao.addUser(user);
	}

	public List<Package> getAllPackages() {

		return dao.packages();
	}
	public List<Feacture> getAllFeactures() {

		return dao.feactures();
	}
	public List<Plan> getPlansByPackage(int package_id) {

		return dao.getPlansByPackage(package_id);
	}
	public SubCategory getSubCategory(int subcategory_id) {

		return dao.findSubCategoryById(subcategory_id);
	}
	public Location getLocation(int location_id) {

		return dao.findLocationByLocationId(location_id);
	}
	public Category getCategory(int category_id) {

		return dao.findCategoryById(category_id);
	}
	public User findByEmail(String email) {
		return dao.findByEmail(email);
	}
	public void updateUserRemember(String email,boolean remember) {
		dao.updateUserRemember(email, remember);
	}

	@SuppressWarnings("unchecked")
	public JSONObject newEntries(String lang) {

		int count = 1;
		List<Card> cards = dao.newEntries();


		app = Util.getJSONApp(lang);

		JSONObject application = (JSONObject) app.get("Application");
		JSONObject newEntriesContainer = (JSONObject) application.get("NewEntriesContainer");
		JSONArray entries = (JSONArray) newEntriesContainer.get("Entries");
		JSONObject control = (JSONObject) newEntriesContainer.get("Control");
		JSONArray counts = (JSONArray) control.get("counts");
		entries.clear();
		counts.clear();

		cards.forEach(card -> {

			JSONObject jCard = new JSONObject();

			jCard.put("id", card.getId());
			jCard.put("header", card.getHeader());
			jCard.put("description", card.getDescription());
			// use the image cover to default image
			if(card.getCardDetail().getCardImages().size()>0) {
				jCard.put("image", card.getCardDetail().getCardImages().get(0).getImage());
			}else {
				jCard.put("image", "img/ads.png");
			}
			JSONObject jFooter = new JSONObject();

			jFooter.put("price", card.getFooter().getPrice());
			jFooter.put("link", card.getFooter().getLink());
			jCard.put("Footer", jFooter);


			entries.add(jCard);

		});

		for (int i = 0; i < entries.size(); i++, count++) {

			counts.add(count);
		}

		newEntriesContainer.replace("Entries", entries);
		application.replace("NewEntriesContainer", newEntriesContainer);
		control.replace("counts", counts);
		application.replace("Control", control);

		return application;
	}
	// compress the image bytes before storing it in the database
	/*
	public static byte[] compressBytes(byte[] data) {
	        Deflater deflater = new Deflater();
	        deflater.setInput(data);
	        deflater.finish();
	        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
	        byte[] buffer = new byte[1024];
	        while (!deflater.finished()) {
	            int count = deflater.deflate(buffer);
	            outputStream.write(buffer, 0, count);
	        }
	        try {
	            outputStream.close();
	        } catch (IOException e) {
	        }
	        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
	        return outputStream.toByteArray();
	    }
    // uncompress the image bytes before returning it to the angular application
	public static byte[] decompressBytes(byte[] data) {
		        Inflater inflater = new Inflater();
		        inflater.setInput(data);
		        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		        byte[] buffer = new byte[1024];
		        try {
		            while (!inflater.finished()) {
		                int count = inflater.inflate(buffer);
		                outputStream.write(buffer, 0, count);
		            }
		            outputStream.close();
		        } catch (IOException ioe) {
		        } catch (DataFormatException e) {
		        }
		        return outputStream.toByteArray();
		    }
		    */
	@SuppressWarnings("unchecked")
	public JSONObject oldEntries(String lang) {

		List<Card> cards = dao.oldEntries();
		app = Util.getJSONApp(lang);

		JSONObject application = (JSONObject) app.get("Application");
		JSONObject newEntriesContainer = (JSONObject) application.get("OldEntriesContainer");
		JSONArray entries = (JSONArray) newEntriesContainer.get("Entries");
		entries.clear();

		cards.forEach(card -> {

			JSONObject jCard = new JSONObject();
			jCard.put("id", card.getId());
			jCard.put("header", card.getHeader());
			jCard.put("description", card.getDescription());
			// use the image cover to default image
			if(card.getCardDetail().getCardImages().size()>0) {
				jCard.put("image", card.getCardDetail().getCardImages().get(0).getImage());
			}else {
				jCard.put("image", "img/ads.png");
			}

			JSONObject jFooter = new JSONObject();

			jFooter.put("price", card.getFooter().getPrice());
			jFooter.put("link", card.getFooter().getLink());
			jCard.put("Footer", jFooter);
			entries.add(jCard);

		});

		newEntriesContainer.replace("Entries", entries);
		application.replace("OldEntriesContainer", newEntriesContainer);

		app.replace("Application", application);

		return application;

	}

	@SuppressWarnings("unchecked")
	public JSONObject categories(String lang){

		app = Util.getJSONApp(lang);
		JSONObject application = (JSONObject) app.get("Application");
		JSONObject categoryContainer = (JSONObject) application.get("CategoryContainer");
		JSONArray categories = (JSONArray) categoryContainer.get("categories");
		categories.clear();
 
		List<List<SubCategory>> categoryDataList = dao.categoryDataList();

		for(int i = 0; i < categoryDataList.size(); i++) {

			JSONArray entries = new JSONArray();
			List<SubCategory> subCategories = categoryDataList.get(i);


			Category parent = subCategories.get(i).getCategory();
			JSONObject category = new JSONObject();
			category.put("text",parent.getName() );
			category.put("link","#" );

			for( int j = 0; j < subCategories.size(); j++ ) {

				JSONObject CategoryItem1 = new JSONObject();
				JSONObject jSubcategory = new JSONObject();
				jSubcategory.put("text", subCategories.get(j).getName());
				jSubcategory.put("link", "#");
				jSubcategory.put("cssClass",  subCategories.get(j).getName());
				jSubcategory.put("cssId",  subCategories.get(j).getName());

				CategoryItem1.putIfAbsent("CategoryItem1", jSubcategory);
				entries.add(CategoryItem1);

			}
 
			category.put("Entries", entries);
			categories.add(category);
		}

		categoryContainer.replace("categories", categories);
		
		application.replace("CategoryContainer", categoryContainer);
		
		return application ;
	}

	public Ad getRandomAds(String lang) {

		List<Ad> ads = dao.randomAds();
		Random rand = new Random(); 
		int index = rand.nextInt(ads.size()); 
		return ads.get(index);
	}

	@SuppressWarnings("unchecked")
	public JSONObject locations(String lang) {
		List<Location> locationList= dao.locations();
		List<Category> cateListList= dao.Categories();

		app = Util.getJSONApp(lang);
		JSONObject application = (JSONObject) app.get("Application");
		JSONObject searchContainer = (JSONObject) application.get("SearchContainer");
		JSONObject location = (JSONObject) searchContainer.get("Location");
		JSONArray locations = (JSONArray) location.get("locations");
		locations.clear();

		JSONObject category = (JSONObject) searchContainer.get("Category");
		JSONArray categories = (JSONArray) category.get("categories");
		categories.clear();

		for(Category cat:cateListList) {

			categories.add(cat.getName());
		}

		for(Location loc:locationList) {

			locations.add(loc.getLocation());
		}

		location.replace("locations", locations);
		category.replace("categories", categories);
		searchContainer.replace("Location", location);
		searchContainer.replace("Category", category);

		application.replace("SearchContainer", searchContainer);


		return application;
	}
	@SuppressWarnings("unchecked")
	public JSONObject defaultAd(String side) {

		JSONObject application = (JSONObject) app.get("Application");

		//		Random r = new Random();
		//		int low = 0;
		//		int high = 100;
		//		int n = r.nextInt(high-low) + low;
		//		List<Ad> adList = getRandomAds(n);
		//		app = Util.getJSONApp();
		//		
		//		if(adList.size() > 0) {
		//			
		//			Ad ad = adList.get(0);
		//			JSONObject adContainer = (JSONObject) application.get("AdContainer");
		//			adContainer.put("image", ad.getImage());
		//			adContainer.put("link", "https://www.google.com/");
		//			application.replace("AdContainer", adContainer);
		//		}

		return application;	
	}

	@SuppressWarnings("unchecked")
	public JSONArray getListOfCategories() {
		List<Category> cateListList= dao.Categories();		
		JSONArray categories = new JSONArray();
		
		for(Category cat:cateListList) {

			categories.add(cat);
		}
		return categories;
	}
	@SuppressWarnings("unchecked")
	public Location findLocationByLocationId(int location_id){
		return dao.findLocationByLocationId(location_id);
	}
	@SuppressWarnings("unchecked")
	public JSONArray getListOfSubCategoriesFromcategory(int category) {
		List<SubCategory> subcateListList = dao.subCategoryListFromCategory(category);		
		JSONArray subcategories = new JSONArray();
		
		for(SubCategory subcat :subcateListList) {

			subcategories.add(subcat);
		}
		return subcategories;
	}
	@SuppressWarnings("unchecked")
	public void updatePublishCard(int id, boolean publish) {
		dao.updateCardPublish(id, publish);
	}
	@SuppressWarnings("unchecked")
	public Card getCardById(int card_id) {
		Card card = dao.getSingleCard(card_id);
		card.getCardDetail().setCardImages((ArrayList<CardImage>) dao.findCardImagesByCardDetailsId2(card.getCardDetail().getId()));
		return card;
	}@SuppressWarnings("unchecked")
	public ArrayList<CardImage> getCardImagesByCardDetailId(int cardDetailId) {
		return (ArrayList<CardImage>) dao.findCardImagesByCardDetailsId2(cardDetailId);
	}
	@SuppressWarnings("unchecked")
	public int deleteCarddetails(CardDetails cardDetail) {
		return dao.deleteCardDetails(cardDetail);
	}
	@SuppressWarnings("unchecked")
	public int deleteCardImage(CardImage cardImage) {
		return dao.deleteCardImage(cardImage);
	}
	@SuppressWarnings("unchecked")
	public JSONArray getListOfLocations() {
		List<Location> locationList= dao.locations();
		JSONArray locations = new JSONArray();

		for(Location loc:locationList) {
			locations.add(loc.getLocation());
		}
		return locations;
	}
	@SuppressWarnings("unchecked")
	public JSONObject getMyCards(int user_id,String lang) {

			app = Util.getJSONApp(lang);
			JSONObject application = (JSONObject) app.get("Application");
				int count = 1;
				List<Card> cards = dao.getAllCardsByuserId(user_id);



				JSONObject publisher = (JSONObject) application.get("Publisher");
				JSONArray publishList = (JSONArray) publisher.get("publishList");
				publishList.clear();
				cards.forEach(card -> {
					
					JSONObject jCard = new JSONObject();
					jCard.put("id", card.getId());
					jCard.put("title", publisher.get("title").toString());
					if(card.getCardDetail().isPublish()==true)
						jCard.put("state", "publish-on");
					else
						jCard.put("state", "publish-off");
					JSONObject edit = new JSONObject();
					edit.put("cssId", "btn_edit");
					edit.put("title", "Editar");
					edit.put("flag", "fa fa-edit");

					JSONObject delete = new JSONObject();
					delete.put("cssId", "delete");
					delete.put("title", "Deletar");
					delete.put("flag", "fa fa-trash");
					
					JSONArray UploadImage = new JSONArray();
					card.getCardDetail().getCardImages().forEach(cardImage->{
						UploadImage.add(cardImage.getImage());
					});
					// use the image cover to default image
					if(card.getCardDetail().getCardImages().size()>0) {
						jCard.put("UploadImage", UploadImage);
					}else {
						jCard.put("UploadImage", null);
					}
					jCard.put("Edit", edit);
					jCard.put("Delete", delete);
					publishList.add(jCard);

				});

				publisher.replace("publishList", publishList);
				application.replace("Publisher", publisher);

			return application;
	}
	@SuppressWarnings("unchecked")
	public JSONObject getMainApplication(String lang) {

		app = Util.getJSONApp(lang);
		JSONObject application = (JSONObject) app.get("Application");
		{
			int count = 1;
			List<Card> cards = dao.newEntries();



			JSONObject newEntriesContainer = (JSONObject) application.get("NewEntriesContainer");
			JSONArray entries = (JSONArray) newEntriesContainer.get("Entries");
			JSONObject control = (JSONObject) newEntriesContainer.get("Control");
			JSONArray counts = (JSONArray) control.get("counts");
			entries.clear();
			counts.clear();

			cards.forEach(card -> {
				JSONObject jCard = new JSONObject();
				jCard.put("id", card.getId());
				jCard.put("header", card.getHeader());
				jCard.put("description", card.getDescription());
				// use the image cover to default image
				if(card.getCardDetail().getCardImages().size()>0) {
					jCard.put("image", card.getCardDetail().getCardImages().get(0).getImage());
				}else {
					jCard.put("image", "img/ads.png");
				}
				
				JSONObject jFooter = new JSONObject();

				jFooter.put("price", card.getFooter().getPrice());
				jFooter.put("link", card.getFooter().getLink());
				jCard.put("Footer", jFooter);
				entries.add(jCard);

			});

			for (int i = 0; i < entries.size(); i++, count++) {

				counts.add(count);
			}

			newEntriesContainer.replace("Entries", entries);
			application.replace("NewEntriesContainer", newEntriesContainer);
			//control.replace("counts", counts);
			//application.replace("Control", control);
		}

		{

			List<Card> cards = dao.oldEntries();

			JSONObject newEntriesContainer = (JSONObject) application.get("OldEntriesContainer");
			JSONArray entries = (JSONArray) newEntriesContainer.get("Entries");
			entries.clear();

			cards.forEach(card -> {

				JSONObject jCard = new JSONObject();
				jCard.put("id", card.getId());
				jCard.put("header", card.getHeader());
				jCard.put("description", card.getDescription());
				// use the image cover to default image
				if(card.getCardDetail().getCardImages().size()>0) {
					jCard.put("image", card.getCardDetail().getCardImages().get(0).getImage());
				}else {
					jCard.put("image", "img/ads.png");
				}
				JSONObject jFooter = new JSONObject();

				jFooter.put("price", card.getFooter().getPrice());
				jFooter.put("link", card.getFooter().getLink());
				jCard.put("Footer", jFooter);
				entries.add(jCard);

			});

			newEntriesContainer.replace("Entries", entries);
			application.replace("OldEntriesContainer", newEntriesContainer);

			//app.replace("Application", application);
		}
		{


			JSONObject categoryContainer = (JSONObject) application.get("CategoryContainer");
			JSONArray categories = (JSONArray) categoryContainer.get("categories");
			categories.clear();

			List<List<SubCategory>> categoryDataList = dao.categoryDataList();

			for(int i = 0; i < categoryDataList.size(); i++) {

				JSONArray entries = new JSONArray();
				List<SubCategory> subCategories = categoryDataList.get(i);


				Category parent = subCategories.get(i).getCategory();

				JSONObject category = new JSONObject();
				category.put("id",parent.getId() );
				category.put("categoryId",parent.getId() );
				category.put("text",parent.getName() );
				category.put("link","#" );

				for( int j = 0; j < subCategories.size(); j++ ) {

					JSONObject CategoryItem1 = new JSONObject();
					JSONObject jSubcategory = new JSONObject();
					jSubcategory.put("subcategoryId",subCategories.get(j).getId() );
					jSubcategory.put("text", subCategories.get(j).getName());
					jSubcategory.put("link", "#");
					jSubcategory.put("cssClass",  subCategories.get(j).getName());
					jSubcategory.put("cssId",  subCategories.get(j).getName());

					CategoryItem1.putIfAbsent("CategoryItem1", jSubcategory);
					entries.add(CategoryItem1);

				}

				category.put("Entries", entries);
				categories.add(category);
			}

			categoryContainer.replace("categories", categories);
			application.replace("CategoryContainer", categoryContainer);

		}

		{
			List<Location> locationList= dao.locations();
			List<Category> cateListList= dao.Categories();
			JSONObject searchContainer = (JSONObject) application.get("SearchContainer");
			JSONObject location = (JSONObject) searchContainer.get("Location");
			JSONArray locations = (JSONArray) location.get("locations");
			locations.clear();

			JSONObject category = (JSONObject) searchContainer.get("Category");
			JSONArray categories = (JSONArray) category.get("categories");
			categories.clear();

			for(Category cat:cateListList) {

				categories.add(cat.getName());
			}

			for(Location loc:locationList) {

				locations.add(loc.getLocation());
			}

			location.replace("locations", locations);
			category.replace("categories", categories);
			searchContainer.replace("Location", location);
			searchContainer.replace("Category", category);

			application.replace("SearchContainer", searchContainer);

		}

		Util.setLogger(this.getClass(), application.toJSONString());
		return application;
	}

	public void singleCardPage(String categoryType, int subCategoryId) {

		if(categoryType.equals("NC")) {


		}
		if(categoryType.equals("OC")) {


		}
	}
	public Footer findFooterByPrice(String price) {
		return dao.findFooterByPrice(price);
	}
	public void saveFooter(Footer footer) {
		dao.saveFooter(footer);
	}
	public User findUserById(int id) {
		return dao.findUserById(id);
	}
	public int saveCardDetails(CardDetails cardDetail) {
		return dao.saveCardDetails(cardDetail);
	}
	public int updateCardDetails(CardDetails cardDetail) {
		return dao.updateCardDetails(cardDetail);
	}
	public void saveCardImage(CardImage cardImage) {
		dao.saveCardImage(cardImage);
	}
	public void updateCardImage(CardImage cardImage) {
		dao.updateCardImage(cardImage);
	}
	public void updateCard(Card card) {
		dao.updateCard(card);
	}

	public void saveCard(Card card) {
		dao.saveCard(card);
	}

}
