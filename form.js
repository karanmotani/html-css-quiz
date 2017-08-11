//import $ from 'jquery';

function formValidation() {

	var fname = document.getElementById("name").value;
	var email_id = document.getElementById("email_id").value;
	var phone_no = document.getElementById("phone_no").value;
	var web_site = document.getElementById("web_site").value;
	var message = document.getElementById("message").value;



	//phone_no1 = phone_no.replace(((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4});

	document.getElementById("dispName").value = fname;
	document.getElementById("dispEmail_id").value = email_id;
	document.getElementById("dispPhone_no").value = phone_no;
	document.getElementById("dispWeb_site").value = web_site;
	document.getElementById("dispMessage").value = message;

	emailValidation(email_id);
}


//$(document).ready(formValidation);

function emailValidation(email_id) {

	var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	if(re.test(email_id) ){
		alert('EmailID is correct');
	} else {
		alert('EmailID is not correct');
	}
}

