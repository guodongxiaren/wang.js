function getNow2Str() {
	var date = new Date();

	var fulltime = date.getFullYear() + "-" + (parseInt(date.getMonth())+1) + "-" +
	               date.getDate() + " " + date.getHours() + ":" + date.getMinutes() +
	               ":" + date.getSeconds();
	return fulltime;
}

function checkMail(mail) {
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(mail)) {
		return true;	
	} else {
		 return false;
	} 
 
}

function checkMobile(phone) {
    var filter = /^1\d{10}$/;
    if (filter.test(phone)) {
        return true;
    } else {
        return false;
    }
}