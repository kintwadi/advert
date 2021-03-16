package com.advert43.controller;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;

import javax.servlet.ServletContext;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServletRequest;

import org.apache.tomcat.jni.File;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.multipart.MultipartFile;

import com.advert43.dto.Ad;
import com.advert43.dto.Card;
import com.advert43.dto.CardDetails;
import com.advert43.dto.CardImage;
import com.advert43.dto.Category;
import com.advert43.dto.Footer;
import com.advert43.dto.Location;
import com.advert43.dto.Profile;
import com.advert43.dto.SubCategory;
import com.advert43.dto.User;
import com.advert43.service.Adver43Service;
import com.advert43.util.Constants;
import com.advert43.util.Util;
import com.google.gson.JsonArray;

import antlr.collections.List;

@Controller
public class Advert34Controller {

	@Autowired
	ServletContext servletContext;
	@Autowired
	private Adver43Service service;
	private ArrayList<CardImage> slideList = new ArrayList();

	@GetMapping(Constants.ROOT)
	public String home(Model model) {

		model.addAttribute("lang", Constants.LANGUAGE);
		return Constants.VIEW_HOME;
	}
	@GetMapping(Constants.LoadTheSingleCard)
	@ResponseBody
	public JSONObject LoadTheSingleCard(@RequestParam("card_id")   int card_id) {
		Card card = service.getCardById(card_id);
		if(card==null) return null;
		JSONObject jCard = new JSONObject();
		jCard.put("id", card.getId());
		jCard.put("header", card.getHeader());
		jCard.put("description", card.getDescription());
		
		JSONObject jFooter = new JSONObject();

		jFooter.put("price", card.getFooter().getPrice());
		jFooter.put("link", card.getFooter().getLink());
		jCard.put("Footer", jFooter);

		JSONObject jLocation = new JSONObject();

		jLocation.put("id", card.getLocation().getId());
		jLocation.put("location", card.getLocation().getLocation());
		jCard.put("Location", jLocation);
		JSONObject jCarDetail = new JSONObject();

		jCarDetail.put("id", card.getCardDetail().getId());

		JSONObject jCategory = new JSONObject();
		Category cat = service.getCategory(Integer.parseInt(card.getCardDetail().getCategory()));
		jCategory.put("id", cat.getId());
		jCategory.put("name", cat.getName());
		jCarDetail.put("category", jCategory);
		jCarDetail.put("dealtype", card.getCardDetail().getDealtype());
		jCarDetail.put("price", card.getCardDetail().getPrice());
		
		JSONObject jProvice = new JSONObject();
		Location location = service.getLocation(Integer.parseInt(card.getCardDetail().getProvince()));
		jProvice.put("id", location.getId());
		jProvice.put("location", location.getLocation());
		jCarDetail.put("province", jProvice);
		
		jCarDetail.put("publish", card.getCardDetail().isPublish());
		jCarDetail.put("reference", card.getCardDetail().getReference());
		jCarDetail.put("status", card.getCardDetail().isStatus());
		jCarDetail.put("street", card.getCardDetail().getStreet());

		JSONObject jSubCategory = new JSONObject();
		SubCategory subCategory = service.getSubCategory(Integer.parseInt(card.getCardDetail().getSubcategory()));
		jSubCategory.put("id", subCategory.getId());
		jSubCategory.put("name", subCategory.getName());
		jCarDetail.put("subCategory", jSubCategory);
		
		jCarDetail.put("type", card.getCardDetail().getType());
		jCarDetail.put("zipcode", card.getCardDetail().getZipcode());
		

		JSONArray jCardImagens = new JSONArray();
		for (CardImage cardImage : card.getCardDetail().getCardImages()) {
			jCardImagens.add(cardImage.getImage());
		}
		slideList = card.getCardDetail().getCardImages();
		System.out.println(slideList.size());
		if(jCarDetail.size()>0)
			jCarDetail.put("UploadImage", jCardImagens);
		else
			jCarDetail.put("UploadImage", null);
		//return card.getCardDetail().getCardImages();
		jCard.put("cardDetail", jCarDetail);
		return jCard;
	}
	@GetMapping(Constants.LoadAllAds)
	@ResponseBody
	public JSONObject LoadAllAds(@RequestParam("user_id")   int user_id) {
		return service.getMyCards(user_id,Constants.LANGUAGE);
	}
	@PostMapping(Constants.UpdatePublihCard)
	@ResponseBody
	public void updatePublishCard(@RequestParam("id")   int card_id,@RequestParam("publish")   boolean status) {
		service.updatePublishCard(card_id,status);
	}
	@PostMapping("/slide_empty")
	@ResponseBody
	public void slide_empty() {
		slideList = null;
		slideList = new ArrayList<CardImage>();
	}
	@PostMapping(Constants.DeleteCard)
	@ResponseBody
	public void deleteCard(@RequestParam("card_id")   int card_id) {
		Card card = service.getCardById(card_id);
		if(card==null)
			return;
		card.getCardDetail().setCardImages(null);
		int val = service.deleteCarddetails(card.getCardDetail());
		if(val>0)
			System.out.println("Card deletado com sucesso!");
		else
			System.out.println("Ouve um erro ao deletar!");
	}
	@GetMapping(Constants.APP_MAIN)
	@ResponseBody
	public JSONObject getMainApplication(Model model){
		return service.getMainApplication(Constants.LANGUAGE);

	}

