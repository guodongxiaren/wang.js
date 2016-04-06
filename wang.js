function getNow2Str() {
	var date = new Date();

	var fulltime = date.getFullYear() + "-" + (parseInt(date.getMonth())+1) + "-" +
	date.getDate() + " " + date.getHours() + ":" + date.getMinutes() +
	":" + date.getSeconds();
	return fulltime;
}

function isEmail(text) {
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return filter.test(text);
}

function isMobile(text) {
	var filter = /^1\d{10}$/;
	return filter.test(text);
}

function isChinese(text, wideChar=false) {
	if (wideChar) {
		var filter = /^[\u4E00-\u9FA5\uFE30-\uFFA0]+$/;
	} else {
		var filter = /^[\u4E00-\u9FA5]+$/;
	}
	return filter.test(text);
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
	var dom = $(selector);
	if (dom.length == 0) {
		throw "selector: " + selector + " don't match any DOM node!";
	}
	
	var pattern = dom.prop('outerHTML');
	var re = /{{\w+}}/gm;
	var array = uniqueArray(pattern.match(re));

	return function () {
		if (arguments.length == 0)
			return;
		var ob = arguments[0];
		/* prevent closure 
		 * copy pattern object rather than process it directly
		 */
		 var html = pattern; 
		 for (var arr in ob) {
		 	var item = "{{" + arr + "}}";
		 	var re = new RegExp(item, "g");
		 	html = html.replace(re, ob[arr]);
		 }

		 if (arguments.length == 1)
		 	return html;
		 else if (arguments.length == 2)
		 	arguments[1](html);
		}
	};