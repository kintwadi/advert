
function Render(app) {

	var currentPagination;
	var showMoreState = true;
	// render the base metadata of website 
	this.Base = function () {
		// render the name of website
		$("head title").text(app.name);
		// render the name of icon in the href 
		$("icon").attr("type", app.favCon.icon);
		console.log($("#icon"));
	};
	// adds to anuncing img/news_card.jpg 
	adds = {
			header: "Get the adds added",
			description: "Get the adds of the store Lashes by “Samuel.”",
			image: "img/ad.jpg",
			footer: {
				price: "",
				link: "#"
			}
	}
	// function that generate the list of Ads need
	this.Ads = function (size) {
		listAds = [];
		for (let index = 0; index < size; index++) {
			const element = adds;
			listAds[index] = element;
		}
		return listAds;
	}
	// render the headerContainer
	this.HeaderContainer = function () {
		// variables 
		var menu = null; // store the struture HTML of menu 
		var menu_element = null; //store the eatch <li> element of menu 
		var item = null; // store the <a> link of each <li> element
		// render the logo icon in the src img selector
		$('nav .container a:first img').attr("src", app.HeaderContainer.Logo.icon);
		$('nav .container a:first img').addClass(app.HeaderContainer.Logo.cssClass);
		$('nav .container a:first img').attr("id", app.HeaderContainer.Logo.cssId);
		//$('nav .container a:first img').addId(app.HeaderContainer.Logo.icon);
		// render the logo icon link in the href link selector
		$('nav .container a:first').attr("href", app.HeaderContainer.Logo.iconLink);
		// render menu
		var menu = $("#headerContainerMenu");

		// render the Menu
		// variables that contains the size of menu elements 
		var _sizeof = app.HeaderContainer.Menu.length;
		// interate to catch all menu
		for (let index = 0; index < _sizeof; index++) {
			const element = app.HeaderContainer.Menu[index];
			if (index == 0) {
				menu_element = $("<li class='nav-item active'>");
			} else {
				menu_element = $("<li class='nav-item '>");
			}
			item = $("<a>");
			item.html(element.text);
			if("Acesso" == element.text){
				
				item.attr("data-izimodal-open", "#loginModal");
				
			};
			item.attr("href", element.link);
			item.addClass(element.cssClass);
			item.attr("id", element.cssId);
			menu_element.append(item);
			console.log(menu_element);
			menu.append(menu_element);
			item = null;
		}
		menu_element = null;
		// render the Locale
		menu_element = $("<li class='nav-item dropdown'>");

		menu_element.addClass(app.HeaderContainer.Locale.cssClass);
		// variable that store the size of language array
		var _size = app.HeaderContainer.Locale.language.length;
		var dropdown = $("<div class='dropdown-menu dropdown-menu-right' aria-labelledby='navbarDropdown'>");
		for (let index = 0; index < _size; index++) {
			const element = app.HeaderContainer.Locale.language[index];
			let flag = $("<span class='flag-icon'>");
			flag.addClass(element.countryIconFlag);
			if (index == 0) {
				item = $("<a class='nav-link dropdown-toggle language'  id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>");
				//item.text(element.text);
				
				item.prepend(flag);
				item.attr("href", element.link);
				menu_element.prepend(item);
				
			} else {
				item = $("<a class='dropdown-item language'>");
				//item.html(" " + element.text);
				item.prepend(flag);
				item.attr("href", element.link);
				dropdown.append(item);
			
				item.click(function () {
					//alert("clicado: " + index);
					var menu_element = $(".dropdown." + app.HeaderContainer.Locale.cssClass);
					var dropdown = $(".dropdown-menu");
					menu_element.append(dropdown);
					let before = null;
					item = $(".nav-link.language");
					before = item.text();
					//console.log(before);
					item = $(".dropdown-item.language");
					let ment = item[index - 1];
					//alert("lingua a procurar: " + ment.text);
					let point = getIndexOfLanguage(ment.text);
					for (let i = 0; i < _size; i++) {
						const elem = app.HeaderContainer.Locale.language[i];
						let flag = $("<span class='flag-icon'>");
						flag.addClass(elem.countryIconFlag);
						if (point == i) {
							//app.HeaderContainer.Locale.language[this.getIndexOfLanguage(elem.text)].text
							//alert("indice a renderizar: " + getIndexOfLanguage(elem.text));
							item = $(".nav-link.language");
							//item.html(elem.text);
							item.prepend(flag);
							item.attr("href", elem.link);
							menu_element.prepend(item);
						} else {
							item = $(".dropdown-item.language");
							let len = item.length;
							for (let j = 0; j < len; j++) {
								const it = item[j];
								if (j != index) {
									if (it.text == " " + app.HeaderContainer.Locale.language[point].text && elem.text == before) {
										//console.log(it.innerHTML);
										$(it).html(" " + elem.text);
										flag.addClass(elem.cssClass);
										$(it).prepend(flag);
										$(it).attr("href", elem.link);
										//console.log(it.innerHTML);
										break;
									}
								}
							}
							//console.log(item);
							dropdown.append(item);
						}
					}
				});
				menu_element.append(dropdown);
			}
			item = null;
		}
		menu.append(menu_element);
		menu_element = null;
	};
	function getIndexOfLanguage(language) {
		// variable that store the size of language array
		//alert("lingua recebida:"+language);
		var _size = app.HeaderContainer.Locale.language.length;
		for (let index = 0; index < _size; index++) {
			const element = app.HeaderContainer.Locale.language[index];
			//alert(element.text);
			if (language == " " + element.text || language == element.text) {
				//alert("encontrado");
				return index;
			}
		}
		//alert("não encontrado");
		return -1;
	}
	// render the FooterContainer
	this.FooterContainer = function () {
		// variables 
		var column = null; // store the <Div> column 
		var area_text = null; //store the paragraph p that store the text and stay into column  
		var value_link = null; // store the <a> link of column in the area_text refer
		var FooterContainer = $("footer .container .row");
		var separetor = "|";
		//create footer
		// div left
		column = $("<div class='col-md-6'>");
		area_text = $("<p class='m-0 text-left text-white'>");
		let copyright = $("<span>");
		copyright.html(app.FooterContainer.copyRight);
		area_text.append(copyright);
		area_text.append(separetor);
		value_link = $("<a>");
		value_link.text(app.FooterContainer.Private.text);
		value_link.attr("href", app.FooterContainer.Private.link);
		area_text.append(value_link);
		area_text.append(separetor);
		value_link = null;
		value_link = $("<a>");
		value_link.text(app.FooterContainer.Terms.text);
		value_link.attr("href", app.FooterContainer.Terms.link);
		area_text.append(value_link);
		column.append(area_text);
		FooterContainer.append(column);
		column = null;
		// div right
		column = $("<div class='col-md-6'>");
		area_text = $("<p class='m-0 text-lg-right text-white'>");
		value_link = $("<a>");
		value_link.html(app.FooterContainer.Provider.text);
		value_link.attr("href", app.FooterContainer.Provider.link);
		area_text.append(value_link);
		column.append(area_text);
		FooterContainer.append(column);
		value_link = null;
		column = null;
	};
	// user render the userContainer
	this.UserContainer = function () {
		
		var userName = null;
		var name = null;
		var userImage = null;
		var userLink = null;
		var column = null;
		var group = null;
		var profile  = null;
		userName = $("<h6>");
		name = $("<span>");
		userLink = $("<a>");
		userImage = $("<img >");
		profile = $("<a>");
		// render the name of user
		name.html(app.UserContainer.User.name);
		name.attr("id", app.UserContainer.User.nameCssId);
		userName.append(name);
		userName.append("<br>");
		userName.append("<hr>");
		userName.append(profile);
		profile.html(app.UserContainer.User.profile);
		// render the image of user 
		userImage.attr("src", app.UserContainer.User.image);
		console.log(app.UserContainer.User.image);
		userImage.attr("id", app.UserContainer.User.imageCssId);
		profile.attr("href", app.UserContainer.User.profileLink);
		profile.attr("id", app.UserContainer.User.profileCssId);
		profile.css("display", "none");
		profile.addClass("btn btn-default active btn-xs");
		userImage.attr("src", app.UserContainer.User.image);
		// render the link of user 
		userLink.attr("href", app.UserContainer.User.link);
		userLink.append(userImage);
		userLink.append(userName);
	
		
		
		
		$("#userContainer").append(userLink);
		console.log($("#userContainer"));
	};
	// user render the adContainer
	this.AdContainer = function () {
		// variable that store the img of AdContainer
		var adImage = null;
		// variable that store the link of AdContainer
		var adLink = null;
		adImage = $("<img>");
		adLink = $("<a>");
		adImage.addClass(app.AdContainer.cssClass);
		// render the image of adContainer 
		adImage.attr("src", app.AdContainer.image);
		// render the link of AdContainer
		adLink.attr("href", app.AdContainer.link);
		adLink.append(adImage);
		$("#adContainer").append(adLink);
		console.log($("#adContainer"));
	};
	// use render the SearchContainer
	this.SearchContainer = function () {
		var category = null;
		var location = null;
		var location = null;
		var search = null;
		var option = null;
		var _size = 0;
		// category
		column = $("<div class='col-md-3'>");
		group = $("<div class='form-group input-group'>");
		category = $('<select class="form-control chosen-select">');
		category.addClass(app.SearchContainer.Category.cssClass);
		category.attr("id", app.SearchContainer.Category.cssId);
		_size = app.SearchContainer.Category.categories.length;
		option = $("<option class='none'selected>");
		option.html(app.SearchContainer.Category.text);
		category.prepend(option);
		option = null;
		// interate to catch all option of category
		for (let index = 0; index < _size; index++) {
			const element = app.SearchContainer.Category.categories[index];
			option = $("<option>");
			option.html(element);
			category.append(option);
		}
		group.append(category);
		column.append(group);
		$(".search").prepend(column);
		// location
		column = $("<div class='col-md-3'>");
		group = $("<div class='form-group'>");
		location = $('<select class="form-control chosen-select">');
		location.addClass(app.SearchContainer.Location.cssClass);
		location.attr("id", app.SearchContainer.Location.cssId);
		_size = app.SearchContainer.Location.locations.length;
		option = $("<option class='none'selected>");
		option.html(app.SearchContainer.Location.text);
		location.prepend(option);
		option = null;
		// interate to catch all option of category
		for (let index = 0; index < _size; index++) {

			const element = app.SearchContainer.Location.locations[index];
			option = $("<option>");
			option.html(element);
			location.append(option);
		}
		group.append(location);
		column.append(group);
		$(".search").append(column);
		// search
		column = $("<div class='col-md-6'>");
		group = $("<div class='form-group input-group'>");
		iconSearch = $("<span class='input-group-addon'>");
		iconSearch.append($('<i>').addClass(app.SearchContainer.Search.icon));
		var search = $('<input type="text" class="form-control">');
		search.attr("placeholder", app.SearchContainer.Search.text);
		search.attr("id", app.SearchContainer.Search.cssId);
		search.addClass(app.SearchContainer.Search.cssClass);
		console.log(search);
		// button
		var button = $('<button class="btn btn-default" type="button">');
		var group_btn = $('<span class="input-group-btn ">');
		var iconButton = $("<i>");
		iconButton.addClass(app.SearchContainer.Button.icon);
		button.html(app.SearchContainer.Button.text);
		button.prepend(iconButton);
		button.attr("id", app.SearchContainer.Button.cssId);
		button.addClass(app.SearchContainer.Button.cssClass);
		group_btn.append(button);
		group.append(iconSearch);
		group.append(search);
		group.append(group_btn);
		column.append(group);
		$(".search").append(column);

	};
	// user render the OldEntriesContainer
	this.OldEntriesContainer = function () {
		// variables thst store the HTML format tag
		var oldEntriesContainer = $('<div>');
		oldEntriesContainer.addClass(app.OldEntriesContainer.cssClass);
		var panel = $('<div class="panel panel-default">');
		var panelHeading = $('<div class="panel-heading">');
		// changed
		var _size = app.OldEntriesContainer.Entries.length;
		if (_size == 0) {
			return;
		}
		var textValue = $("<span>");
		// link to oldEntriesContainer (init update)
		var linkValue = $("<a>");
		linkValue.html(app.OldEntriesContainer.text);
		linkValue.attr("href", app.OldEntriesContainer.link);
		textValue.append(linkValue);
		// end update
		panelHeading.append(textValue);
		panel.append(panelHeading);
		var oldCard = $('<div id="old-card">')
		var row = $('<div class="row">');
		row.attr("id", app.OldEntriesContainer.cssId);
		oldEntriesContainer.append(panel);
		$("#middle_colapse").append(oldEntriesContainer);
		for (let index = 0; index < _size && index < 4; index++) {
			const element = app.OldEntriesContainer.Entries[index];
			var cardColumn = $('<div class="col-md-3 old-card">');
			cardColumn.click(this.cardListener);
			cardColumn.prop("ref",element.id);
			cardColumn.prop("type","OC");
			var singleBotton = $('<div class="single-bottom mb-35">');
			var image = $('<img>');
			image.attr("src", "data:image/jpg;base64,"+element.image);
			singleBotton.append(image);
			var bottonCap = $('<div class="trend-bottom-cap">');
			bottonCap.append($('<h6>').text(element.header));
			bottonCap.append($('<span>').text(element.description));
			bottonCap.append($('<hr>'));
			var footer = $('<a>');
			footer.append($('<i>').html(element.Footer.price));
			footer.attr("href", element.Footer.link);
			bottonCap.append(footer);
			singleBotton.append(bottonCap);
			cardColumn.append(singleBotton);
			row.append(cardColumn);
			//console.log(row);
		}
		var showMore = $('<span class="show-more">');
		showMoreValue = $('<i>');
		showMoreValue.text(app.OldEntriesContainer.showMore);
		showMore.append(showMoreValue);
		showMore.click(this.showMoreEventHandler);
		oldCard.append(row);
		oldCard.append(showMore);
		$("#middle_colapse").append(oldCard);
		console.log(oldCard);
		console.log($("#middle_colapse"));

	};
	// render the Ads need to full the cards of paginstion
	this.renderAds = function (list, row,limitCards) {
		// $.get("app_random_ads/"+limitCards, function(adList, status){

		// if(limitCards > 0){

		//list = adList;

		// }

		let size = list.length;
		for (let index = 0; index < size; index++) {
			let element = list[index];
			var cardColumn = $('<div class="col-md-3 old-card">');
			var singleBotton = $('<div class="single-bottom mb-35">');
			var image = $('<img>');
			image.attr("src", element.image);
			singleBotton.append(image);
			var bottonCap = $('<div class="trend-bottom-cap">');
			bottonCap.append($('<h6>').text(element.header));
			bottonCap.append($('<span>').text(element.description));
			bottonCap.append($('<hr>'));
			var footer = $('<a>');
			footer.append($('<i>').html(element.footer.price));
			footer.attr("href", element.footer.link);
			bottonCap.append(footer);
			singleBotton.append(bottonCap);
			cardColumn.append(singleBotton);
			row.append(cardColumn);
		}
		// });
	};
	this.cardListener = function (e){
		
		//window.location.href = "single_card?ref="+e.currentTarget.ref+"&type="+e.currentTarget.type;
		render.singleCard(e.currentTarget.ref);
	}
	
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that return the list of ads
    * of current user 
    */
    this.singleCard = function(id){
    	//alert("entrou para carregar a pagina do card clicado");
        // this request go at server and return the ads of current user 
        $.get('LoadTheSingleCard',{card_id:id},this.singleCardCallBack);
    }
    // get the ajax response of LoadAllAds
    this.singleCardCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into variable list of ads wheather status is success 
        if (status == "success") {
            // update de list of the ads 
			//alert("card: "+JSON.stringfy(data));
			localStorage.setItem("singleCard", JSON.stringify(data));
			//localStorage.singleCard = ;
            window.location.href = "single_card";
        }
    }
	// user render the NewEntriesContainer
	this.NewEntriesContainer = function () {
		/*
		 */
		// variables thst store the HTML format tag
		var newEntriesContainer = $('<div>');
		newEntriesContainer.addClass(app.NewEntriesContainer.cssClass);
		var panel = $('<div class="panel panel-default">');
		var panelHeading = $('<div class="panel-heading">');
		// changed
		var textValue = $("<span>");
		// link to oldEntriesContainer (init update)
		var linkValue = $("<a>");
		linkValue.html(app.NewEntriesContainer.text);
		linkValue.attr("href", app.NewEntriesContainer.link);
		textValue.append(linkValue);
		var list = $('<ul class="pagination text-right" id="pagination">');
		// end update
		var limitCards = 4;
		panelHeading.append(textValue);
		panel.append(panelHeading);
		var newCard = $('<div id="new-card">')
		var row = $('<div class="row">');
		row.attr("id", app.NewEntriesContainer.cssId);
		newEntriesContainer.append(panel);
		$("#middle_colapse").append(newEntriesContainer);
		var _size = app.NewEntriesContainer.Entries.length;
		for (let index = 0; index < _size && index < 4; index++) {
			const element = app.NewEntriesContainer.Entries[index];
			var cardColumn = $('<div class="col-md-3 old-card">');
			cardColumn.click(this.cardListener);
			cardColumn.prop("ref",element.id);
			cardColumn.prop("type","NC");
			var singleBotton = $('<div class="single-bottom mb-35">');
			var image = $('<img>');
			image.attr("src", "data:image/jpg;base64,"+element.image);
			singleBotton.append(image);
			var bottonCap = $('<div class="trend-bottom-cap">');
			bottonCap.append($('<h6>').text(element.header));
			bottonCap.append($('<span>').text(element.description));
			bottonCap.append($('<hr>'));
			var footer = $('<a>');
			footer.append($('<i>').html(element.Footer.price));
			footer.attr("href", element.Footer.link);
			bottonCap.append(footer);
			singleBotton.append(bottonCap);
			cardColumn.append(singleBotton);
			row.append(cardColumn);
			limitCards--;
			//console.log(row);
		}
		// adding ads
		//alert("qtd cards - "+_size);
		let listAds = this.Ads(limitCards);
		this.renderAds(listAds, row,limitCards);
		// currentPagination 
		let long = app.NewEntriesContainer.Control.counts.length;
		if (long == 0) {
			currentPagination = 0;
		} else {
			currentPagination = 1;
		}
		// controls
		this.page(list, "active");
		// show the currentPagination
		//alert("currentPagination: " + currentPagination);


		newCard.append(row);
		newCard.append(list);
		$("#middle_colapse").append(newCard);
		console.log(newCard);
		console.log($("#middle_colapse"));
	}
	this.page = function Pagination(list, active) {
		var itemList = $('<a class="page-link">');
		var first = $('<li class="page-item" id="first">');
		var prev = $('<li class="page-item" id="prev">');
		var next = $('<li class="page-item" id="next">');
		var last = $('<li class="page-item" id="last">');
		itemList.text(app.NewEntriesContainer.Control.first);
		first.addClass("first");
		first.append(itemList);
		itemList = null;
		first.click(this.firstEventHandler);
		itemList = $('<a class="page-link">');
		itemList.text(app.NewEntriesContainer.Control.previous);
		prev.addClass("prev");
		prev.append(itemList);
		itemList = null;
		prev.click(this.prevEventHandler);
		itemList = $('<a class="page-link">');
		itemList.text(app.NewEntriesContainer.Control.next);
		next.addClass("next");
		next.append(itemList);
		itemList = null;
		next.click(this.nextEventHandler);
		itemList = $('<a class="page-link">');
		itemList.text(app.NewEntriesContainer.Control.last);
		last.addClass("last");
		last.append(itemList);
		itemList = null;
		last.click(this.lastEventHandler);
		list.append(first);
		list.append(prev);
		var _size_pagination = Math.ceil(app.NewEntriesContainer.Entries.length / 4);
		//alert("num of page: " + _size_pagination);
		for (let index = 0; index < _size_pagination; index++) {
			const element = index + 1;
			let paginationItem = null;
			if (index == 0) {
				//alert("não clicou");
				paginationItem = $('<li class="page-item ' + active + '">');
			} else {
				paginationItem = $('<li class="page-item">');
			}

			itemList = $('<a class="page-link">');
			itemList.text(element);
			paginationItem.attr("id", "click_" + element);
			//paginationItem.addClass("number");
			paginationItem.click(function () {
				var row = $('#' + app.NewEntriesContainer.cssId);
				let id = element;
				if (currentPagination == id) {
					return;
				}

				row.empty();
				render.DesactivePage();
				currentPagination = id;
				render.ActivePage();
				let last = id * 4;
				let init = last - 4;
				var _size_cards = app.NewEntriesContainer.Entries.length;
				var limitCards = 4;
				if (last > _size_cards) {
					for (let i = init; i < _size_cards; i++) {
						const element = app.NewEntriesContainer.Entries[i];
						var cardColumn = $('<div class="col-md-3 old-card">');
						var singleBotton = $('<div class="single-bottom mb-35">');
						var image = $('<img>');
						image.attr("src", "data:image/jpg;base64,"+element.image);
						singleBotton.append(image);
						var bottonCap = $('<div class="trend-bottom-cap">');
						bottonCap.append($('<h6>').text(element.header));
						bottonCap.append($('<span>').text(element.description));
						bottonCap.append($('<hr>'));
						var footer = $('<a>');
						footer.append($('<i>').html(element.Footer.price));
						footer.attr("href", element.Footer.link);
						bottonCap.append(footer);
						singleBotton.append(bottonCap);
						cardColumn.append(singleBotton);
						row.append(cardColumn);
						limitCards--;
						//console.log(row);
					}
					// adding ads
					//alert("qtd de Ads- " + limitCards);
					let listAds = render.Ads(limitCards);
					render.renderAds(listAds, row,limitCards);
				} else {
					//alert("entrou em ainda tem paginação na lista cards");
					for (let i = init; i < last; i++) {
						const element = app.NewEntriesContainer.Entries[i];
						var cardColumn = $('<div class="col-md-3 old-card">');
						var singleBotton = $('<div class="single-bottom mb-35">');
						var image = $('<img>');
						image.attr("src", "data:image/jpg;base64,"+element.image);
						singleBotton.append(image);
						var bottonCap = $('<div class="trend-bottom-cap">');
						bottonCap.append($('<h6>').text(element.header));
						bottonCap.append($('<span>').text(element.description));
						bottonCap.append($('<hr>'));
						var footer = $('<a>');
						footer.append($('<i>').html(element.Footer.price));
						footer.attr("href", element.Footer.link);
						bottonCap.append(footer);
						singleBotton.append(bottonCap);
						cardColumn.append(singleBotton);
						row.append(cardColumn);
						//console.log(row);
					}
				}
				//alert("página actual - " + currentPagination);
				render.DisableControll(first, prev, next, last);
			});

			paginationItem.append(itemList);
			itemList = null;
			//alert("página actual " + currentPagination);
			render.DisableControll(first, prev, next, last);
			list.append(paginationItem);
			//$("#click_" + currentPagination).attr("class", "page-item active");
			list.append(next);
			list.append(last);
		}
	};
	this.ActivePage = function () {

		$("#click_" + currentPagination).attr("class", "page-item active");
		//alert($("#click_" + currentPagination).attr("class"));
	};
	this.DesactivePage = function () {

		$("#click_" + currentPagination).attr("class", "page-item");

	};
	
	 /* new code init*/
    // render create new ad
    this.CreateNewAd = function () {
        var newAdComponent = $("div.options");
        var btnCreateNewAd = $('<button class="btn btn-primary" data-toggle="modal" data-target="#add">');
        var iElement = $('<i class="fa fa-plus-circle">');
        btnCreateNewAd.append(iElement);
        btnCreateNewAd.append(" " + app.CreateNewAd.text);
        btnCreateNewAd.addClass(app.CreateNewAd.cssClass);
        btnCreateNewAd.attr("id", app.CreateNewAd.cssId);
        btnCreateNewAd.click(this.CleanModalForm);
        btnCreateNewAd.click(this.SlideRender);
        btnCreateNewAd.click(this.CreateYourAddMood);
        btnCreateNewAd.click(this.LoadDatasToNewAd);
        newAdComponent.prepend(btnCreateNewAd);
    };
    this.LoadDatasToNewAd = function(){
    // get all categorization and render then
    	$.get("categories_list", function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // this is the update list of the categorizations on create new Card
        app.NewAdd.categorization.list = data;
		render.renderDataOfBasepackage();
		render.renderDataCategorization();
		render.renderDataSubCategorization(null);
    });
    // get all locations and render then
    	$.get("locations_list", function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // this is the update list of the locations on create new Card
        app.NewAdd.province.list = data;
		render.renderDataProvince();
    });
    }
    this.LoadDatasToUpdateAd = function(cat,sub,prov){
    // get all categorization and render then
    	$.get("categories_list", function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // this is the update list of the categorizations on create new Card
        app.NewAdd.categorization.list = data;
		render.renderDataOfBasepackage();
		let newAd = app.NewAdd;
		$("#categorization").text(newAd.categorization.text);
        let _sizeCategorization = newAd.categorization.list.length;
        $("#categorizationList").find('option').remove().end();
        for (let index = 0; index < _sizeCategorization; index++) {
            const element = newAd.categorization.list[index];
            let option = $('<option>');
            option.attr("value", element.id);
            option.attr("id",element.id);
            option.text(element.name);
			if(option.text()==cat){
            	//alert('entrou')
            	option.prop('selected',true);
        	}
            $("#categorizationList").append(option);
        }
        $("#placeCategorization").text(newAd.categorization.placeholder);
        
		//alert("mudou para: "+$("#categorizationList").val()+" user:"+localStorage.userId);
    	$.get('subcategories_list',{category:$("#categorizationList").val()},function(data){
		// get all subcategory
		$("#lblSubcategory").text(newAd.subcategory.text);
        let _sizeSubCategory = 0;
        if(data!=null)
        	_sizeSubCategory = data.length;
        
        $("#subcategory").find('option').remove().end();
        for (let index = 0; index < _sizeSubCategory; index++) {
            const element = data[index];
            let option = $('<option>');
            option.attr("value", element.id);
            option.attr("id",element.id);
            option.text(element.name);
			if(option.text()==sub){
            	//alert('entrou')
            	option.prop('selected',true);
        	}
            $("#subcategory").append(option);
        }
        $("#placeSubcategory").text(newAd.subcategory.placeholder);
        });
    });
    // get all locations and render then
    	$.get("locations_list", function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // this is the update list of the locations on create new Card
        app.NewAdd.province.list = data;
		// get all provinces
		$("#province").text(app.NewAdd.province.text);
        let _sizeState = data.length;
        
		//alert(data);
        $("#inputState").find('option').remove().end();
        for (let index = 0; index < _sizeState; index++) {
            const element = data[index];
            let option = $('<option>');
            let indexOf = index + 1;
            option.attr("value", indexOf);
            option.attr("id",indexOf);
            option.text(element);
			if(option.text()==prov){
            	//alert('entrou')
            	option.prop('selected',true);
        	}
            $("#inputState").append(option);
        }
        $("#placeState").text(app.NewAdd.province.placeholder);
    });
    }
    this.renderDataOfBasepackage = function(){
    	
	 	let phoneVisible = false;
	 	
	 	if(localStorage.usertelvisible=="true")
			phoneVisible = true;
		
        $("#ckbxPhone").prop("checked",phoneVisible);
	 	
	 	if(localStorage.usertelefone=="null")
			$("#iPhone").val(null);
		else
			$("#iPhone").val(localStorage.usertelefone);
	 	
	 	let emailVisible = false;
	 	
	 	if(localStorage.useremailvisible=="true")
			emailVisible = true;
		
	 	$("#ckbxEmail").prop("checked",emailVisible);
	 	
	 	if(localStorage.useremail=="null")
			$("#iEmail").val(null);
		else
			$("#iEmail").val(localStorage.useremail);
        
		$("#iName").val(localStorage.username);
		
		// let as read only
		$("#iName").attr("readonly",true);
		$("#iEmail").attr("readonly",true);
		$("#iPhone").attr("readonly",true);
		$("#ckbxEmail").attr("disabled",true);
		$("#ckbxPhone").attr("disabled",true);      
    }
    this.renderDataCategorization = function(){
    	let newAd = app.NewAdd;
		$("#categorization").text(newAd.categorization.text);
        let _sizeCategorization = newAd.categorization.list.length;
        $("#categorizationList").find('option').remove().end();
        for (let index = 0; index < _sizeCategorization; index++) {
            const element = newAd.categorization.list[index];
            let option = $('<option>');
            option.attr("value", element.id);
            option.attr("id",element.id);
            option.text(element.name);
            $("#categorizationList").append(option);
        }
        $("#placeCategorization").text(newAd.categorization.placeholder);
        $("#categorizationList").val(null);
        $("#categorizationList").change(function(){
        	//alert("mudou para: "+$("#categorizationList").val()+" user:"+localStorage.userId);
        	$.get('subcategories_list',{category:$("#categorizationList").val()},function(data){
        		render.renderDataSubCategorization(data);
        	});
        });
    }
    
    this.renderDataSubCategorization = function(data){
    	let newAd = app.NewAdd;
		$("#lblSubcategory").text(newAd.subcategory.text);
        let _sizeSubCategory = 0;
        if(data!=null)
        	_sizeSubCategory = data.length;
        
        $("#subcategory").find('option').remove().end();
        for (let index = 0; index < _sizeSubCategory; index++) {
            const element = data[index];
            let option = $('<option>');
            option.attr("value", element.id);
            option.attr("id",element.id);
            option.text(element.name);
            $("#subcategory").append(option);
        }
        $("#placeSubcategory").text(newAd.subcategory.placeholder);
        $("#subcategory").val(null);
    }
    this.renderDataProvince = function(){
        let newAd = app.NewAdd;
        $("#province").text(newAd.province.text);
        let _sizeState = newAd.province.list.length;
        $("#inputState").find('option').remove().end();
        for (let index = 0; index < _sizeState; index++) {
            const element = newAd.province.list[index];
            let option = $('<option>');
            let indexOf = index + 1;
            option.attr("value", indexOf);
            option.attr("id",indexOf);
            option.text(element);
            $("#inputState").append(option);
        }
        $("#placeState").text(newAd.province.placeholder);
        $("#inputState").val(null);
    }
    var slideList = [];
    var listAds = Array();
    // this represents the Message buttom near of create new ad (render Message Component)
    this.MessageComponentRender = function () {
        var MessageComponentRender = $("h4#mymessage");
        var linkMessage = $('<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">');
        var iElement = $('<i class="fa fa-envelope-square">');
        let h1Element = $('<h1>');
        linkMessage.append(iElement);
        linkMessage.append(" " + app.MyMessage.text);
        linkMessage.addClass(app.MyMessage.cssClass);
        linkMessage.attr("id", app.MyMessage.cssId);
        MessageComponentRender.append(linkMessage);
        // render.MessageListRender(app.MyMessage.data);
        this.GetTheMessageListInServer();
    };
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that request the user
    *  and return the MessageList to render
    */
    this.GetTheMessageListInServer = function () {
        let user = app.UserContainer.user;
        // this is the coment struture that cacth the data to the server and return to render
        // $.post('GetMessageListOfUser','user','GetMessageListOfUserCallback');
        // this is the render the messageList with out jquery-post ajax, load the actual list that is fake 
        render.MessageListRender(app.MyMessage.data);
    }
    // get the ajax response of GetMessageListOfUser
    this.GetMessageListOfUserCallback = function (data, status) {
        // console.log("response data::"+data);
        // console.log("response status::"+status); 
        app.MyMessage.data = data;
        // this is the render that render MessageList 
        render.MessageListRender(app.MyMessage.data);
    }

    // this should create the messagelist in the message component
    this.MessageListRender = function (list) {
        var _sizeData = list.length;
        let messageList = $(".messageList");
        messageList.empty();
        if (_sizeData == 0) {
            return;
        }
        for (let index = 0; index < _sizeData; index++) {
            const element = list[index];
            let click_state = false;
            var divrow = $('<div class="row">');
            let pos = index + 1;
            divrow.attr("id", "message_" + pos);
            var colomn3_image = $('<div class="col-md-3 img-message">');
            var image = $('<img>');
            var colomn9_message = $('<div class="col-md-9 content-message">');
            var name = $('<h6 id="name">');
            var deleteOption = $('<span id="delete">');
            var messageContent = $('<span id="messageContent">');
            var deleteOption = $('<span id="delete">');
            IelementDelete = $('<i class="fa fa-trash">');
            deleteOption.append(IelementDelete);
            // deletar a mensagem  
            IelementDelete.click(function () {
                let indexOf = index + 1;
                //clicou em deletar mensagem de número - indexOf
                let currentMessage = $('div#message_' + indexOf);
                let message = $("#messagerOf_" + indexOf);
                currentMessage.fadeOut("slow");
                message.fadeOut("slow");
                render.DeleteTheMessageInServer(index);
                click_state = true;
            }
            );
            colomn9_message.click(
                function () {
                    let indexOf = index + 1;
                    if (click_state == false) {
                        //clicou na mensagem de número - indexOf 
                        let currentMessage = $('div#message_' + indexOf);
                        render.MessageActive(indexOf);
                        render.GetMessagerInServer(index);
                    }
                }
            );
            name.text(element.name);
            messageContent.text(element.messageContent);
            image.attr("src", element.img);
            colomn3_image.append(image);
            colomn9_message.append(deleteOption);
            colomn9_message.append(name);
            colomn9_message.append(messageContent);
            divrow.append(colomn3_image);
            divrow.append(colomn9_message);

            messageList.append(divrow);

        }
    }
    var actualMessageActive = 0;
    // this occur when some message is clicked and need to active this and disable the before
    this.MessageActive = function (indexOf) {
        if (actualMessageActive > 0) {
            $('div#message_' + actualMessageActive + ' .content-message').removeClass("message-active");
            $('div#message_' + actualMessageActive + ' .content-message').removeClass("disabled");
        }
        $('div#message_' + indexOf + ' .content-message').addClass("message-active");
        $('div#message_' + indexOf + ' .content-message').addClass("disabled");
        actualMessageActive = indexOf;
    }
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that request the messege
    *  of user and return the MessageList to represent the panel message 
    * of current user 
    */
    this.DeleteTheMessageInServer = function (index) {
        let message = app.MyMessage.data[index];
        $.post('DeleteTheMessageInServer', 'message', 'DeleteTheMessageInServerCallBack');
    }
    // get the ajax response of DeleteTheMessageInServer
    this.DeleteTheMessageInServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        app.MyMessage.data = data;
        // this is the render the list of message in message panel 
        render.MessageListRender(app.MyMessage.data);
    }
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that request the chat
    *  of user and delete all messages and return the update MessageChat to represent the chat 
    * of current user 
    */
    this.DeleteTheAllMessagerChatInServer = function () {
        let Chat = app.MessageViewContainer.list;
        $.post('DeleteTheAllMessagerChatInServer', 'Chat', 'DeleteTheAllMessagerChatInServerCallBack');
    }
    // get the ajax response of DeleteTheAllMessagerChatInServer
    this.DeleteTheAllMessagerChatInServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        app.MessageViewContainer.list = data;
        // this is the render the new talk message 
        render.MessagerRender(app.MessageViewContainer.list);
    }
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that request the messege
    *  of user and return the MessageList to represent the chat 
    * of current user 
    */
    this.GetMessagerInServer = function (index) {
        let userMessage = app.MyMessage.data[index];
        // this is the coment struture that cacth the data to the server and return to render
        // $.post('LoadMessagerChat','userMessage','MessagerChatCallback');
        // this is the render the chat messager with out jquery-post ajax load the actual list that is fake 
        render.MessagerRender(app.MessageViewContainer.list);
    }
    // get the ajax response of LoadMessagerChat
    this.MessagerChatCallback = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        app.MessageViewContainer.list = data;
        // this is the render the chat messager 
        render.MessagerRender(app.MessageViewContainer.list);
    }
    // last index of chat 
    var lastIndex;
    // use render the Messager
    this.MessagerRender = function (list) {
        /***/
        var message = $('<div class="col-md-8 preview-message">');
        var panel_message = $('<div class="message-contenido" id="message-contenido">');
        var brandUser = $("<label>");
        let pos = actualMessageActive - 1;
        brandUser.text(app.MyMessage.data[pos].name);
        render.clean_the_row();
        let _sizeList = list.length;
        if (_sizeList == 0) {
            return;
        }
        let indexOf = pos + 1;
        message.attr("id", "messagerOf_" + indexOf);
        var deleteOption = $('<span id="delete">');
        IelementDelete = $('<i class="fa fa-trash">');
        deleteOption.append(IelementDelete);
        // deletar o chat de mensagem actual
        deleteOption.click(
            function () {
                //clicou em deletar mensagem
                let currentMessage = $('div#message_' + indexOf);
                currentMessage.fadeOut("slow");
                message.fadeOut("slow");
                render.DeleteTheMessageInServer(pos);
                render.DeleteTheAllMessagerChatInServer();
            }
        );
        message.prepend(deleteOption);
        message.append(brandUser);
        message.append($('<br><br>'));
        for (let index = 0; index < _sizeList; index++) {
            const element = list[index];
            let me = $('<div class="form-group row me">');
            let guest = $('<div class="form-group row gest">');
            let col2_me = $('<div class="col-sm-2 col">');
            let col2_guest = $('<div class="col-sm-2 col">');
            let col10_me = $('<div class="col-sm-10 message">');
            let col10_guest = $('<div class="col-sm-10 message">');
            let image_me = $('<img>');
            image_me.attr("src", element.me.img);
            let image_guest = $('<img>');
            image_guest.attr("src", element.guest.img);
            let message_me = $('<span >');
            let message_guest = $('<span >');
            message_me.text(element.me.text);
            message_guest.text(element.guest.text);
            col2_me.append(image_me);
            col10_me.append(message_me);
            col2_guest.append(image_guest);
            col10_guest.append(message_guest);
            me.append(col2_me);
            me.append(col10_me);
            guest.append(col10_guest);
            guest.append(col2_guest);
            if (element.guest.text != "")
                panel_message.append(guest);
            if (element.me.text != "")
                panel_message.append(me);
        }
        /**/
        message.append(panel_message);
        let send = $('<div class="form-group row send">');
        let col2_send = $('<div class="col-sm-2">');
        let col10_send = $('<div class="col-md-10">');
        let message_send = $('<input type="text" class="form-control" id="messageSend">');
        let btn_send = $('<button type="submit" class="btn btn-primary disabled" id="btn_send">');
        btn_send.append(app.MessageViewContainer.button);
        message_send.attr("placeholder", app.MessageViewContainer.message_tip);
        // control de send button active and desactive if have a message to send or not
        message_send.change(
            function () {
                render.VerifyTheMessage();
            }
        );
        // send the message
        btn_send.click(
            function () {
                // test idea
                render.MessageSendInServer(message_send.val());
                message_send.val("");
                render.VerifyTheMessage();
            });
        col2_send.append(btn_send);
        col10_send.append(message_send);
        send.append(col10_send);
        send.append(col2_send);
        message.append(send);

        $("#middle_colapse").append(message);
        message.fadeIn("slow");
    }
    // event that verify if test of message is empty disable or enable in else
    this.VerifyTheMessage = function () {
        if ($("#messageSend").val() != "") {
            $("#btn_send").attr("class", "btn btn-primary");
        } else {
            $("#btn_send").attr("class", "btn btn-primary disabled");
        }
    }
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that request the messege
    *  of user to insert into BD server and return the update MessageList to represent the chat 
    * of current user 
    */
    this.MessageSendInServer = function (message) {
        //verify if need a new talk or not, and update the list
    	
        let list = app.MessageViewContainer.list;
        let lastPos = list.length - 1;
        let element = list[lastPos];
        if (element.me.text != "") {
            element.me.text = message;
        } else {
            var talk = {
                guest: {
                    img: "",
                    text: ""
                },
                me: {
                    img: "",
                    text: ""
                }
            }
            talk.guest.img = element.guest.img;
            talk.me.img = element.me.img;
            talk.me.text = message;
            list.push(talk);
            element = talk;
            lastIndex++;
        }
        let messageSendFromServer = {
            user: app.UserContainer.user,
            listMessage: list,
            message: message
        }
        // this two lines are in fake mode, 'cause are replace to the jquery-post ajax (4th line commented)
        app.MessageViewContainer.list = list;
        render.NewTalkRender(element);
        // action that the server should be return is the update list data of chat to replace in format 
        // $.post('SendMessageToServer','messageSendFromServer','SendMessageCallback');
    }
    // get the ajax response of MessageSendInServer
    this.SendMessageCallback = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        app.MessageViewContainer.list = data;
        let last = app.MessageViewContainer.list.length - 1;
        // this is the render the new talk message 
        render.NewTalkRender(app.MessageViewContainer.list[last]);
    }
    this.NewTalkRender = function (talk) {
        var panel_message = $("#message-contenido");
        let me = $('<div class="form-group row me">');
        let guest = $('<div class="form-group row gest">');
        let col2_me = $('<div class="col-sm-2 col">');
        let col2_guest = $('<div class="col-sm-2 col">');
        let col10_me = $('<div class="col-sm-10 message">');
        let col10_guest = $('<div class="col-sm-10 message">');
        let image_me = $('<img>');
        image_me.attr("src", talk.me.img);
        let image_guest = $('<img>');
        image_guest.attr("src", talk.guest.img);
        let message_me = $('<span >');
        let message_guest = $('<span >');
        message_me.text(talk.me.text);
        message_guest.text(talk.guest.text);
        col2_me.append(image_me);
        col10_me.append(message_me);
        col2_guest.append(image_guest);
        col10_guest.append(message_guest);
        me.append(col2_me);
        me.append(col10_me);
        guest.append(col10_guest);
        guest.append(col2_guest);
        if (talk.guest.text != "")
            panel_message.append(guest);
        if (talk.me.text != "")
            panel_message.append(me);
    }
    // use this to render EditYourAdds
    this.EditYourAdd = function (position,cardId) {
        let newAd = app.NewAdd;
        data = {
        	image: "",
        }
        $("#title").text(newAd.editTitle);
        //let myAd = listAds[position];
        let _size = 0;
        if(app.Publisher.publishList[position].UploadImage!=null)
        	_size = app.Publisher.publishList[position].UploadImage.length;
        
        //alert(1);
        //alert(_size);
        slideList = [];
        for (let index = 0; index < _size; index++) {
            const element = app.Publisher.publishList[index].UploadImage;
            data.image = element;
            slideList.push(data);
        }
        f = 0;
        //alert("image: "+slideList[0].image);
        //slideList = app.Publisher.publishList[position].UploadImage;
        //alert(cardId);
		idCard = cardId;
        render.LoadTheSingleCard(cardId);
    }
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that return the list of ads
    * of current user 
    */
    this.LoadTheSingleCard = function(id){
    	//alert("entrou para carregar os cards");
        // this request go at server and return the ads of current user 
        $.get('LoadTheSingleCard',{card_id:id},this.LoadTheSingleCardCallBack);
    }
    // get the ajax response of LoadAllAds
    this.LoadTheSingleCardCallBack = function (data, status) {
    publish1 = {
            title: "Publish",
            state: "publish-on",
            UploadImage: [],
            Edit: {
                cssId: "btn_edit",
                title: "Edit",
                flag: "fa fa-edit"
            },
            Delete: {
                cssId: "delete",
                title: "Delete",
                flag: "fa fa-trash"
            }
        }
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into variable list of ads wheather status is success 
        
        if (status == "success") {
            // update de list of the ads 
            //alert(JSON.stringify(data));
            let fotos = {};
            let _size = data.cardDetail.UploadImage.length;
        	slideList = [];
        	//alert(_size);
        	for (let index = 0; index < _size; index++) {
            	const element = data.cardDetail.UploadImage[index];
            	fotos.image = element;
            	slideList.push(fotos);
            	fotos = {};
        	}
        
        	//alert("image: "+slideList[0].image);
        	//slideList = app.Publisher.publishList[position].UploadImage;
        	//alert(cardId);
        	render.SlideRender();
        	let myAd = data;
        	render.UpdateModalForm(myAd);
        
            // empty the local list of publish in format
            //app.Publisher.publishList = data.Publisher.publishList;
            //let _size = render.listAds.length;
        	//alert(render.listAds.length);
            //render = new Render(data);
            //render.Publisher();
        }
    }
    // 
    this.CreateYourAddMood = function () {
        let newAd = app.NewAdd;
        $("#title").text(newAd.title);
        $("#divEdit").attr("style", "display:none;");
        $("#divAdd").attr("style", "");
    }
    // use render CreateYourAd
    this.CreateYourAdd = function () {
        let newAd = app.NewAdd;
        $("#title").text(newAd.title);
        $("#uploadImage").text(newAd.uploadImage);
        $("#addType").text(newAd.addType.text);
        $("#offer").prepend(newAd.addType.offer);
        $("#lookingfor").prepend(newAd.addType.loking);
        $("#lblTitle").text(newAd.titleOfAd);
        $("#lblDescription").text(newAd.description);
        $("#tips").text(newAd.tips.text);
        $("#tipsVal").attr("placeholder", newAd.tips.placeholder);
        $("#price").text(newAd.price);
        $("#negotiable").prepend(newAd.negotiable);
        $("#tochange").prepend(newAd.toChange);
        $("#togiveaway").prepend(newAd.toGiveAwey);
        $("#new").prepend(newAd.new);
        $("#used").prepend(newAd.used);
        
        //$("#subcategory").attr("placeholder", newAd.subcategory);
        $("#zip").text(newAd.zip);
        
        $("#street").text(newAd.street);
        $("#preference").text(newAd.preference);
        $("#tips2").text(newAd.tips2.text);
        $("#iTips2").attr("placeholder", newAd.tips2.placeholder);
		slideList = [];
        $("#phone").text(newAd.phone.text);
        $("#email").text(newAd.email.text);
        $("#phoneState").prepend(newAd.phone.visible);
        $("#emailState").prepend(newAd.email.visible);
        $("#divEdit").attr("style", "display:none;");
        $("#divAdd").attr("style", "");
        $("#uploads").hide();
        $("#name").text(newAd.name);
        $("#publishNow").prepend(newAd.publishNow);
        $("#finish").append(newAd.finish);
        $("#finishEdit").append(newAd.finish);
        $("#img").change(this.AddImageToSlide);
        $("#finish").click(
            function () {
                render.FinishAd();
            }
        );
        
    }
	
    // use to Clean Ads content in form Modal add 
    this.CleanModalForm = function () {
        slideList = [];
        $("#iOffer").prop("checked", false);
        $("#iLookingfor").prop("checked", false);
        $("#titelVal").val(null);
        $("#descriptionVal").val(null);
        $("#priceVal").val(null);
        $("#iNegotiable").prop("checked", false);
        $("#iTochange").prop("checked", false);
        $("#Itogiveaway").prop("checked", false);
        $("#iNew").prop("checked", false);
        $("#iUsed").prop("checked", false);
        $("#categorizationList").val(null);
        $("#subcategory").val(null);
        $("#iZip").val(null);
        $("#inputState").val(null);
        $("#iStreet").val(null);
        $("#iPreference").val(null);
        $("#iPhone").val(null);
        $("#iEmail").val(null);
        $("#iName").val(null);
        $("#ckbxPhone").prop("checked", false);
        $("#ckbxEmail").prop("checked", false);
        $("#publish_now").prop("checked", false);
        render.EmptySlideList();
    }
    //populate the value of a categorization in modal
    this.popCategorization = function(val){
    	for(i = 1; i<$('#categorizationList').find('option').length;i++){
        	alert($('#categorizationList #'+i).text());
        	if($('#categorizationList #'+i).text()==val){
        	   	 $('#categorizationList #'+i).prop('selected',true);
        	}
    	}
    }
    this.popSubCategorization = function(val){
    	
    	for(i = 1; i<$('#subcategory').find('option').length;i++){
        	if($('#subcategory #'+i).text()==val){
        	   	 $('#subcategory #'+i).prop('selected',true);
        	}
    	}
    }
    this.popProvince = function(val){
    	
    	for(i = 1; i<$('#inputState').find('option').length;i++){
        	if($('#inputState #'+i).text()==val){
        	   	 $('#inputState #'+i).prop('selected',true);
        	}
    	}
    }
    // use to render the Ads content in form Modal add 
    this.UpdateModalForm = function (ad) {
        let _size = slideList.length;
        let images = [];
        for (let index = 0; index < _size; index++) {
            const element = slideList[index];
            let image = urlBase + "" + element;
            images.push(image);
        }
        //ad.UploadImage = slideList;
        
        AddType = {
            offer: true,
            looking: true,
        }
        render.LoadDatasToUpdateAd(ad.cardDetail.category.name,ad.cardDetail.subCategory.name,ad.cardDetail.province.location);
        // modify the value of filds in modal
        if(ad.cardDetail.type=="offer"){
        	$("#iOffer").prop("checked", true);
        	$("#iLookingfor").prop("checked", false);
        }else{
        	$("#iLookingfor").prop("checked", true);
        	$("#iOffer").prop("checked", false);
        	}
        $("#titelVal").val(ad.header);
        $("#descriptionVal").val(ad.description);
        //$("#tipsVal").val(ad.Tips);
        $("#priceVal").val(ad.Footer.price);
        if(ad.cardDetail.dealtype == "To change"){
        	$("#iNegotiable").prop("checked", false);
        	$("#iTochange").prop("checked", true);
        	$("#Itogiveaway").prop("checked", false);
        	$("#iNew").prop("checked", false);
        	$("#iUsed").prop("checked", false);
        }else if(ad.cardDetail.dealtype == "Negotiable"){
        	$("#iNegotiable").prop("checked", true);
        	$("#iTochange").prop("checked", false);
        	$("#Itogiveaway").prop("checked", false);
        	$("#iNew").prop("checked", false);
        	$("#iUsed").prop("checked", false);
        }else if(ad.cardDetail.dealtype == "To give away"){
        	$("#iNegotiable").prop("checked", false);
        	$("#iTochange").prop("checked", false);
        	$("#Itogiveaway").prop("checked", true);
        	$("#iNew").prop("checked", false);
        	$("#iUsed").prop("checked", false); 
        }else if(ad.cardDetail.dealtype == "New"){
        	$("#iNegotiable").prop("checked", false);
        	$("#iTochange").prop("checked", false);
        	$("#Itogiveaway").prop("checked", false);
        	$("#iNew").prop("checked", true);
        	$("#iUsed").prop("checked", false);
        }else{
        	$("#iNegotiable").prop("checked", false);
        	$("#iTochange").prop("checked", false);
        	$("#Itogiveaway").prop("checked", false);
        	$("#iNew").prop("checked", false);
        	$("#iUsed").prop("checked", true);
        }
        //alert(ad.cardDetail.category.name);
        //document.getElementById("categorizationList").selectedIndex = '2'//""+ad.cardDetail.category.id; 
    	//alert(document.getElementById("categorizationList").selectedIndex);
    	//render.popCategorization(ad.cardDetail.category.name);
        //render.popSubCategorization(ad.cardDetail.subCategory.name);
        //render.popProvince(ad.cardDetail.province.location);
        //$("#categorizationList").val(ad.cardDetail.category.id);
        //$("#subcategory").val(ad.cardDetail.subCategory.id);
        $("#iZip").val(ad.cardDetail.zipcode);
        //$("#inputState").val(ad.cardDetail.province.id);
        $("#iStreet").val(ad.cardDetail.street);
        $("#iPreference").val(ad.cardDetail.reference);
        /*$("#iTips2").val(ad.Tips2);
        $("#iPhone").val(ad.Phone);
        $("#iEmail").val(ad.Email);
        $("#iName").val(ad.Name);
        $("#ckbxPhone").prop("checked", ad.PhoneState);
        $("#ckbxEmail").prop("checked", ad.EmailState);
        */
        //render.data
        //if(ad.cardDetail.publish==true)
        $("#publish_now").prop("checked", ad.cardDetail.publish);
        $("#divEdit").attr("style", "");
        $("#divAdd").attr("style", "display:none;");
    }
    this.CreateNewAdWithModalData = function () {
        let ad = {};
        ad.UploadImage = slideList;
        AddType = {
            offer: true,
            looking: true,
        }
        let offer = $("#iOffer").prop("checked");
        let looking = $("#iLookingfor").prop("checked");
        AddType.offer = offer;
        AddType.looking = looking;
        ad.AddType = AddType;
        ad.TitleOfAd = $("#titelVal").val();
        ad.Description = $("#descriptionVal").val();
        if (render.isMoney($("#priceVal").val()))
            ad.Price = $("#priceVal").val();
        else
            ad.Price = null;
		//alert(ad.Price);
        let Negotiable = $("#iNegotiable").prop("checked");
        let Tochange = $("#iTochange").prop("checked");
        let togiveaway = $("#Itogiveaway").prop("checked");
        let New = $("#iNew").prop("checked");
        let Used = $("#iUsed").prop("checked");
        ad.Negotiable = Negotiable;
        ad.ToChange = Tochange;
        ad.ToGiveAwey = togiveaway;
        ad.New = New;
        ad.Used = Used;
        ad.Categorization = $("#categorizationList").val();
        ad.Subcategory = $("#subcategory").val();
        ad.Zip = $("#iZip").val();
        ad.Province = $("#inputState").val();
        ad.Street = $("#iStreet").val();
        ad.Preference = $("#iPreference").val();
        if ($.isNumeric($("#iPhone").val()))
            ad.Phone = $("#iPhone").val();
        else
            ad.Phone = null;
        ad.Email = $("#iEmail").val();
        ad.Name = $("#iName").val();
        ad.PhoneState = $("#ckbxPhone").prop("checked");
        ad.EmailState = $("#ckbxEmail").prop("checked");
        ad.PublishNow = $("#publish_now").prop("checked");
        return ad;
    }
    this.FinishUpdateAd = function (position) {
        // catch the Ads in to modal form 
        let ad = render.CreateNewAdWithModalData();
        if(ad.Price==null || f>0) 
        	return;
        f= f+1;
        //alert(ad.Price);
        //alert(f);
        render.SaveUpdateAdInToServer(ad);
        
    }
    this.SaveUpdateAdInToServer = function(ad){
        // this request go at server and add new ad and return the update list of ads
        ad.userId = localStorage.userId;
        ad.cardId = idCard;
        //alert(idCard);
        $.post('saveUpdateAd',ad,this.SaveUpdateAdInToServerCallBack);
    } 
    // get the ajax response of SaveEditAdInToServer
    this.SaveUpdateAdInToServerCallBack = function(data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into variable list of ads wheather status is success 
        if (status == "success") {
	       render.LoadAllAds();
	       render.CleanModalForm();
        }
    }
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that request the ad and update
    *  return the update list of ads 
    * of current user 
    */
    this.SaveEditAdInToServer = function(ad,status){
        // this request go at server and add new ad and return the update list of ads
        $.post('editPublishCard',{id:ad,publish:status},this.SaveEditAdInToServerCallBack);
    } 
    // get the ajax response of SaveEditAdInToServer
    this.SaveEditAdInToServerCallBack = function(data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into variable list of ads wheather status is success 
        if (status == "success") {
            // update de list of the ads 
            listAds = data;
            let _size = listAds.length;
            // empty the local list of publish in format
            app.Publisher.publishList = null;
            for (let index = 0; index < _size; index++) {
                const element = listAds[index];
                // Create a new publish in PublishList in to format.js of the new ad  
                render.CreateOrUpdateAndPublish(ad, -1);
            }
            // clean the modal form
            render.CleanModalForm();
        }
    }
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that request the ad and delete
    *  return the update list of ads 
    * of current user 
    */
    this.DeletePublishOnTheServer = function(cardId){
    	//alert(cardId);
        // this request go at server and delete the ad and return the update list of ads
        $.post('deleteCard',{card_id:cardId},this.DeletePublishOnTheServerCallBack);
    } 
    // get the ajax response of DeletePublishOnTheServer
    this.DeletePublishOnTheServerCallBack = function(data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into variable list of ads wheather status is success 
        if (status == "success") {
	       render.LoadAllAds();
        }
    } 
    this.FinishAd = function () {
        // catch the Ads in to modal form 
        ad = render.CreateNewAdWithModalData();
        //alert("adicionar");
        // event that do the jquery-post ajax to save new ad in to server
        render.SaveNewAdInToServer(ad);
        // comment the three lines in bellow (the comments lines not includes on three lines) when the SaveNewAdInToServer do and work
        // Create a new publish in PublishList in to format.js of the new ad  
        //render.CreateOrUpdateAndPublish(ad, -1);
        // add the ads in to list of ads
        //listAds.push(ad);
        // clean the modal form
        //render.CleanModalForm();
    }
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that return the list of ads
    * of current user 
    */
    this.LoadAllAds = function(){
    	//alert("entrou para carregar os cards");
        // this request go at server and return the ads of current user 
        $.get('loadAllAds',{user_id:localStorage.userId},this.LoadAllAdsCallBack);
        slideList = [];
    }
    // get the ajax response of LoadAllAds
    this.LoadAllAdsCallBack = function (data, status) {
    publish1 = {
            title: "Publish",
            state: "publish-on",
            UploadImage: [],
            Edit: {
                cssId: "btn_edit",
                title: "Edit",
                flag: "fa fa-edit"
            },
            Delete: {
                cssId: "delete",
                title: "Delete",
                flag: "fa fa-trash"
            }
        }
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into variable list of ads wheather status is success 
        if (status == "success") {
            // update de list of the ads 
            render.listAds = data.Publisher.publishList;
            // empty the local list of publish in format
            app.Publisher.publishList = data.Publisher.publishList;
            let _size = render.listAds.length;
        	//alert(_size);
            //alert(render.listAds.length);
            //render = new Render(data);
            render.Publisher();
        }
    }
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the microservice that request the ad and insert
    *  return the update list of ads 
    * of current user 
    */
    this.SaveNewAdInToServer = function(ad){
        // this request go at server and add new ad and return the update list of ads
    	ad.userId = localStorage.userId;
    	$.post('saveNewAd', ad, this.SaveNewAdInToServerCallBack);
    }
    // get the ajax response of SaveNewAdInToServer
    this.SaveNewAdInToServerCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // add the data into variable list of ads wheather status is success 
        if (status == "success") {
            // update de list of the ads 
            listAds = data;
            let pos = listAds.length-1; 
            let ad = listAds[pos];
            // Create a new publish in PublishList in to format.js of the new ad  
            render.LoadAllAds();
            //render.CreateOrUpdateAndPublish(ad, -1);
            // clean the modal form
            render.CleanModalForm();
        }
    }
    // print all adds with alert()
    this.PrintAllAds = function () {
        let _size = listAds.length;
        for (let index = 0; index < _size; index++) {
            const element = listAds[index];
            alert(render.AdToString(element));
        }
    }
    // Create a new Publish or edit to Publish
    this.CreateOrUpdateAndPublish = function (ad, position) {
        publish1 = {
            title: "Publish",
            state: "publish-on",
            image: "",
            Edit: {
                cssId: "btn_edit",
                title: "Editar",
                flag: "fa fa-edit"
            },
            Delete: {
                cssId: "delete",
                title: "Deletar",
                flag: "fa fa-trash"
            }
        }
        if (ad.PublishNow)
            publish1.state = "publish-on";
        else
            publish1.state = "publish-off";
        if (ad.UploadImage.length > 0){
            publish1.image = ad.UploadImage[0];
			//console.log(ad.UploadImage[0]);
		}
        if (position >= 0 && position < app.Publisher.publishList.length) {
            app.Publisher.publishList[position] = publish1;
        } else {
            app.Publisher.publishList.push(publish1);
        }
        // render the publish component
        render.Publisher();
    }
    this.AdToString = function (ad) {
        return "titleOfAd:" + ad.TitleOfAd +
            "\nuploadImage[" + ad.UploadImage + "]" +
            "\noffer: " + ad.AddType.offer +
            "\nLooking for: " + ad.AddType.looking +
            "\nDescription: " + ad.Description +
            "\nTips: " + ad.Tips +
            "\nPrice: " + ad.Price +
            "\nNegociable: " + ad.Negotiable +
            "\nToChange: " + ad.ToChange +
            "\nToGiveAway: " + ad.ToGiveAwey +
            "\nNew: " + ad.New +
            "\nUsed: " + ad.Used +
            "\nCategorization: " + ad.Categorization +
            "\nSubcategory: " + ad.Subcategory +
            "\nZip: " + ad.Zip +
            "\nProvince: " + ad.Province +
            "\nStreet: " + ad.Street +
            "\nPreference: " + ad.Preference +
            "\nTip2: " + ad.Tips2 +
            "\nPhone: " + ad.Phone +
            "\nPhoneState: " + ad.PhoneState +
            "\nEmail: " + ad.Email +
            "\nEmailState: " + ad.EmailState +
            "\nPublishNow: " + ad.PublishNow +
            "\nName: " + ad.Name;
    }
    this.isMoney = function (value) {
        return $.isNumeric(value);
    }
    // use render the AddImageToSlide
    this.AddImageToSlide = function () {
        let img = "" + $("#img").val();
        img = img.split('\\');
        img = img[2];
        if (img == undefined) {
            // img fazia
            return;
        }
        render.MoveImageToserver($("#formUpload")[0]);
        //slideList.push(img);
        // comment the line bellow when the server ajax request are running
        //render.SlideRender();

    }
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the method that request the image and move to the folder
    *  return the urlBase of folder
    *  
    */
    this.convert = function (my) {

        var arrayBuffer = my;
        let array = new Uint8Array(arrayBuffer);
        let binaryString = String.fromCharCode.apply(null, array);

        //console.log(binaryString);
        //alert(binaryString);
        return binaryString;
    }
    this.MoveImageToserver = function (image) {
        // get the  image and move to server folder 
        // and return de urlBase of image ex: urlBase = "image/slideAds/"
        var imageFile = new FormData(image);
        //imageFile.append('image',imageFile.get('image'));
        
        //$.post('slide_upload', imageFile, this.MoveImageToserverCallBack);
        $.ajax({
        type:"POST",
        enctype:'multipart/form-data',
        url:"slide_upload",
        data:imageFile,
        processData:false,
        contentType:false,
        cache:false,
        success : this.MoveImageToserverCallBack,
    	error : function(e){
    		console.log(e.responseText);
    	}
        });
    }

    // get the ajax response of MoveImageToserver
    this.MoveImageToserverCallBack = function(data) {
    	//console.log("response data::" + JSON.stringify(data));
     	// this is the urlBase f image 
       	//slideList = null;
       	slideList.push(data);
       	//alert("response data::" + JSON.stringify(data));
       	// this render the slide
       	render.SlideRender();
   	}
   	this.EmptySlideList = function(){
        // get the  image and move to server folder 
        // and return de image that was deleted"
        //alert("entrou em zerar o slideList do server");
        $.post('slide_empty', null, this.EmptySlideListCallBack);
    }
    // get the ajax response of RemoveImageToserver
    this.EmptySlideListCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // remove into variable list of imageSlide wheather status is success 
        if (data != null) {
            // remove in local variable list of  image in to slide 
            slideList = [];
            //alert("devolveu dado");
            // render the slide
            render.SlideRender();
        }
    }
    /*
    * this represents how to process the output or events
    * get the output data and prepare it for the back end
    * use JQUERY-PoST AJAX
    * so the next team would only look at this method alone
    *  need to prepare the method that request the image and remove to the folder
    *  return the urlBase true or false, true if image was removed to success and false to else
    */
    this.RemoveImageToserver = function (image) {
        // get the  image and move to server folder 
        // and return de image that was deleted"
        console.log(image);
        $.post('slide_delete', {position:image}, this.RemoveImageToserverCallBack);
    }
    // get the ajax response of RemoveImageToserver
    this.RemoveImageToserverCallBack = function (data, status) {
        console.log("response data::" + data);
        console.log("response status::" + status);
        // remove into variable list of imageSlide wheather status is success 
        if (data != null) {
            // remove in local variable list of  image in to slide 
            slideList.splice(data, 1);
            // render the slide
            render.SlideRender();
        }
    }
    var urlBase = "img/backgrounds/";
    this.SlideRender = function () {
        var _sizeSlide = slideList.length;
        let indexOf = 0;
        $("#slideList").empty();
        if (_sizeSlide == 0) {
            $('#uploads').hide();
            return;
        }
        $('#uploads').show();
        for (let index = 0; index < _sizeSlide; index++) {
            const element = slideList[index];
            let span = $('<span>');
            let i = $('<i class="fa fa-trash">');
            span.append(i);
            indexOf = index + 1;
            let img = $('<img>');
            img.attr("src", "data:image/jpg;base64," + element.image);
            span.click(
                function () {
                    render.DeleteSlideImg(index);
                }
            );
            let divItem = $('<div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">');
            let divInner = $('<div class="delet">');
            if (index == 0) {
                divItem.addClass("active");
                actualActive = 1;
            }
            divInner.append(span);
            divInner.append(img);
            divItem.append(divInner);
            $("#slideList").append(divItem);

        }
        render.RowController(slideList.length);

    }
    $('#next').click(
        function () {
            // alert("slideListSize: "+slideList.length);
            render.NextRowhandler(slideList.length);
            // alert("actualActive: "+actualActive);
        }
    );
    $('#prev').click(
        function () {
            // alert("slideListSize: "+slideList.length);
            render.PrevRowhandler(slideList.length);
            // alert("actualActive: "+actualActive);
        }
    );
    this.NextRowhandler = function (_size) {
        actualActive++;
        render.RowController(_size);
    }
    this.PrevRowhandler = function (_size) {
        actualActive--;
        render.RowController(_size);
    }
    this.RowController = function (_sizeSlide) {
        if (actualActive == 1) {
            $("#prev").hide();
        }
        else {
            $("#prev").show();
        }
        if ((_sizeSlide - actualActive) < 4) {
            $("#next").hide();
        }
        else {
            $("#next").show();
        }
    }
    var actualActive = 0;
    var action = 0;
    this.DeleteSlideImg = function (index) {
        render.RemoveImageToserver(index);
        // comment this two lines bellow when the method that remove image in to Server just do and work 
        //slideList.splice(index, 1);
        render.SlideRender();
    }
    var indexEdit = -1;
    // replace
    // use render the Publisher
    this.Publisher = function () {
        var publisher = $('div.publisher');
        publisher.empty();
        var checkboxControl = null;
        let _size = app.Publisher.publishList.length;
        if (_size == 0) {
            $("div#panel-new").hide();
            return;
        }
        $("div#panel-new").show("slow");
        for (let index = 0; index < _size; index++) {
            const element = app.Publisher.publishList[index];
            let val = index + 1;
            var divPrincipal = $('<div class="col-lg-3" id="config_' + val + '">');
            var panel = $('<div class="panel panel-primary pn-b">');
            var panelBody = $('<div class="panel-body">');
            var picture = $('<div class="picture">');
            var image = $('<img alt="">');
            if(element.UploadImage!=null){
            	image.attr("src", "data:image/jpg;base64,"+element.UploadImage[0]);
            }else{
            	image.attr("src", "");
            }
            var tambler = $('<div>');
            tambler.addClass(element.state);
            tambler.attr("id", "state_" + val);
            picture.append(image);
            picture.append(tambler);
            panelBody.append(picture);
            panel.append(panelBody);
            var footer = $('<div class="panel-footer">');
            var row = $('<div class="row">');
            var column = $('<div class="col-md-12">');
            var switches = $('<div class="custom-control custom-switch">');
            switches.attr("id",index);
            if (element.state == "publish-on") {
                checkboxControl = $('<input type="checkbox" class="custom-control-input" checked>');

            } else {
                checkboxControl = $('<input type="checkbox" class="custom-control-input">');
            }
            checkboxControl.attr("id", element.id);
            checkboxControl.click(
                function () {
                     let myId = $('div#'+index+' input.custom-control-input').attr('id');
                     //alert("clicou :" +myId);
                    if (element.state == "publish-off") {
                        //estava off
                        element.state = "publish-on";
                        let divState = $("#state_" + val);
                        divState.attr("class", element.state);
                        render.ChangeThePublishNow(true, myId);
                    } else {
                        // estava on
                        element.state = "publish-off";
                        let divState = $("#state_" + val);
                        divState.attr("class", element.state);
                        render.ChangeThePublishNow(false, myId);
                    }
                }
            );
            var checkBoxLabel = $('<label class="custom-control-label">');
            checkBoxLabel.attr("for", element.id);
            checkBoxLabel.text(element.title);
            switches.append(checkboxControl);
            switches.append(checkBoxLabel);
            column.append(switches);
            row.append(column);
            footer.append(row);
            var row2 = $('<div class="row">');
            var column2 = $('<div class="col-md-6">');
            var btnEdit = $('<button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#add">');
            var iconEdit = $('<i>');
            var column3 = $('<div class="col-md-6 text-right">');
            var btnDelete = $(' <button class="btn btn-danger btn-sm">');
            var iconDelete = $('<i>');
            iconDelete.addClass(element.Delete.flag);
            iconEdit.addClass(element.Edit.flag)
            btnDelete.attr('id', element.Delete.cssId + "_" + val);
            btnEdit.attr('id', element.Edit.cssId + "_" + val);
            btnDelete.click(function () {
                // let currentPublisher = $("div#config_" + val);
                let cardId = $('div#'+index+' input.custom-control-input').attr('id');
                let position = val - 1;
                render.DeletePublish(position,cardId);
                // currentPublisher.hide();
            });
            btnEdit.click(
                function () {
                    let position = val - 1;
                	let cardId = $('div#'+index+' input.custom-control-input').attr('id');
                    render.EditYourAdd(position,cardId);
                    indexEdit = position;
                }
            );
            btnDelete.attr('title', element.Delete.title);
            btnEdit.attr('title', element.Edit.title);
            btnEdit.append(iconEdit);
            column2.append(btnEdit);
            btnDelete.append(iconDelete);
            column3.append(btnDelete);
            row2.append(column2);
            row2.append(column3);
            footer.append(row2);
            panel.append(footer);
            divPrincipal.append(panel);
            publisher.append(divPrincipal);
        }
    };
    var idCard = 0;
    this.ChangeThePublishNow = function (state, position) {
        //listAds[position].PublishNow = state;
        // go at server and update the ad
        //alert(app.Publisher.publishList.length); 
        render.SaveEditAdInToServer(position,state);
    }
    this.DeletePublish = function (position,cardId) {
        // get the ad in the list of ads 
        let ad = listAds[position]; 
        // go at the server and remove the ad
        render.DeletePublishOnTheServer(cardId);
    }
    var f = 0;
    $("#finishEdit").click(
        function () {
            render.FinishUpdateAd(indexEdit);
        }
    );
    /* new code finish*/

	/**
	 * ---remarks from:  Team Finland and Stockholm ------------
	 * Dear Mr. Mabiala,
	 * due to the incompatibility with E11 browser, we quickly recreated the
	 * category container. We therefore used native js code instead of JQuery
	 * we will  then apply JQuery afterwards.
	 * 
	 * ---------- Team Luanda --------------
	 * 			Carlos e Samuel
	 * Eis a seguir as mudancas que outro team fez, 3 funcoes foram criadas para
	 * dar suporte a div das categorias
	 * 
	 * funcao: fetchCategories
	 * enviar ao back-end os dados da categoria selecionada 
	 * 
	 * funcao:categoraListener 
	 * faz o hide and show das subcategorias
	 * funcao: CategoryContainer
	 * cria o container das categorias
	 */


	// mostra a lista de todas subcategorias da categoria selecionada
	this.fetchCategories = function(e){

		let selectedCategory = e.currentTarget.category;
		
		//window.location.href = "query_categories?type="+selectedCategory;
		var app = Application;
		var render = new Render(app);

		render.CategoriesContainerRender(CategoriesContainer.list[0].items,selectedCategory);
		
	};

	
	this.categoraListener = function (e){

		$("#"+e.currentTarget.target).slideToggle();

	}
	// subcategory listener
	this.fechSubcategory = function(e){

		let selectedCategory = e.currentTarget.category;
		let selectedSubcategory = e.currentTarget.subcategory;
		
	
		//window.location.href = "query_subCategory_all?type="+selectedCategory+"&sub="+selectedSubcategory;
		render.CategoriesContainerRender(CategoriesContainer.list[0].items,selectedCategory+"-"+selectedSubcategory);
	}

	this.CategoryContainer = function () {

		$("#treeview_container").html();
		var titleCategory = $(".pn-s .panel-heading");

		titleCategory.text(app.CategoryContainer.text);

		for (var index = 0; index < app.CategoryContainer.categories.length; index++) {

			var categoryUL = document.createElement("ul");
			var category = app.CategoryContainer.categories[index];
			var categoryLi = document.createElement("li");
			categoryLi.setAttribute('class',"list-group-item");

			// 
			let all = document.createElement("span");
			all.addEventListener('click', this.fetchCategories);
			all.setAttribute('style',"float:right; font-size:5");
			all.setAttribute('class',"fa fa-list-ul btn-outline-secondary btn-sm");
			all.category = category.text;
			categoryLi.appendChild(all);


			var categoryLabel = document.createElement("label");
			categoryLabel.addEventListener('click',this.categoraListener);
			categoryLabel.target = category.text;
			categoryLabel.appendChild(document.createTextNode(" "+category.text));
			categoryLabel.setAttribute('style',"background-color: #333; color:white; height:20px;");
			categoryLabel.setAttribute('class',"container-fluid");
			categoryLi.appendChild(categoryLabel);
			var itemUl = document.createElement("ul");
			itemUl.setAttribute('id',category.text);

			for (var i = 0; i <  category.Entries.length; i++) {

				var item = category.Entries[i];
				item = item.CategoryItem1;
				console.log(JSON.stringify("item:: "+item));
				var itemLi = document.createElement("li");
				itemLi.setAttribute('style',"margin-left:10%;");
				var a = document.createElement("a");
				a.setAttribute('href',"#");
				a.setAttribute('style',"color:black;font-size:14px");
				a.appendChild(document.createTextNode(item.text));
				a.category = category.text;
				a.subcategory = item.text;
				a.addEventListener('click', this.fechSubcategory);
				itemLi.appendChild(a);
				itemUl.appendChild(itemLi);

			}

			categoryLi.appendChild(itemUl);
			categoryUL.appendChild(categoryLi);
			$("#treeview_container").append(categoryUL);
		}
	};



	// render the eventsHandlers
	this.firstEventHandler = function () {
		var row = $('#' + app.NewEntriesContainer.cssId);
		var list = $("#pagination");
		var limitCards = 4;
		if (currentPagination <= 1) {
			return;
		}
		render.DesactivePage();
		row.empty();
		currentPagination = 1;
		list.empty();
		var _size = app.NewEntriesContainer.Entries.length;
		for (let index = 0; index < _size && index < 4; index++) {
			const element = app.NewEntriesContainer.Entries[index];
			var cardColumn = $('<div class="col-md-3 old-card">');
			var singleBotton = $('<div class="single-bottom mb-35">');
			var image = $('<img>');
			image.attr("src", "data:image/jpg;base64,"+element.image);
			singleBotton.append(image);
			var bottonCap = $('<div class="trend-bottom-cap">');
			bottonCap.append($('<h6>').text(element.header));
			bottonCap.append($('<span>').text(element.description));
			bottonCap.append($('<hr>'));
			var footer = $('<a>');
			footer.append($('<i>').html(element.Footer.price));
			footer.attr("href", element.Footer.link);
			bottonCap.append(footer);
			singleBotton.append(bottonCap);
			cardColumn.append(singleBotton);
			row.append(cardColumn);
			limitCards--;
			//console.log(row);
		}
		// adding ads
		//alert("qtd cards - "+_size);
		let listAds = render.Ads(limitCards);
		render.renderAds(listAds, row,limitCards);
		// currentPagination 
		currentPagination = 1;
		render.page(list, "");
		render.ActivePage();
		//$("new-card").append(list);
		// show the currentPagination
		//alert("currentPagination: " + currentPagination);
	};
	this.DisableControll = function (first, prev, next, last) {
		if (currentPagination == Math.ceil(app.NewEntriesContainer.Entries.length / 4)) {
			//alert("É o Último");
			$("#next").attr("class", "page-item next disabled");
			$("#last").attr("class", "page-item last disabled");
			$("#first").attr("class", "page-item first");
			$("#prev").attr("class", "page-item prev");
		} else if (currentPagination <= 1) {
			//alert("É o primeiro");
			first.addClass("disabled");
			prev.addClass("disabled");
			$("#next").attr("class", "page-item next");
			$("#last").attr("class", "page-item last");
		} else {
			//alert("não é primeiro nem o último")

			$("#first").attr("class", "page-item first");
			$("#prev").attr("class", "page-item prev");
			$("#next").attr("class", "page-item next");
			$("#last").attr("class", "page-item last");
		}
	};
	this.prevEventHandler = function () {
		// show the currentPagination
		//alert("currentPagination: " + currentPagination);
		var row = $('#' + app.NewEntriesContainer.cssId);
		var list = $("#pagination");
		let id = null;
		var limitCards = 4;
		if (currentPagination <= 1) {
			return;
		} else {
			render.DesactivePage();
			id = currentPagination - 1;
		}
		row.empty();
		//alert(id);
		list.empty();
		let last = id * 4;
		let init = last - 4;
		var _size_cards = app.NewEntriesContainer.Entries.length;
		//alert("qtd cards - " + _size_cards);
		if (last > _size_cards) {
			for (let i = init; i < _size_cards; i++) {
				const element = app.NewEntriesContainer.Entries[i];
				var cardColumn = $('<div class="col-md-3 old-card">');
				var singleBotton = $('<div class="single-bottom mb-35">');
				var image = $('<img>');
				image.attr("src", "data:image/jpg;base64,"+element.image);
				singleBotton.append(image);
				var bottonCap = $('<div class="trend-bottom-cap">');
				bottonCap.append($('<h6>').text(element.header));
				bottonCap.append($('<span>').text(element.description));
				bottonCap.append($('<hr>'));
				var footer = $('<a>');
				footer.append($('<i>').html(element.Footer.price));
				footer.attr("href", element.Footer.link);
				bottonCap.append(footer);
				singleBotton.append(bottonCap);
				cardColumn.append(singleBotton);
				row.append(cardColumn);
				limitCards--;
				//console.log(row);
			}
			// adding adsrender
			let listAds = render.Ads(limitCards);
			render.renderAds(listAds, row,limitCards);
		} else {
			for (let i = init; i < last; i++) {
				const element = app.NewEntriesContainer.Entries[i];
				var cardColumn = $('<div class="col-md-3 old-card">');
				var singleBotton = $('<div class="single-bottom mb-35">');
				var image = $('<img>');
				image.attr("src", element.image);
				singleBotton.append(image);
				var bottonCap = $('<div class="trend-bottom-cap">');
				bottonCap.append($('<h6>').text(element.header));
				bottonCap.append($('<span>').text(element.description));
				bottonCap.append($('<hr>'));
				var footer = $('<a>');
				footer.append($('<i>').html(element.Footer.price));
				footer.attr("href", element.Footer.link);
				bottonCap.append(footer);
				singleBotton.append(bottonCap);
				cardColumn.append(singleBotton);
				row.append(cardColumn);
				//console.log(row);
			}
		}
		// currentPagination 
		currentPagination = id;
		render.page(list, "");
		render.ActivePage();
		// show the currentPagination
		//alert("currentPagination: " + currentPagination);
	};
	this.nextEventHandler = function () {
		// show the currentPagination
		//alert("currentPagination: " + currentPagination);
		var row = $('#' + app.NewEntriesContainer.cssId);
		var list = $("#pagination");
		var limitCards = 4;
		let id = null;
		if (currentPagination == Math.ceil(app.NewEntriesContainer.Entries.length / 4)) {
			return;
		} else {
			render.DesactivePage();
			id = currentPagination + 1;
		}
		row.empty();
		list.empty();
		//alert(id);
		let last = id * 4;
		let init = last - 4;
		var _size_cards = app.NewEntriesContainer.Entries.length;
		//alert("qtd cards - " + _size_cards);
		if (last > _size_cards) {
			for (let i = init; i < _size_cards; i++) {
				const element = app.NewEntriesContainer.Entries[i];
				var cardColumn = $('<div class="col-md-3 old-card">');
				var singleBotton = $('<div class="single-bottom mb-35">');
				var image = $('<img>');
				image.attr("src", "data:image/jpg;base64,"+element.image);
				singleBotton.append(image);
				var bottonCap = $('<div class="trend-bottom-cap">');
				bottonCap.append($('<h6>').text(element.header));
				bottonCap.append($('<span>').text(element.description));
				bottonCap.append($('<hr>'));
				var footer = $('<a>');
				footer.append($('<i>').html(element.Footer.price));
				footer.attr("href", element.Footer.link);
				bottonCap.append(footer);
				singleBotton.append(bottonCap);
				cardColumn.append(singleBotton);
				row.append(cardColumn);
				limitCards--;
				//console.log(row);
			}
			// adding ads
			let listAds = render.Ads(limitCards);
			render.renderAds(listAds, row,limitCards);
		} else {
			for (let i = init; i < last; i++) {
				const element = app.NewEntriesContainer.Entries[i];
				var cardColumn = $('<div class="col-md-3 old-card">');
				var singleBotton = $('<div class="single-bottom mb-35">');
				var image = $('<img>');
				image.attr("src", "data:image/jpg;base64,"+element.image);
				singleBotton.append(image);
				var bottonCap = $('<div class="trend-bottom-cap">');
				bottonCap.append($('<h6>').text(element.header));
				bottonCap.append($('<span>').text(element.description));
				bottonCap.append($('<hr>'));
				var footer = $('<a>');
				footer.append($('<i>').html(element.Footer.price));
				footer.attr("href", element.Footer.link);
				bottonCap.append(footer);
				singleBotton.append(bottonCap);
				cardColumn.append(singleBotton);
				row.append(cardColumn);
				//console.log(row);
			}
		}
		// currentPagination 
		currentPagination = id;
		render.page(list, "");
		render.ActivePage();
		// show the currentPagination
		//alert("currentPagination: " + currentPagination);

	};
	this.lastEventHandler = function () {
		var row = $('#' + app.NewEntriesContainer.cssId);
		var list = $("#pagination");
		var limitCards = 4;
		render.DesactivePage();
		let long = Math.ceil(app.NewEntriesContainer.Entries.length / 4);
		if (long == currentPagination) {
			return;
		}
		row.empty();
		list.empty();
		var _size_cards = app.NewEntriesContainer.Entries.length;
		//alert("qtd cards - " + _size_cards);
		let last = long * 4;
		let init = last - 4;
		if (last > _size_cards) {
			for (let i = init; i < _size_cards; i++) {
				const element = app.NewEntriesContainer.Entries[i];
				var cardColumn = $('<div class="col-md-3 old-card">');
				var singleBotton = $('<div class="single-bottom mb-35">');
				var image = $('<img>');
				image.attr("src", "data:image/jpg;base64,"+element.image);
				singleBotton.append(image);
				var bottonCap = $('<div class="trend-bottom-cap">');
				bottonCap.append($('<h6>').text(element.header));
				bottonCap.append($('<span>').text(element.description));
				bottonCap.append($('<hr>'));
				var footer = $('<a>');
				footer.append($('<i>').html(element.Footer.price));
				footer.attr("href", element.Footer.link);
				bottonCap.append(footer);
				singleBotton.append(bottonCap);
				cardColumn.append(singleBotton);
				row.append(cardColumn);
				limitCards--;
				//console.log(row);
			}
			// adding ads
			let listAds = render.Ads(limitCards);
			render.renderAds(listAds, row,limitCards);
		} else {
			for (let i = init; i < last; i++) {
				const element = app.NewEntriesContainer.Entries[i];
				var cardColumn = $('<div class="col-md-3 old-card">');
				var singleBotton = $('<div class="single-bottom mb-35">');
				var image = $('<img>');
				image.attr("src", "data:image/jpg;base64,"+element.image);
				singleBotton.append(image);
				var bottonCap = $('<div class="trend-bottom-cap">');
				bottonCap.append($('<h6>').text(element.header));
				bottonCap.append($('<span>').text(element.description));
				bottonCap.append($('<hr>'));
				var footer = $('<a>');
				footer.append($('<i>').html(element.Footer.price));
				footer.attr("href", element.Footer.link);
				bottonCap.append(footer);
				singleBotton.append(bottonCap);
				cardColumn.append(singleBotton);
				row.append(cardColumn);
				//console.log(row);
			}
		}
		// currentPagination 
		if (long == 0) {
			currentPagination = 0;
		} else {
			currentPagination = long;
		}
		render.page(list, "");
		render.ActivePage();
		// show the currentPagination
		//alert("currentPagination: " + currentPagination);
	};
	this.showMoreEventHandler = function () {
		var row = $('#' + app.OldEntriesContainer.cssId);
		var _size = app.OldEntriesContainer.Entries.length;
		row.empty();
		if (showMoreState) {
			for (let index = 0; index < _size; index++) {
				const element = app.OldEntriesContainer.Entries[index];
				var cardColumn = $('<div class="col-md-3 old-card">');
				var singleBotton = $('<div class="single-bottom mb-35">');
				var image = $('<img>');
				image.attr("src", "data:image/jpg;base64,"+element.image);
				singleBotton.append(image);
				var bottonCap = $('<div class="trend-bottom-cap">');
				bottonCap.append($('<h6>').text(element.header));
				bottonCap.append($('<span>').text(element.description));
				bottonCap.append($('<hr>'));
				var footer = $('<a>');
				footer.append($('<i>').html(element.Footer.price));
				footer.attr("href", element.Footer.link);
				bottonCap.append(footer);
				singleBotton.append(bottonCap);
				cardColumn.append(singleBotton);
				row.append(cardColumn);
				//console.log(row);
			}
			$('.show-more').html("&#9650;");
			showMoreState = false;
		} else {
			for (let index = 0; index < _size && index < 4; index++) {
				const element = app.OldEntriesContainer.Entries[index];
				var cardColumn = $('<div class="col-md-3 old-card">');
				var singleBotton = $('<div class="single-bottom mb-35">');
				var image = $('<img>');
				image.attr("src", "data:image/jpg;base64,"+element.image);
				singleBotton.append(image);
				var bottonCap = $('<div class="trend-bottom-cap">');
				bottonCap.append($('<h6>').text(element.header));
				bottonCap.append($('<span>').text(element.description));
				bottonCap.append($('<hr>'));
				var footer = $('<a>');
				footer.append($('<i>').html(element.Footer.price));
				footer.attr("href", element.Footer.link);
				bottonCap.append(footer);
				singleBotton.append(bottonCap);
				cardColumn.append(singleBotton);
				row.append(cardColumn);
				//console.log(row);
			}
			showMoreValue = $('.show-more').text(app.OldEntriesContainer.showMore);
			showMoreState = true;

		}
	};
	// new code
	 // new user render the new-user
    this.NewUser = function () {
        var userImage = null;
        var userLink = null;
        var column = null;
        var group = null;
        var userName = null;
        var name = null;
        var profile  = null;
        var setting = null;
        userLink = $("<a>");
        userImage = $("<img>");
        userImage.attr("id",app.NewUser.imageCssId);
        userName = $("<h6>");
        name = $("<span>");
        name.attr("id",app.NewUser.cssNameId);
        profile = $("<a>");
        setting = $("<span>");
        //setting.addClass("btn btn-default btn-xs");
        setting.attr("id","user-settings");
        setting.html("&#9874; "+app.NewUser.profile);
        setting.css("font-size","12px;");
        setting.css("color","black;");
        profile.append(setting);
        profile.css("font-size","5px;");
        profile.addClass("btn btn-default active btn-xs");
        name.html(app.NewUser.name);
		name.attr("id", app.NewUser.nameCssId);
		userName.append(name);
		userName.append("<br>");
		userName.append("<hr>");
		userName.append(profile);
		
        
        // render the image of user 
        userImage.attr("src", app.NewUser.image);
        // render the link of user 
        userLink.attr("href", app.NewUser.link);
        userLink.append(userImage);
        $("#new-user").append(userLink);
        $("#new-user").append(userName);
        
    };
    // render the data user login
    this.dataUserLogin = function(){
    	if(localStorage.userId!=null){
		  	$("#login").css("display","none");
		  	$("#sign-up").css("display","none");
			$("#link-id").css("display","block");
		  	var userSettings = $("#user-settings");
		  	var userId = localStorage.userId;
		 	var username = localStorage.username;
		 	var userphoto = localStorage.userphoto;
		 	//console.log(userphoto);
		 	//$("#user-link-img").attr("src","img/uploads/user.jpg");
		 	$("#user-link-img").attr("src","data:image/jpg;base64,"+userphoto);
		 	$("#user-name-id").html(username);
		 	$("#new-card").css("display","none");
			$(".newEntriesContainer").css("display","none");
			$("#middle_colapse .panel-primary").first().css("display","none");
			
		}
    }
	// render the user data 
	this.UserData = function () {
		var card = localStorage.getItem("singleCard");
	  	let myCard = JSON.parse(card);
		//alert(myCard.user.name);
		var userName = null;
		var cellphone = null;
		var activeSince = null;
		var i = null;
		var span = null;
		userName = $("<h4>");
		cellphone = $("<h4>");;
		activesince = $("<h4>");
		if(myCard.user.name!=null){
			// render the name of user
			i = $("<i class='fa fa-user'> ")
			span = $("<span class='span'> ");
			span.text(" " + myCard.user.name);
			userName.append(i);
			userName.append(span);
			$(".user-data").append(userName);
		}
		if(myCard.user.package!="Basic"){
			if(myCard.user.telefone!=null && myCard.user.telefone_visible==true){
				// render the cellphone of user 
				i = $("<i class='fa fa-phone'> ")
				span = $("<span class='span'> ");
				span.text(" " + myCard.user.telefone);
				cellphone.append(i);
				cellphone.append(span);
				$(".user-data").append(cellphone);
			}
			if(myCard.user.email!=null && myCard.user.email_visible==true){
				// render the cellphone of user 
				i = $("<i class='fa fa-envelope'> ")
				span = $("<span class='span'> ");
				span.text(" " + myCard.user.email);
				cellphone.append(i);
				cellphone.append(span);
				$(".user-data").append(cellphone);
			}
		}
		if(myCard.user.active_since!=null){
			// render the active since
			i = $("<span class='text-right'> ")
			span = $("<span class='span'>");
			i.text("ACTIVE SINCE ");
			span.text(" " + myCard.user.active_since);
			activesince.append(i);
			activesince.append(span);
			$(".user-data").append(activesince);
		}
		console.log($(".user-data"));
	};
	 // render the AdvertisementContainer
    this.AdvertisementContainer = function () {
        var advertisementImage = null;
        var advertisementLink = null;
        var column = null;
        var group = null;
        advertisementLink = $("<a>");;
        advertisementImage = $("<img>");
        // render the image of user 
        advertisementImage.attr("src", app.AdvertisementContainer.Advertisement.image);
        // render the link of user 
        advertisementLink.attr("href", app.AdvertisementContainer.Advertisement.link);
        advertisementLink.append(advertisementImage);
        $("#advertisement-new").append(advertisementLink);
        console.log($("#advertisement-new"));
    };
	// render the message component
	this.Message = function () {
		if(localStorage.userId!=null){
			
			var card = localStorage.getItem("singleCard");
		  	let myCard = JSON.parse(card);
			//alert(myCard.user.name);
			
			let v = false;
			myCard.user.feactures.every(
			element => {
	   				//alert(element);
	   				if(element.includes("Receive message")==true){
	   					v = true;
	   					return false;
	   				}
	   				return true;
	    		}
			);
			var message = $("#message");
			message.attr('style',"display:none;");
			//alert(v);
			if(v==true){
				var divForm = $("<div class='form'>");
				var divFormGroup = $("<div class='form-group'>");
				var legend = $("<legend>");
				var label = $("<label for='name'>");
				var fildId = $("<input type='hidden' class='form-control' id='userId'>");
				fildId.val(localStorage.userId);
				var fild = $("<input type='text' class='form-control' id='name'>");
				fild.val(localStorage.username);
				label.text(app.Message.filds[0]);
				legend.text(app.Message.text);
				message.append(legend);
				divFormGroup.append(label);
				divFormGroup.append(fild);
				fild.attr('readonly','true');
				divForm.append(divFormGroup);
				label = $("<label for='phone'>");
				fild = $("<input type='text' class='form-control' id='phone'>");
				if(localStorage.usertelefone!="null"){
					fild.val(localStorage.usertelefone);
					fild.attr('readonly','true');
				}else{
					fild.val();
					fild.attr('readonly','true');
				}
				divFormGroup = $("<div class='form-group'>");
				label.text(app.Message.filds[1]);
				divFormGroup.append(label);
				divFormGroup.append(fild);
				divForm.append(divFormGroup);
				fild = $('<textarea class="form-control" id="description" rows="3">');
				fild.attr("placeholder", app.Message.filds[2]);
				divFormGroup = $("<div class='form-group'>");
				divFormGroup.append(fild);
				divForm.append(divFormGroup);
				divFormGroup = $("<div class='bt'>");
				fild = $('<button type="submit" id="send" class="btn btn-primary">');
				let i = $('<i class="fa fa-envelope">');
				i.text("   " + app.Message.button.text);
				fild.append(i);
				fild.click(this.SendMessage);
				divFormGroup.append(fild);
				divForm.append(divFormGroup);
				message.append(divForm);
				message.attr('style',"");
			}
		}
	};
	// click of the send button 
	this.SendMessage = function () {
		var name = null;
		var phone = null;
		var description = null;
		name = $("#name");
		phone = $("#phone");
		description = $("#description");
		alert("this send of name: " + name.val() + " with phone: " + phone.val() + " and description: " + description.val());
	};
	// render the links 
	this.Links = function () {
		var div = $("div.links");
		var link = $("<a class='text-left'>");
		link.text(app.Links.share.text);
		link.attr("href", app.Links.share.link);
		div.append(link);
		var link = $("<a class='text-right'>");
		link.text(app.Links.follow.text);
		link.attr("href", app.Links.follow.link);
		div.append(link);
		div.attr('style',"display:none;");
	};
	this.Slider = function () {
		var carousel = $('#carouselExampleIndicators');
		var ol = $('<ol class="carousel-indicators">');
		var divGalery = $('.carousel-inner');
		var li = null;
		var lislide = null;
		var _size = app.Slider.galery.length;
		for (let index = 0; index < _size; index++) {
			const element = app.Slider.galery[index];
			let capa = $('<div class="capa">');
			let img = $('<img>');
			let link = $('<a data-size="1200x800">');
			link.attr("href", element.img);
			link.attr("title", app.Slider.title);
			img.attr("src", element.img);
			link.append(img);
			link.append(capa);

			if (index == 0) {
				lislide = $('<li class="swiper-slide carousel-item active">');
				li = $('<li data-target="#carouselExampleIndicators" class="active">');
				li.attr("data-slide-to",index);
			}
			else {
				li = $('<li data-target="#carouselExampleIndicators" >');
				lislide = $('<li class="swiper-slide carousel-item">');
				li.attr("data-slide-to",index);
			}
			lislide.append(link);
			ol.append(li);
			divGalery.append(lislide);
		}
		carousel.prepend(ol);
		var descriptionComponet = $("#desc");
		let labelDesc = $("<label>");
		let textAreaComponet = $('<textarea class="form-control" id="desc" rows="10" readonly>');
		textAreaComponet.text(app.Slider.Description.text);
		labelDesc.text(app.Slider.Description.title);
		descriptionComponet.append(labelDesc);
		descriptionComponet.append(textAreaComponet);
	};
	
	
	// dummy data
	 CategoriesContainer = {
		        cssId: "categorieContainer",
		        list: [
		            cars = {
		                text: "Carros",
		                items: [
		                    {
		                        header: "I10 yundai F2",
		                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    },
		                    {
		                        header: "I10 yundai F2",
		                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    }, {
		                        header: "I10 yundai F2",
		                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    },
		                    {
		                        header: "I10 yundai Q11",
		                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    },
		                    {
		                        header: "I10 yundai Q1",
		                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    }, {
		                        header: "I10 yundai Q12",
		                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    }, {
		                        header: "I10 yundai A12",
		                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    },
		                    {
		                        header: "I20 yundai A1",
		                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    },
		                    {
		                        header: "I20 yundai F1",
		                        description: "Get the Illusion of Fuller Lashes by “Mabiala.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    }
		                ]
		            },
		            bike = {
		                text: "Bicicletas",
		                items: [
		                    {
		                        header: "Rt50 bike j2",
		                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    },
		                    {
		                        header: "Rt50 bike v2",
		                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    },
		                    {
		                        header: "Rt50 bike u2",
		                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    },
		                    {
		                        header: "Renock bike j2",
		                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
		                        image: "img/whatNews1.jpg",
		                        Footer: {
		                            price: "$ 5000",
		                            link: "#"
		                        }
		                    }
		                ]
		            }
		        ],
		        showMore: " Show more entries"
		    }
	// user render the CategoriesContainer
   
    this.clean_the_row = function () {
		 
		 $('#old-card').remove();
	     $("#new-card").remove();
	     $(".slideContent").remove();
	     $('#desc').remove();
	     $(".row .col-md-5").remove();
	     $('.oldEntriesContainer').remove();
	     $(".newEntriesContainer").remove();
	     $(".categorieContainer").remove();
	     $("#category-card").remove();
	     $(".preview-message").fadeOut("slow");
	     $(".preview-message").remove();
    }
    // user render the CategoriesContainerRender
    this.CategoriesContainerRender = function (list, title) {
        // variables thst store the HTML format tag
        var categoriesContainer = $('<div>');
        categoriesContainer.addClass(app.CategoriesContainer.cssId);
        var panel = $('<div class="panel panel-default">');
        var panelHeading = $('<div class="panel-heading">');
        // changed
        this.clean_the_row();
        var _size = list.length;
        if (_size == 0) {
            return;
        }
        var count=1;
        this.clean_the_row();
        var textValue = $("<span>");
        // link to categoriesContainer (init update)
        var linkValue = $("<a>");
        linkValue.text(title);
        textValue.append(linkValue);
        // end update
        panelHeading.append(textValue);
        panel.append(panelHeading);
        var oldCard = $('<div id="category-card">')
        var row = $('<div class="row">');
        row.attr("id", app.CategoriesContainer.cssId);
        categoriesContainer.append(panel);
        $("#middle_colapse").append(categoriesContainer);
        for (let index = 0; index < _size && index < 4; index++) {
            const element = list[index];
            var cardColumn = $('<div class="col-md-3 old-card">');
            
            /**
            cardColumn.click(this.cardListener);
            cardColumn.prop("ref",element.id);
			cardColumn.prop("type","NC");
			**/
			
            var singleBotton = $('<div class="single-bottom mb-35">');
            var image = $('<img>');
            image.attr("src", element.image);
            singleBotton.append(image);
            var bottonCap = $('<div class="trend-bottom-cap">');
            bottonCap.append($('<h6>').text(element.header));
            bottonCap.append($('<span>').text(element.description));
            bottonCap.append($('<hr>'));
            var footer = $('<a>');
            footer.append($('<i>').html(element.Footer.price));
            footer.attr("href", element.Footer.link);
            bottonCap.append(footer);
            singleBotton.append(bottonCap);
            cardColumn.append(singleBotton);
            row.append(cardColumn);
            count++;
        }
        
        var showMore = $('<span class="show-more fa fa-plus-circle" id="show-more">');
        showMoreValue = $('<i>');
        showMoreValue.text(app.CategoriesContainer.showMore);
        showMore.append(showMoreValue);
        showMore.click(function(){
            render.showMoreCategoriesEventHandler(list);
        });
        oldCard.append(row);
        
        if (count <= 4) {
        	
            showMore.hide();
            
        } else {
        	
            showMore.show();
        }
        oldCard.append(showMore);
        $("#middle_colapse").append(oldCard);
        console.log(oldCard);
        console.log($("#middle_colapse"));

    };

    this.showMoreCategoriesEventHandler = function(list) {
        var row = $('#' + app.CategoriesContainer.cssId);
        //alert("clicou");
        //alert(currentCategory);
        var _size = list.length;
        row.empty();
        if (showMoreState) {
            for (let index = 0; index < _size; index++) {
                const element = list[index];
                var cardColumn = $('<div class="col-md-3 old-card">');
                
                cardColumn.click(this.cardListener);
                var singleBotton = $('<div class="single-bottom mb-35">');
                var image = $('<img>');
                image.attr("src", element.image);
                singleBotton.append(image);
                var bottonCap = $('<div class="trend-bottom-cap">');
                bottonCap.append($('<h6>').text(element.header));
                bottonCap.append($('<span>').text(element.description));
                bottonCap.append($('<hr>'));
                var footer = $('<a>');
                footer.append($('<i>').html(element.Footer.price));
                footer.attr("href", element.Footer.link);
                bottonCap.append(footer);
                singleBotton.append(bottonCap);
                cardColumn.append(singleBotton);
                row.append(cardColumn);
                //console.log(row);
            }
            $('#show-more').text("back to default (hide)");
            $('#show-more').attr("class", " show-more fa fa-mines-circle");
            showMoreState = false;
        } else {
            for (let index = 0; index < _size && index < 4; index++) {
                const element = list[index];
                var cardColumn = $('<div class="col-md-3 old-card">');
                cardColumn.click(this.cardListener);
                var singleBotton = $('<div class="single-bottom mb-35">');
                var image = $('<img>');
                image.attr("src", element.image);
                singleBotton.append(image);
                var bottonCap = $('<div class="trend-bottom-cap">');
                bottonCap.append($('<h6>').text(element.header));
                bottonCap.append($('<span>').text(element.description));
                bottonCap.append($('<hr>'));
                var footer = $('<a>');
                footer.append($('<i>').html(element.Footer.price));
                footer.attr("href", element.Footer.link);
                bottonCap.append(footer);
                singleBotton.append(bottonCap);
                cardColumn.append(singleBotton);
                row.append(cardColumn);
                //console.log(row);
            }
            showMoreValue = $('.show-more').text(app.CategoriesContainer.showMore);
            $('.show-more').addClass("fa fa-mines-circle");
            showMoreState = true;
        }
    };
    
}


