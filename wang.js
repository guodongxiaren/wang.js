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

function uniqueArray(array) {
	array.sort();
	var re = [array[0]];
	var length = array.length;
	for (var i = 1; i < length; i++) {
		if (array[i] !== re[re.length-1]) {
			re.push(array[i]);
		}
	}
	return re;
}

function lightPat(selector) {
	var html = $(selector).prop('outerHTML');
	var re = /{{\w+}}/gm;
	var arr = uniqueArray(html.match(re));

	return function () {
		if (arguments.length == 0)
			return;
		var ob = arguments[0];
		var length = arr.length;
		for (var i = 0; i < length; i++) {
			var item = arr[i].substring(2, arr[i].length-2);
			var re = new RegExp(arr[i], "g");
			html = html.replace(re, ob[item]);
		}
		if (arguments.length == 1)
			return html;
		else if (arguments.length == 2)
			arguments[1](html);
	}
};