	@GetMapping(Constants.NEW_ENTRIES)
	@ResponseBody
	public JSONObject newEntries(Model model){

		
		return  service.newEntries(Constants.LANGUAGE);

	}

	@GetMapping(Constants.OLD_ENTRIES)
	@ResponseBody
	public JSONObject oldEntries(Model model){

		return service.oldEntries(Constants.LANGUAGE);

	}
	
	@GetMapping(Constants.CATEGORIES)
	@ResponseBody
	public JSONObject categories(Model model){

		return service.categories(Constants.LANGUAGE);

	}

	@GetMapping(Constants.RANDOM_AD)
	@ResponseBody
	public Ad getRandomAd(Model model){
		return service.getRandomAds(Constants.LANGUAGE);
	}

	@GetMapping("/app_search_container")
	@ResponseBody
	public JSONObject locations(Model model){


		return service.locations(Constants.LANGUAGE);

	}
	@GetMapping(Constants.DEFAULT_AD)
	@ResponseBody
	public JSONObject defaultAd(Model model){


		return service.defaultAd("right_side");

	}
	
	
	@PostMapping(Constants.SLIDE_UPLOAD)
	@ResponseBody
	public CardImage slide_upload(@RequestParam("puth")  MultipartFile multipartFile){
		try {
			CardImage img = new CardImage();
			img.setImage(multipartFile.getBytes());
			img.setCardDetail(null);
			slideList.add(img);
			System.out.println("sizeSlide: "+slideList.size());
			return img;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	@PostMapping(Constants.SLIDE_DELETE)
	@ResponseBody
	public int slide_delete(HttpServletRequest request){
		int index = Integer.parseInt(request.getParameter("position"));
		System.out.println(index);
		slideList.remove(index);
		return index;
	}
	 
	@GetMapping(Constants.SINGLE_CARD)
	public String singleCardPage(Model model, HttpServletRequest request) {

		
		return Constants.VIEW_SINGLE_CARD;
	}


	@GetMapping(Constants.QUERY_CAREGORIES)
	public String fetchCategories(Model model, HttpServletRequest request) {

		
		model.addAttribute("lang", Constants.LANGUAGE);
		return Constants.VIEW_CATEGORIES;
	}

	@GetMapping(Constants.ALL_SUBCATEGORIES)
	public String fetchSubCategoryAll(Model model, HttpServletRequest request) {

		model.addAttribute("lang", Constants.LANGUAGE);
		return "subcategory_all";
	}

	@PostMapping("/query_login")
	@ResponseBody
	public Profile login(Model model, HttpServletRequest request) {

		model.addAttribute("lang", Constants.LANGUAGE);
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		boolean remember = Boolean.parseBoolean(request.getParameter("remember"));
		Profile profile = new Profile();
		

		if(Util.isValid(email)) {

			User user = service.findByEmail(email);
			//user.setPhoto(service.decompressBytes(user.getPhoto()));
			//testeToGenerateImgIntemporaryFolder(user.getPhoto().getBytes(),user.getPhoto().length());
		    //user.setPhoto(Base64.getEncoder().encodeToString(user.getPhoto().));
			if(user!= null && remember != user.isRemember() && password.equals(user.getPassword())) {

				service.updateUserRemember(email, remember);

			}
			System.out.println(user.getPhoto());
			user.setPassword("");	
			profile.setUser(user);
		}

		return profile;
	}
	private void testeToGenerateImgIntemporaryFolder(byte[] img, int len) {
		String url = System.getProperty("user.dir");
		String imageName = url+"\\uploads\\user.jpg";
		try(FileOutputStream fs = new FileOutputStream(imageName)){
			fs.write(img, 0, len);
			System.out.println("imagem criada :"+imageName);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	} 
	@GetMapping("/profile")
	public String admin(Model model) {
		//System.out.println(service.getListOfCategories());
		model.addAttribute("lang", Constants.LANGUAGE);
		return "profile";
	}

	@GetMapping(Constants.CAREGORIES_LIST)
	@ResponseBody
	public JSONArray categoriesList(Model model) {
		return service.getListOfCategories();
	}
	@GetMapping(Constants.SUBCAREGORIES_LIST)
	@ResponseBody
	public JSONArray subCategoriesList(Model model, HttpServletRequest request) {
		int category_id = Integer.parseInt(request.getParameter("category"));
		return service.getListOfSubCategoriesFromcategory(category_id);
	}
	@GetMapping(Constants.LOCATIONS_LIST)
	@ResponseBody
	public JSONArray locationsList(Model model) {
		return service.getListOfLocations();
	}
	
	@PostMapping("/saveNewAd")
	@ResponseBody
	public String saveNewAd(Model model, HttpServletRequest request) {

		Card card = new Card();
		cardCreate (card,request);
		
		for( String key : request.getParameterMap().keySet()) {

			System.out.println("key: "+key);
			if(key.contains("[image]")) {
				System.out.println("value: "+request.getParameter(key).getBytes());
			}else{
				System.out.println("value: "+request.getParameter(key));
			}
		}
		return "card saved";
	}
	
	private void cardCreate (Card card,HttpServletRequest request) {

		String header = request.getParameter("TitleOfAd");
		String description = request.getParameter("Description");
		
		card.setDescription(description);
		card.setHeader(header);
		
		card.setFooter(footerCreate(request));
		card.setUser(cardUserCreate(request));
		card.setCardDetail(cardDetailsCreate(request));
		createCardImage(card.getCardDetail(),request);
		card.setLocation(LocationCreate(request));
		service.saveCard(card);
	}
	private void createCardImage(CardDetails cd, HttpServletRequest request) {
		int len = slideList.size();
		System.out.println("qtd de imagens: "+len);
		if(request.getParameter("UploadImage")!=null)

		slideList.get(0).setCover(true);
		slideList.forEach(cardImage->{
			cardImage.setCardDetail(cd);
			System.out.println("imagem_id: "+cardImage.getId());
			System.out.println("imagem_capa: "+cardImage.isCover());
			System.out.println("imagem: "+cardImage.getImage());
			service.saveCardImage(cardImage);
		});
		System.out.println("já resistou todas imagens");
		slideList = new ArrayList<CardImage>();
	}
	private Location LocationCreate(HttpServletRequest request) {
		return  service.findLocationByLocationId(Integer.parseInt(request.getParameter("Province")));
	}
	private Footer footerCreate(HttpServletRequest request) {

		String link = "";
		String price = request.getParameter("Price");
		Footer footer = service.findFooterByPrice(price);
		if(footer == null){
			footer = new Footer();
			footer.setLink(link);
			footer.setPrice(price);
			service.saveFooter(footer);
			footer = service.findFooterByPrice(price);
		}else
			System.out.println("footer found:: "+ footer.toString());
		
		return footer;
	}
	
	private User cardUserCreate(HttpServletRequest request) {
	
		int userId = Integer.parseInt(request.getParameter("userId"));
		
		User user = service.findUserById(userId);
		System.out.println("user found:: "+ user.toString());
		return user;
	}
	
	private CardDetails cardDetailsCreate(HttpServletRequest request) {
		CardDetails cardDetails = new CardDetails();
		
		String phone = request.getParameter("Phone");
		String email = request.getParameter("Email");
		String name = request.getParameter("Name");
		String phoneState = request.getParameter("PhoneState");
		
		boolean publishNow = Boolean.parseBoolean(request.getParameter("PublishNow"));
		String emailState = request.getParameter("EmailState");
		String preference = request.getParameter("Preference");
		String street = request.getParameter("Street");
		String province = request.getParameter("Province");
		String zip = request.getParameter("Zip");
		String subcategory = request.getParameter("Subcategory");
		String categorization = request.getParameter("Categorization");
		
		cardDetails.setPublish(publishNow);
		cardDetails.setReference(preference);
		cardDetails.setStreet(street);
		cardDetails.setProvince(province);
		cardDetails.setSubcategory(subcategory);
		cardDetails.setZipcode(zip);
		cardDetails.setCategory(categorization);
		
		boolean used = Boolean.parseBoolean(request.getParameter("Used"));
		boolean newCard = Boolean.parseBoolean(request.getParameter("New"));
		
		boolean status = true;
		cardDetails.setStatus(status);
		
		boolean toGiveAwey = Boolean.parseBoolean(request.getParameter("ToGiveAwey"));
		boolean toChange = Boolean.parseBoolean(request.getParameter("ToChange"));
		boolean negotiable = Boolean.parseBoolean(request.getParameter("Negotiable"));
		if(used) {
			cardDetails.setDealtype("Used");
		}else if(newCard) {
			cardDetails.setDealtype("New");
		}else if(negotiable) {
			cardDetails.setDealtype("Negotiable");
		}else if(toChange) {
			cardDetails.setDealtype("To change");
		}else {
			cardDetails.setDealtype("To give away");
		}
		double price = Double.parseDouble(request.getParameter("Price"));
		cardDetails.setPrice(price);	
		String tips = request.getParameter("Tips");
		
		boolean looking = Boolean.parseBoolean(request.getParameter("AddType[looking]"));
		String type = "offer";
		if(looking) {
			type = "looking";
		}
		cardDetails.setType(type);
		int id = service.saveCardDetails(cardDetails);
		System.out.println("cardDetail created with id: "+id);
		cardDetails.setId(id);
		return cardDetails;
	}
	// edit and update on the db server

	@PostMapping("/saveUpdateAd")
	@ResponseBody
	public String saveUpdateAd(Model model, HttpServletRequest request) {

		int card_id = Integer.parseInt(request.getParameter("cardId"));
		Card card = service.getCardById(card_id);
		if(card==null) return "no card to update";
		cardUpdate(card,request);
		
		for( String key : request.getParameterMap().keySet()) {

			System.out.println("key: "+key);
			if(key.contains("[image]")) {
				System.out.println("value: "+request.getParameter(key).getBytes());
			}else{
				System.out.println("value: "+request.getParameter(key));
			}
		}
		return "card updated";
	}

	private void cardUpdate(Card card,HttpServletRequest request) {

		String header = request.getParameter("TitleOfAd");
		String description = request.getParameter("Description");
		
		card.setDescription(description);
		card.setHeader(header);
		
		card.setFooter(footerUpdate(request));
		card.setUser(cardUserUpdate(request));
		card.setCardDetail(cardDetailsUpdate(card.getCardDetail(),request));
		UpdateCardImage(card.getCardDetail(),request);
		card.setLocation(LocationUpdate(request));
		service.updateCard(card);
	}
	private void UpdateCardImage(CardDetails cd, HttpServletRequest request) {
		ArrayList<CardImage> ci = service.getCardImagesByCardDetailId(cd.getId());
		if(ci==null) return;
		int lengthToUpdate = ci.size();
		int lengthNew = slideList.size();
		for(int i = 0;i<lengthNew;i++) {
			if(i==0)
				slideList.get(i).setCover(true);
			slideList.get(i).setCardDetail(cd);
			if(i<lengthToUpdate) {
				slideList.get(i).setId(ci.get(i).getId());
				service.updateCardImage(slideList.get(i));
			}else
				service.saveCardImage(slideList.get(i));
			System.out.println("imagem_id: "+slideList.get(i).getId());
			System.out.println("imagem_capa: "+slideList.get(i).isCover());
			System.out.println("imagem: "+slideList.get(i).getImage());
		}
		if(lengthNew>0 && lengthNew<lengthToUpdate) {
			for(int i = lengthNew;i<lengthToUpdate;i++) {
				service.deleteCardImage(ci.get(i));
				System.out.println("imagem_id: "+ci.get(i).getId());
				System.out.println("imagem_capa: "+ci.get(i).isCover());
				System.out.println("imagem: "+ci.get(i).getImage());
			}
		}
		slideList = new ArrayList<CardImage>();
	}
	private Location LocationUpdate(HttpServletRequest request) {
		return  service.findLocationByLocationId(Integer.parseInt(request.getParameter("Province")));
	}
	private Footer footerUpdate(HttpServletRequest request) {

		String link = "";
		String price = request.getParameter("Price");
		Footer footer = service.findFooterByPrice(price);
		if(footer == null){
			footer = new Footer();
			footer.setLink(link);
			footer.setPrice(price);
			service.saveFooter(footer);
			footer = service.findFooterByPrice(price);
		}else
			System.out.println("footer found:: "+ footer.toString());
		
		return footer;
	}
	
	private User cardUserUpdate(HttpServletRequest request) {
	
		int userId = Integer.parseInt(request.getParameter("userId"));
		
		User user = service.findUserById(userId);
		System.out.println("user found:: "+ user.toString());
		return user;
	}
	
	private CardDetails cardDetailsUpdate(CardDetails cardDetails,HttpServletRequest request) {
		
		String phone = request.getParameter("Phone");
		String email = request.getParameter("Email");
		String name = request.getParameter("Name");
		String phoneState = request.getParameter("PhoneState");
		
		boolean publishNow = Boolean.parseBoolean(request.getParameter("PublishNow"));
		String emailState = request.getParameter("EmailState");
		String preference = request.getParameter("Preference");
		String street = request.getParameter("Street");
		String province = request.getParameter("Province");
		String zip = request.getParameter("Zip");
		String subcategory = request.getParameter("Subcategory");
		String categorization = request.getParameter("Categorization");
		
		cardDetails.setPublish(publishNow);
		cardDetails.setReference(preference);
		cardDetails.setStreet(street);
		cardDetails.setProvince(province);
		cardDetails.setSubcategory(subcategory);
		cardDetails.setZipcode(zip);
		cardDetails.setCategory(categorization);
		
		boolean used = Boolean.parseBoolean(request.getParameter("Used"));
		boolean newCard = Boolean.parseBoolean(request.getParameter("New"));
		
		boolean status = true;
		cardDetails.setStatus(status);
		
		boolean toGiveAwey = Boolean.parseBoolean(request.getParameter("ToGiveAwey"));
		boolean toChange = Boolean.parseBoolean(request.getParameter("ToChange"));
		boolean negotiable = Boolean.parseBoolean(request.getParameter("Negotiable"));
		if(used) {
			cardDetails.setDealtype("Used");
		}else if(newCard) {
			cardDetails.setDealtype("New");
		}else if(negotiable) {
			cardDetails.setDealtype("Negotiable");
		}else if(toChange) {
			cardDetails.setDealtype("To change");
		}else {
			cardDetails.setDealtype("To give away");
		}
		System.out.println(request.getParameter("Price"));
		double price = Double.parseDouble(request.getParameter("Price"));
		cardDetails.setPrice(price);	
		String tips = request.getParameter("Tips");
		
		boolean looking = Boolean.parseBoolean(request.getParameter("AddType[looking]"));
		String type = "offer";
		if(looking) {
			type = "looking";
		}
		cardDetails.setType(type);
		int id = service.updateCardDetails(cardDetails);
		if(id == cardDetails.getId())
			System.out.println("cardDetail created with id: "+id);
		//cardDetails.setId(id);
		return cardDetails;
	}




}
