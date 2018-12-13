


//DOM2添加事件监听器   兼容性函数
			function addEvent(obj,type,fn){
				if(obj.addEventListener){
					obj.addEventListener(type,fn);
				}else{
					obj.attachEvent("on"+type,fn);
				}
			}
//DOM2移除事件监听器   兼容性函数
			function removeEvent(){
				if(obj.removeEventListener){
					obj.removeEventListener(type,fn);
				}else{
					obj.detachEvent("on"+type,fn);
				}
			}
			

var dateUtil = {
	//是否为闰年
	isLeapYear:function(year){
		if(year%4==0&&year%100!=0 || year%400==0){
			return true;
		}
		return false;
	},
	//日期格式化输出 
	formatDate:function(date,str){
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();
		if(month<10){
			month = "0"+month;
		}
		if(day<10){
			day = "0" + day;
		}
		
		var s = year+str+month+str+day;
		
		return s;
		
	},
	//获得某个月份的天数
	getDays:function(date,month){
		var year = date.getFullYear();
		switch (month){
				case 4:
				case 6:
				case 9:
				case 11:
					return 30;
					break;
				case 2:
					if(dateUtil.isLeapYear(year)){
						return 29;
					}else{
						return 28;
					}
					break;
				default:
					return 31;
			}
	},
	//判断两个日期相差的天数
	getDiffDays:function(date1,date2){
		var ms = Math.abs(date2-date1);
		var ss = ms/1000;
		//var days = ms/1000/(24*3600);
		
		var day = Math.floor(ss/3600/24);
		var hours = Math.floor(ss/3600%24);
		var minutes = Math.floor(ss/60%60);
		var seconds = Math.floor(ss%60);
		
		return day+"天"+hours+"小时"+minutes+"分钟"+seconds+"秒";
		
	},
	//获得N天以后的日期
	getNDays:function(date,n){
		date.setDate(date.getDate()+n);
		return date;
	}
}





//获取非行内样式兼容写法   .比如获取DIV的width属性
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	return getComputedStyle(obj,null)[attr];
}

//通过class名获取节点的兼容写法
function getClassName(ele,className){
	var aResult=[];
	if(ele.getElementsByClassName){
		aResult.push(ele.getElementsByClassName(className));
	}else{
		var children=ele.getElementsByTagName("*");
		for(var i=0;i<children.length;i++){
			var aClass=children[i].className.split(" ");
			for(var j=0;j<aClass.length;j++){
				if(aClass[j]==className){
					aResult.push(children[i]); 
				}	
			}	
		}
	}
	return aResult;
}



//随机颜色
function getColor(){
	var str="0123456789ABCDEF";
	var color="#";
	for(var i=0;i<6;i++){
		var a=str.charAt(Math.floor(Math.random()*str.length));
		color+=a;
	}
	return color;
}


		//获取Cookie
			function getCookie(name){
				var str = document.cookie;
				var arr = str.split("; ");
				//console.log(arr);
				for(var i = 0; i < arr.length; i++){
					var arr1 = arr[i].split("=");
					if(arr1[0]==name){
						return arr1[1];
					}
				}
			}
			
			//创建Cookie
			function setCookie(name,val,n){
				var oDate = new Date();
				oDate.setDate(oDate.getDate()+n);
				document.cookie = name + "=" + val + ";expires="+ oDate ;
			}
			
			//删除Cookie
			function removeCookie(name){
				setCookie(name,1,-1);
			}
			

	/*是否带有小数*/
	function    isDecimal(strValue )  {  
	   var  objRegExp= /^\d+\.\d+$/;
	   return  objRegExp.test(strValue);  
	}  
	
	/*校验是否中文名称组成 */
	function ischina(str) {
	    var reg=/^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
	    return reg.test(str);     /*进行验证*/
	}
	
	/*校验是否全由8位数字组成 */
	function isStudentNo(str) {
	    var reg=/^[0-9]{8}$/;   /*定义验证表达式*/
	    return reg.test(str);     /*进行验证*/
	}
	
	/*校验电话码格式 */
	function isTelCode(str) {
	    var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
	    return reg.test(str);
	}
	
	/*校验邮件地址是否合法 */
	function IsEmail(str) {
	    var reg=/^\w+@\w+(\.\w+)+$/;
	    return reg.test(str);
	}
	//获取行内样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}
	return getComputedStyle(obj,null)[attr]
}
	//运动函数封装
