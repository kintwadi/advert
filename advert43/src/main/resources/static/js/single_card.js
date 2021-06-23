

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
		console.log("card: "+myCard.id);
		alert("card: "+myCard.cardDetail.UploadImage.length);
		var _size = myCard.cardDetail.UploadImage.length;//app.Slider.galery.length;
		for (let index = 0; index < _size; index++) {
			const element = myCard.cardDetail.UploadImage[index];
			let capa = $('<div class="capa">');
			let img = $('<img>');
			let link = $('<a data-size="1200x800">');
			link.attr("href", element.img);
			link.attr("title", app.Slider.title);
			img.attr("src", "data:image/jpg;base64,"+element.img);
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
  
  setSingleCardInfo();