var app = Application;
//Instantiate the render constructor  pulling default definitions
var render = new Render(app);
render.Base();
render.HeaderContainer();
render.UserContainer();
render.FooterContainer();

//call render of message form
//render.Message();
//call the render of ads link
//render.Links();
//render de slide 
//render.Slider();
//render.UserData();
// render de data user login
//render.dataUserLogin();
//call render of the advertisement 
render.AdvertisementContainer();
render.NewUser();
// render create new ad
render.CreateNewAd();
// render create new ad
render.CreateYourAdd();
// render Message Componet
render.MessageComponentRender();
// use render the Publisher
render.Publisher();
// use render the LoadAllAds instead of Publisher in render
//render.LoadAllAds();





$.get("app_main_app", function(application, status){

	var render = new Render(application);

	render.AdContainer();
	//render.NewEntriesContainer();
	//render.OldEntriesContainer();
	render.SearchContainer();
	//render.CreateNewAd();
	render.CategoryContainer();
});

function setRandomAd(){

	$.get("app_random_ad", function(ad, status){

		var adContainer = $('.adContainer');
		//console.log("ad: "+ JSON.stringify(ad));
		//alert(ad.image);
		adContainer.attr("src","data:image/jpg;base64,"+ad.image);

	});
}

var randomAd = setInterval(setRandomAd, 10000);


	




