

var app = Application;
//Instantiate the render constructor  pulling default definitions
var render = new Render(app); 
//render.clean_the_row();
function setUserInfo(){
	
	  	$("#login").css("display","none");
	  	$("#sign-up").css("display","none");
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
		LoadAllAds();
		
	  	
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
  setUserInfo();