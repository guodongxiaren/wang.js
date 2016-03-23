# wang.js
wang.js is just a simple javascript file including handy functions wrapped by me(Jelly Wang) personally.  

>Just for Fun.

##Usage
There are two approaches to use this repository. One is downloading it and importing it in your project directly, the other is importing it via an online url as follow:
```html
<script src="http://rawgit.com/guodongxiaren/wang.js/master/wang.js"></script>
```  
##Dependence
###jQuery
You must import `jQuery` library in front of importing `wang.js`.  
For example:
```html
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```
##API list
|function|description
|-----|----|
|getNow2Str|get now time, such as `2016-2-9 21:16:00`
|checkMail|check whether a valid email address or not
|checkMobile|check whether a valid mobile phone number or not
|uniqueArray|make an JS Array unique
|lightPat|a light weight pattern engine, see bellow [lightPat](#lightpat)

##API detail<kbd>some</kbd>
###lightPat
a light weight pattern engine
####Dependence
- jQuery
- `uniqueArray` in wang.js

####Usage
**First**, there should be some `pattern style code` in your HTML, as follow:
```html
<div id="main">
	<div class="pat">
		<h2>{{title}}</h2>
		<label>{{time}}</label>
	</div>
</div>
```
the `{{title}}` and `{{time}}` are the pattern variable and will be replaced by actual value in the future.  
**Then**, you need send a `selector` of jQuery as parameter to `lightPat` function.   
```javascript
var pe = lightPat(".pat");
```
you get a function object(pe in the above code) returned from the `lightPat` function at the moment.   
>The `lightPat` support all selector syntax in the jQuery.  

**Next**, you need an another object, for example:
```javascript
var ob = {
	"title": "light pattern engine",
	"time": "2016-03-23"
};
``` 
the name of object attribute should be same as that of the above pattern variable.  
**Finally**, you have two way to use this function object, as follows:
```javascript
// The First
document.getElementById("main").innerHTML = pe(ob);
```
```javascript
// The Second
pe(ob, function(src) {
	document.getElementById("main").innerHTML = src;
});
```
**Now**, your HTML page in your browser will be:
```html
<div id="main">
	<div class="pat">
		<h2>light pattern engine</h2>
		<label>2016-03-23</label>
	</div>
</div>
```

##License
**The MIT License**  

If you want to know detail about this license, you can read [The MIT License](./LICENSE) file. 