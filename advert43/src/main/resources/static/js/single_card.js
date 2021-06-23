

var app = Application;
//Instantiate the render constructor  pulling default definitions
var render = new Render(app); 
//render.clean_the_row();
function setSingleCardInfo(){
	
	  	//var userSettings = $("#user-settings");
	  	var card = localStorage.getItem("singleCard");
	  	
	 	//console.log(userphoto);
		Slider(card);
		
	  	
  }
  this.Slider = function (card) {
		var carousel = $('#carouselExampleIndicators');
		var ol = $('<ol class="carousel-indicators">');
		var divGalery = $('.carousel-inner');
		var li = null;
		var lislide = null;
		let myCard = JSON.parse(card);
		//console.log("card: "+myCard.id);
		//alert("card: "+myCard.cardDetail.UploadImage.length);
		var _size = myCard.cardDetail.UploadImage.length;//app.Slider.galery.length;
		for (let index = 0; index < _size; index++) {
			const element = myCard.cardDetail.UploadImage[index];
			let capa = $('<div class="capa">');
			let img = $('<img>');
			let link = $('<a data-size="1200x800">');
			link.attr("href", "data:image/jpg;base64,"+element);
			link.attr("title", app.Slider.title);
			img.attr("src", "data:image/jpg;base64,"+element);
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
  					
  		let divFormGroup = $("<div class='form-group'>");
		let divFormGroupMiddle = $('<div class="form-group col-6">');
		let divRow = $('<div class="row">');
		
		let textAreaComponet = $('<input type="text" class="form-control" id="title" readonly>');
		textAreaComponet.val(myCard.header);
		labelDesc.text(app.Slider.Description.title);
		divFormGroup.append(labelDesc);
		divFormGroup.append(textAreaComponet);
		descriptionComponet.append(divFormGroup);
		
  					
		divFormGroup = $("<div class='Form-Group'>");
		let labelLocation = $('<label for="location">');
		let textLocation = $('<input type="text" class="form-control" id="location" placeholder="informação da localização" readonly="readonly">');
	    labelLocation.text(app.Slider.Description.location);
	    textLocation.val(myCard.Location.location);
	    divFormGroupMiddle.append(labelLocation);
	    divFormGroupMiddle.append(textLocation)
	    divRow.append(divFormGroupMiddle);
		
	    divFormGroupMiddle = $('<div class="form-group col-6">');
	    let labelProvince = $('<label for="province">');
		let textProvince = $('<input type="text" class="form-control" id="province" placeholder="informação da província" readonly="readonly">');
	    labelProvince.text(app.Slider.Description.province);
	    textProvince.val(myCard.cardDetail.province.location);
	    divFormGroupMiddle.append(labelProvince)
	    divFormGroupMiddle.append(textProvince);
	    divFormGroup.append(divFormGroupMiddle);
		divRow.append(divFormGroupMiddle);
		descriptionComponet.append(divRow);
		divRow = null;
		divFormGroupMiddle = null;
		
		divRow = $('<div class="row">');
		divFormGroupMiddle = $('<div class="form-group col-6">');
	    
		let labelStreet = $('<label for="street">');
		let textStreet = $('<input type="text" class="form-control" id="street" placeholder="informação da rua" readonly="readonly">');
	    labelStreet.text(app.Slider.Description.street);
	    textStreet.val(myCard.cardDetail.street);
	    divFormGroupMiddle.append(labelStreet);
	    divFormGroupMiddle.append(textStreet)
	    divRow.append(divFormGroupMiddle);
		
	    divFormGroupMiddle = $('<div class="form-group col-6">');
	    let labelPrice = $('<label for="price">');
		let textPrice = $('<input type="text" class="form-control" id="price" placeholder="informação do preço" readonly="readonly">');
	    labelPrice.text(app.Slider.Description.price);
	    textPrice.val(myCard.cardDetail.price);
	    divFormGroupMiddle.append(labelPrice)
	    divFormGroupMiddle.append(textPrice);
	    divRow.append(divFormGroupMiddle);
		descriptionComponet.append(divRow);
		
		divRow = null;
		divFormGroupMiddle = null;
		divRow = $('<div class="row">');
		
		let labelDescription = $("<label>");
		let textDescription = $('<textarea class="form-control" row="10" id="description" readonly> </textarea>');
		//alert(myCard.cardDetail.price);
		textDescription.val(myCard.description);
		labelDescription.text(app.Slider.Description.description);
		divFormGroup.append(labelDescription);
		divFormGroup.append(textDescription);
		descriptionComponet.append(divFormGroup);
		
		divRow = null;
		divFormGroupMiddle = null;
		
		divRow = $('<div class="row">');
		divFormGroupMiddle = $('<div class="form-group col-6">');
	    
		let labelCategory = $('<label for="category">');
		let textCategory = $('<input type="text" class="form-control" id="category" placeholder="informação da categoria" readonly="readonly">');
	    labelCategory.text(app.Slider.Description.category);
	    textCategory.val(myCard.cardDetail.category.name);
	    divFormGroupMiddle.append(labelCategory);
	    divFormGroupMiddle.append(textCategory)
	    divRow.append(divFormGroupMiddle);
		
	    divFormGroupMiddle = $('<div class="form-group col-6">');
	    let labelSubcategory = $('<label for="subcategory">');
		let textSubcategory = $('<input type="text" class="form-control" id="subcategory" placeholder="informação da sub categoria" readonly="readonly">');
	    labelSubcategory.text(app.Slider.Description.subcategory);
	    textSubcategory.val(myCard.cardDetail.subCategory.name);
	    divFormGroupMiddle.append(labelSubcategory)
	    divFormGroupMiddle.append(textSubcategory);
	    divRow.append(divFormGroupMiddle);
		descriptionComponet.append(divRow);
		
		divRow = null;
		divFormGroupMiddle = null;
		
		divRow = $('<div class="row">');
		divFormGroupMiddle = $('<div class="form-group col-6">');
	    
		let labelType = $('<label for="type">');
		let textType = $('<input type="text" class="form-control" id="type" placeholder="informação do tipo" readonly="readonly">');
	    labelType.text(app.Slider.Description.type);
	    textType.val(myCard.cardDetail.type);
	    divFormGroupMiddle.append(labelType);
	    divFormGroupMiddle.append(textType)
	    divRow.append(divFormGroupMiddle);
		
	    divFormGroupMiddle = $('<div class="form-group col-6">');
	    let labelZipcode = $('<label for="zipcode">');
		let textZipcode = $('<input type="text" class="form-control" id="zipcode" placeholder="informação do código zip" readonly="readonly">');
	    labelZipcode.text(app.Slider.Description.zipcode);
	    textZipcode.val(myCard.cardDetail.zipcode);
	    divFormGroupMiddle.append(labelZipcode)
	    divFormGroupMiddle.append(textZipcode);
	    divRow.append(divFormGroupMiddle);
		descriptionComponet.append(divRow);
		
		divRow = null;
		divFormGroupMiddle = null;
		
		divRow = $('<div class="row">');
		divFormGroupMiddle = $('<div class="form-group col-6">');
	    
		let labelReference = $('<label for="reference">');
		let textReference = $('<textarea class="form-control" row="10" id="reference" placeholder="informação do tipo" readonly="readonly"> </textarea>');
	    labelReference.text(app.Slider.Description.reference);
	    textReference.val(myCard.cardDetail.reference);
	    divFormGroupMiddle.append(labelReference);
	    divFormGroupMiddle.append(textReference)
	    divRow.append(divFormGroupMiddle);
		
	    divFormGroupMiddle = $('<div class="form-group col-6">');
	    let labelDealtype = $('<label for="dealtype">');
		let textDealtype = $('<input type="text" class="form-control" id="dealtype" placeholder="informação do tipo de negócio" readonly="readonly">');
	    labelDealtype.text(app.Slider.Description.dealtype);
	    textDealtype.val(myCard.cardDetail.dealtype);
	    divFormGroupMiddle.append(labelDealtype)
	    divFormGroupMiddle.append(textDealtype);
	    divRow.append(divFormGroupMiddle);
		descriptionComponet.append(divRow);
		
		
		$("#middle_colapse2 .panel-primary").first().attr('style',"display:none;");
		//descriptionComponet.append(textAreaComponet);
	};
  
  setSingleCardInfo();