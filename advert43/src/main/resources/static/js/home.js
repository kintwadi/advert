
$.get("app_main_app", function(application, status){

	var render = new Render(application);
	render.NewEntriesContainer();
	render.OldEntriesContainer();
	
	
	
});

var  app = Application;
var render = new Render(app);

var login = app.HeaderContainer.Menu[3];

$('#email').attr("placeholder",login.emailPlaceHolder);
$('#password').attr("placeholder",login.passwordPlaceHolder);
$('#btn_login').attr("value",login.submitLabel);
$('#label_remember').html(login.remember);
$('#login_header').html(login.header);
$('#question').html(login.question);
$('#answear').html(login.answear);
$('#new_question').html(login.newQuestion);
$('#new_answear').html(login.newAnswear);

$("#loginModal").iziModal({

	title: '<i class="fa fa-lock" aria-hidden="true"></i>',
	subtitle: '',
	headerColor: '#000000',
	top: 50, 
	height:430

});

function loadUser(user){


	$("#login").css("display","none");
	$("#sign-up").css("display","none");
	$("#link-id").css("display","block");
	$("#user-link-img").attr("src",user.photo);
	$("#user-name-id").html(user.name);

	localStorage.userId = user.id;
	localStorage.username = user.name;
	localStorage.userphoto = user.photo;
	



	$('#loginModal').iziModal('close');

}

// move this inside render

$('#form_login').submit(function (evt) {

	$("#login-error").css("display","none");
	let loginError = $("#login-error");
	let email = $("#email");
	let password = $("#password");
	let remember = $("#remember_me");
	loginError.css("display", "none");
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if( re.test(String(email.val()).toLowerCase())){

		$.post("query_login",

				{
			email: email.val(),
			password: password.val(),
			remember: remember.prop('checked'),

				},function(profile,status){

					var user = profile.user;
					console.log("profile response:: "+JSON.stringify(user));
					if(user != null){
						loadUser(user);
					}
				}
		);

	}else{

		$("#login-error").html(login.error);
		$("#login-error").css("color","red");
		$("#login-error").slideToggle();

	} 
	evt.preventDefault();


});
