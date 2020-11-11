package com.advert43.service;

import java.util.List;
import java.util.Random;

import javax.persistence.Query;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.advert43.dao.IDao;
import com.advert43.dto.Ad;
import com.advert43.dto.Card;
import com.advert43.dto.Category;
import com.advert43.dto.Location;
import com.advert43.dto.SubCategory;
import com.advert43.dto.User;
import com.advert43.util.Util;

@Service
public class Adver43Service {

	private JSONObject app;
	@Autowired
	private IDao dao;



	public User addUser(User user) {

		return dao.addUser(user);
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
			jCard.put("image", card.getImage());

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

	@SuppressWarnings("unchecked")
	public JSONObject oldEntries(String lang) {

		List<Card> cards = dao.newEntries();
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
			jCard.put("image", card.getImage());

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
				jCard.put("image", card.getImage());

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

			List<Card> cards = dao.newEntries();

			JSONObject newEntriesContainer = (JSONObject) application.get("OldEntriesContainer");
			JSONArray entries = (JSONArray) newEntriesContainer.get("Entries");
			entries.clear();

			cards.forEach(card -> {

				JSONObject jCard = new JSONObject();
				jCard.put("id", card.getId());
				jCard.put("header", card.getHeader());
				jCard.put("description", card.getDescription());
				jCard.put("image", card.getImage());

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
	
	public User findUserById(int id) {
		
		return dao.findUserById(id);
	}
	public void saveCard(Card card) {
		
		
	}

}
