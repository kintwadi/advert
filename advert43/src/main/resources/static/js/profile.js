

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
	 	console.log(userphoto);
	 	//$("#user-link-img").attr("src","img/uploads/user.jpg");
	 	$("#user-link-img").attr("src","data:image/jpg;base64,"+userphoto);
	 	$("#user-name-id").html(username);
	 	$("#new-card").css("display","none");
		$(".newEntriesContainer").css("display","none");
		
		
	  	
  }
  setUserInfo();