function startMove(obj,json,fn){
	//为了保证针对某个DOM对象的操作始终由一个定时器控制
	//在开启一个定时器之前先清掉该对象上的定时器
	clearInterval(obj.timer);
	//开启一个新的定时器
	obj.timer = setInterval(function(){
		//碰到这个flag时，先不用管，至于有什么用，后面再说
		var flag = true;//假设
		//遍历保存样式属性和目标值的json数据，取到属性名和目标值（对应的属性值）
		for(var attr in json){
			//由于透明度的处理和px的处理方式稍有不同，分别处理
			if(attr == "opacity"){
				//取到当前值，这个值在每一次定时器走的时候都会变化
				var iCur = parseInt(getStyle(obj,attr)*100);
			}else{
				var iCur = parseInt(getStyle(obj,attr));
			}
			//取到目标值
			var iTarget = json[attr];
			//这个是实现缓冲运动的关键代码
			//属性每一次改变的值都不一样，越来越小，无限接近0
			var iSpeed = (iTarget-iCur)/7;
			//考虑到当speed值过小时对样式不在造成影响，将小数取整为1或者-1
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			
			if(attr == "opacity"){
				obj.style.opacity = (iCur + iSpeed)/100;
				obj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")";
			}else{
				obj.style[attr] = iCur + iSpeed + "px";
			}
			//由于可能会出现多个样式同时改变的情况
			//考虑清除定时器的条件，所有的都达到了目标值时，才清除
			//换句话说，只要有一个没有达到就不能清除
			//假设在每次定时器开启时，所有都达到了目标值，看代码顶部的flag
			if(iCur!=iTarget){
				flag = false;//只要有一个没有达到，flag == false
			}
		}
		if(flag){//判断flag的值
			clearInterval(obj.timer);
			if(fn){//如果需要链式调用
				fn();//继续执行传入的函数
			}
		}
		
		
	},20);
}

//ajax
function ajax(type,url,data,fnSuc,fnFail){
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	var str = "";
	for(var attr in data){
		str += attr+"="+data[attr]+"&";
	}
	str = str.replace(/&$/,"");
	
	if(type.toUpperCase()=="GET"){
		if(str.length==0){
			xhr.open(type,url,true);
		}else{
			xhr.open(type,url+"?"+str,true);
		}
		
		xhr.send();
	}
	
	if(type.toUpperCase()=="POST"){
		xhr.open(type,url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}

	xhr.onreadystatechange = function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				var data = xhr.responseText;
				//对返回的数据的处理函数 由于处理方式各式各样，以参数的形式体现
				fnSuc(data);
			}else{
				if(fnFail){
					fnFail();
				}
				
			}
		}
	}			
}
function $id(id){
	return document.getElementById(id);
}
//创建标签函数
function create(id){
	return document.createElement(id);
}
//根据标签查找元素
function $bq(li){
	return document.getElementsByTagName(li);
}
//写一个函数 功能 获取任意区间值公式
function rand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}
     //获取随机的六位字符
     function string(){
	 var str=""
	  for(var i=1;i<=6;i++){
    	var code=rand(48,122);
   		if(code>=58&&code<=64||code>=91&&code<=96){
      	i--;
	   }else{
	   	str+=String.fromCharCode(code)
	   }

	}return str

}
     //自定义一个日期时间格式
function dateToString(now,sign){
	var sign =  sign || "-";//默认拼接符号是 - 
	var y = now.getFullYear();
	var m = now.getMonth()+1;
	var d = now.getDate();
	var h = toTwo( now.getHours() );
	var mi =toTwo( now.getMinutes() );
	var s =toTwo( now.getSeconds() );
	return y + sign + m + sign + d + " " + h + ":" + mi + ":" +s;
}
   function toTwo(num){
	return num < 10 ? "0"+num : num;
 }


//将字符串转成日期时间格式
 function stringToDate(str){
	return new Date( str );
}


     //时间差
   function diff(start,end){
	//得到秒
	return (end.getTime() - start.getTime())/1000;
}