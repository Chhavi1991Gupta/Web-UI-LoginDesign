function initRegObj()
{
	registration.username 		=  document.form1.first.value + document.form1.last.value;
	registration.email 			=  document.form1.email.value;
	registration.password 		=  document.form1.password.value;
	registration.dob 				=  document.form1.dob.value;
	registration.ssn 				=  document.form1.ssn.value;
	registration.phone_no 		=  document.form1.phone_no.value;
	registration.card_no 			=  document.form1.card_no.value;
	registration.isValidEmail();
	registrationisPhoneNumberFormatValid();
	saveToSessionStorage();
	saveToMySQL();
}



function validatePassword(){

	var password = document.getElementById("pwd");
	var	confirm_password = document.getElementById("cpwd");
	var message = document.getElementById('confirmMessage');
	message.style.visibility = "visibility";
	  if(password.value == confirm_password.value) {
		message.innerHTML = "Passwords  Match!"
		}
	  else{
		message.innerHTML = "Passwords do not Match!"
		cpwd.focus();
	  }	 
	  
	password.onChange = validatePassword;
	confirm_password.onKeyup = validatePassword;
}

if (!Modernizr.localstorage) {
		alert('This Browser Doesn\'t Support Local Storage.');
}

function checkPwdStrength(obj) {
	var strengthObj = document.getElementById("pwdStrength");
	strengthObj.style.visibility = "visible";
	var pwdVal = obj.value;
	var normalPattern = /(?=(.*[A-Z]){3,})(?=(.*[a-z]){2,})(?=(.*[@#$%]){2,})/;
	var mediumPattern = /(?=(.*[A-Z]){3,})(?=(.*[a-z]){2,})(?=(.*[@#$%]){3,5})/;
	var strongPattern = /(?=(.*[A-Z]){3,})(?=(.*[a-z]){2,})(?=(.*[@#$%]){6,})/;
	if(strongPattern.test(pwdVal)) {
		strengthObj.value = 100;
	} else if (mediumPattern.test(pwdVal)) {
		strengthObj.value = 50;
	} else if (normalPattern.test(pwdVal)) {
		strengthObj.value = 20;
	} else {
		strengthObj.style.visibility = "hidden";
		strengthObj.value = 0;
	}
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    var newElem = document.getElementById(data).cloneNode(false);
    var target = document.getElementById("div1");
    target.innerHTML = "";
    target.appendChild(newElem);
    ev.preventDefault();
     document.getElementById('create').disabled = false;	
}


function saveToMySQL(){
	var mySqlJson = registration.toJSONString();
	alert("hello" + mySqlJson);
	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: "http://localhost:8000/",
		data: mySqlJson,
		dataType: "json",
		success:function(data,status,jqXHR){
			alert("S " +  status);		
		},
		error:function(jqXHR,status,errorThrown){
		    console.log(status + " " + errorThrown);
			alert(status + errorThrown+" error");
		}
	});	
}