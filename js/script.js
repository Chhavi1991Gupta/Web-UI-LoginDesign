function saveFields(){
	sessionStorage.setItem(document.getElementById('userid').id, document.getElementById('userid').value);
	sessionStorage.setItem(document.getElementById('password_new').id, document.getElementById('password_new').value);
	sessionStorage.setItem(document.getElementById('password_new_confirm').id, document.getElementById('password_new_confirm').value);
	sessionStorage.setItem(document.getElementById('email_address').id, document.getElementById('email_address').value);
	sessionStorage.setItem(document.getElementById('email_address2').id, document.getElementById('email_address2').value);
	sessionStorage.setItem(document.getElementById('secret_question_answer0').id, document.getElementById('secret_question_answer0').value);
	sessionStorage.setItem(document.getElementById('secret_question_answer1').id, document.getElementById('secret_question_answer1').value);
	sessionStorage.setItem(document.getElementById('mobile').id, document.getElementById('mobile').value);
	sessionStorage.setItem(document.getElementById('address').id, document.getElementById('address').value);
	sessionStorage.setItem(document.getElementById('area_of_interest').id, document.getElementById('area_of_interest').value);

    registration.userid = document.getElementById('userid').value;
    registration.email = document.getElementById('email_address').value;
    registration.password = document.getElementById('password_new').value;
    registration.sec_ques1 = document.getElementById('secret_question0').value;
    registration.sec_ans1 = document.getElementById('secret_question_answer0').value;
    registration.sec_ques2 = document.getElementById('secret_question1').value;;
    registration.sec_ans2 = document.getElementById('secret_question_answer1').value;
    registration.mobile = document.getElementById('mobile').value;
    registration.address = document.getElementById('address').value;


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

function checkPasswordMatch() {
    var password = document.getElementById('password_new').value;
    var confirmPassword = document.getElementById('password_new_confirm').value;

    if (password != confirmPassword)
        document.getElementById("divCheckPasswordMatch").innerHTML = "Passwords don't match!";
    else
        document.getElementById("divCheckPasswordMatch").innerHTML = "";
}

function checkEmailMatch() {
    var email1 = document.getElementById('email_address').value;
    var email2 = document.getElementById('email_address2').value;

    if (email1 != email2)
        document.getElementById("divCheckEmailMatch").innerHTML = "Emails don't match!";
    else
        document.getElementById("divCheckEmailMatch").innerHTML = "";
}

function checkQ0Ans() {
    var e = document.getElementById("secret_question0");
    var sq0 = e.options[e.selectedIndex].value;

    if(sq0 == 1)
    {            
        if(document.getElementById("secret_question_answer0").value  != 5)
        {
            document.getElementById("divCheckAns0").innerHTML = "Wrong Answer!";
        }
        else
        document.getElementById("divCheckAns0").innerHTML = "";
    }
    else if(sq0 == 2)
    {            
        if(document.getElementById("secret_question_answer0").value  != 300)
        {
            document.getElementById("divCheckAns0").innerHTML = "Wrong Answer!";
        }
        else
        document.getElementById("divCheckAns0").innerHTML = "";
    }
    else if(sq0 == 3)
    {            
        if(document.getElementById("secret_question_answer0").value  != 2300)
        {
            document.getElementById("divCheckAns0").innerHTML = "Wrong Answer!";
        }
        else
        document.getElementById("divCheckAns0").innerHTML = "";
    }
    else if(sq0 == 4)
    {            
        if(document.getElementById("secret_question_answer0").value.toLowerCase()  != "delhi")
        {
            document.getElementById("divCheckAns0").innerHTML = "Wrong Answer!";
        }
        else
        document.getElementById("divCheckAns0").innerHTML = "";
    }
    else if(sq0 == 5)
    {            
        if(document.getElementById("secret_question_answer0").value.toLowerCase()  != "washington d.c.")
        {
            document.getElementById("divCheckAns0").innerHTML = "Wrong Answer!";
        }
        else
        document.getElementById("divCheckAns0").innerHTML = "";
    }
    else
    {
        document.getElementById("divCheckAns0").innerHTML = "";
    } 
}

function checkQuestionMatch()
{

    var e = document.getElementById("secret_question0");
    var sq0 = e.options[e.selectedIndex].value;

    var e = document.getElementById("secret_question1");
    var sq1 = e.options[e.selectedIndex].value;

    if(sq0 == sq1)
        document.getElementById("divCheckQuestion").innerHTML = "Both security questions cannot be same!";
    else
        document.getElementById("divCheckQuestion").innerHTML = "";
}   

function checkQ1Ans() {
    var e = document.getElementById("secret_question1");
    var sq1 = e.options[e.selectedIndex].value;

    if(sq1 == 1)
    {            
        if(document.getElementById("secret_question_answer1").value  != 5)
        {
            document.getElementById("divCheckAns1").innerHTML = "Wrong Answer!";
        }
        else
        document.getElementById("divCheckAns1").innerHTML = "";
    }
    else if(sq1 == 2)
    {            
        if(document.getElementById("secret_question_answer1").value  != 300)
        {
            document.getElementById("divCheckAns1").innerHTML = "Wrong Answer!";
        }
        else
        document.getElementById("divCheckAns1").innerHTML = "";
    }
    else if(sq1 == 3)
    {            
        if(document.getElementById("secret_question_answer1").value  != 2300)
        {
            document.getElementById("divCheckAns1").innerHTML = "Wrong Answer!";
        }
        else
        document.getElementById("divCheckAns1").innerHTML = "";
    }
    else if(sq1 == 4)
    {            
        if(document.getElementById("secret_question_answer1").value.toLowerCase()  != "delhi")
        {
            document.getElementById("divCheckAns1").innerHTML = "Wrong Answer!";
        }
        else
        document.getElementById("divCheckAns1").innerHTML = "";
    }
    else if(sq1 == 5)
    {            
        if(document.getElementById("secret_question_answer1").value.toLowerCase()  != "washington d.c.")
        {
            document.getElementById("divCheckAns1").innerHTML = "Wrong Answer!";
        }
        else
        document.getElementById("divCheckAns1").innerHTML = "";
    }
    else
    {
        document.getElementById("divCheckAns1").innerHTML = "";
    } 
}

function chkPasswordStrength(txtpass)
   {
     var desc = new Array();
     desc[0] = "Very Weak";
     desc[1] = "Weak";
     desc[2] = "Better";
     desc[3] = "Medium";
     desc[4] = "Strong";
     desc[5] = "Very Strong";

     var strenghtMsg = document.getElementById('pbar');
     var errorMsg = document.getElementById('error');

     var score   = 0;

     //if txtpass bigger than 7 give 1 point
     if (txtpass.length > 7) score++;

     //if txtpass has both lower and uppercase characters give 1 point
     if ( ( txtpass.match(/[a-z]/) ) && ( txtpass.match(/[A-Z]/) ) ) score++;

     //if txtpass has at least one number give 1 point
     if (txtpass.match(/\d+/)) score++;

     //if txtpass has at least one special caracther give 1 point
     if ( txtpass.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) ) score++;

     //if txtpass bigger than 12 give another 1 point
     if (txtpass.length > 12) score++;

     document.getElementById('prglabel').innerHTML  = desc[score];
     strenghtMsg.value = score+'0';
     strenghtMsg.className = "progress-"+score;

     if (document.getElementById('userid').value == txtpass)
     {
     errorMsg.innerHTML = "Password must not contain User ID";
     strenghtMsg.value = 10;
     strenghtMsg.className = "progress-"+20;
     }
     else if (txtpass.length < 7)
     {
     errorMsg.innerHTML = "Password Should be Minimum 7 Characters";
     strenghtMsg.value = 10;
     strenghtMsg.className = "progress-"+20;
     }
     else
     {
        errorMsg.innerHTML = "";
     }


   }



   /**
 * 
 */
(function(window){  
        if(typeof(RegObj) === 'undefined'){
            window.registration = {};
        } else {
            console.log("RegObj already defined.");
        }
        
        registration.userid = "";
        registration.email = "";
        registration.password = "";
        registration.sec_ques1 = "";
        registration.sec_ans1 = "";
        registration.sec_ques2 = "";
        registration.sec_ans2 = "";
        registration.mobile = "";
        registration.address = "";
        
        registration.toJSONString = function ()
        {
            var regJSON  = JSON.stringify(registration);
            return regJSON;
        }
        
        registration.readFromJSONString = function(obj)
        {
            var reg  = JSON.parse(obj);
            return reg;
        }

        registration.isPhoneNumberFormatValid = function()
        {
            var num = this.phone_no;
            var phoneRe = /\d{3}[\-]\d{3}[\-]\d{4}$/;
               if(!num.match(phoneRe))
                   alert("Invalid Mobile Number Format!");
        }

        registration.isValidEmail = function() 
        {
            var email  = this.email;
            var pattern= /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
            if(!email.match(pattern))
                alert("Invalid Email Format!");
        }

})(window);



function saveToLocalStorage()
{ 
    localStorage.setItem("registrationJSON",registration.toJSONString());
    readFromSessionStorage();
}

function saveToSessionStorage()
{ 
    sessionStorage.setItem("registrationJSON",registration.toJSONString());
    saveToLocalStorage();
}

function readFromLocalStorage()
{ 
    var regObjJSON = localStorage.getItem("registrationJSON");

}
function readFromSessionStorage()
{
    var regObjJSON = sessionStorage.getItem("registrationJSON");

}

//Online offline events
var isOnline = function () {
    alert("Welcome back online");
};

var isOffline = function () {
    alert("You are now offline. Your data is saved in Local Storage ");          
    saveToLocalStorage();
    
};

if (window.addEventListener) {
    window.addEventListener("online", isOnline, false);
    window.addEventListener("offline", isOffline, false);
}
else {
    document.body.ononline = isOnline;
    document.body.onoffline = isOffline;
}   