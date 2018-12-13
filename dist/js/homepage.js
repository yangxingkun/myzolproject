
$(function(){
//返回顶部
$(".barbot").click(function(){
		//console.log(".barbot")
		$("body,html").animate({scrollTop:0},20)
	});
//倒计时








//搜索一栏固定	
$(window).scroll(function(){
	
	var scrollTop=$(this).scrollTop();
	if(scrollTop>=300){
		console.log("jjj")
		$("#header1").animate({"position":"fixed","top":0,},20)
	}else{$("#header1").hide();}

		
})
//tab切换

$(".focustab li").mouseenter(function(){
console.log("sss")
	$(this).addClass("on").siblings().removeClass("on");
	var index=$(this).index();
	console.log(index)
	$(".physlide li").eq(index).addClass("fad").siblings().removeClass("fad");
})
//放大
$(".phypics a").hover(function(){
		$(this).find("img").stop().animate({"width":"250px","height":"270px"},200)
	
},function(){$(this).find("img").stop().animate({"width":"214px","height":"235px"},200)}
)
//面罩
$(".nooplist .yang").hover(function(){
	$(this).find(".demask").stop().animate({"top":0},200)
},function(){$(this).find(".demask").stop().animate({"top":"152px"},200)})
//放大
$(".psy-pics a").hover(function(){
		$(this).find("img").stop().animate({"width":"458px","height":"202px"},200)
	
},function(){$(this).find("img").stop().animate({"width":"428px","height":"182px"},200)}
)
//放大带边框阴影
$(".cfix .item").hover(function(){
	$(this).find("a").find("img").stop().animate({"width":"250px","height":"250px","margin-top":"-25px","margin-left":"-25px"},1000).end().end().animate({"box-shadow":"10px 10px 5px #000"},1000)
},function(){$(this).find("a").find("img").stop().animate({"width":"200px","height":"200px","margin-top":"0px","margin-left":"0px"},1000)})
//地址的
$(".city-name").hover(function(){
	$(".city-list").show();
},function(){$(".city-list").hide()
})
$(".city-list").bind("mouseenter",function(){
	$(this).show();
})
$(".city-list").bind("mouseleave",function(){
	$(this).hide();
})
//二维码
$(".zc-quick-menu .weima").hover(function(){
	$(this).find("h2").show();
},function(){$(this).find("h2").hide();
})

//导航二级菜单
$(".category-nav-body #J_CategoryItems .item").hover(function(){
	
	//console.log("hhhh")
	$(this).css({"background-color":"rgba(255,255,255,0.5)","padding":0,"margin":0,"padding-right":"10px"}).find("h3").find("a").css({"color":"#000"});
	var index=$(this).index();
	
	////二级菜单
	$.get("http://47.104.244.134:8080/goodsbytid.do",{"tid":13,"page":index+1,"limit":6},function(data){
	console.log(data.data);
     
	for(let k=0;k<data.data.length;k++){
		$("#yang2 #yang4").append(`
		<li><a href="#">${data.data[k].name}</a></li>	
		`)
	}

	
})
	//结束
	
	//console.log(index)
	$("#yang2").show().find("#yang4").find("li").find("a").eq(index)
	//36条数据都出来了
	
	
	
	
	
	
	
},function(){$(this).css({"background":"#454545"}).find("h3").find("a").css({"color":"#fff"})
var index=$(this).index();
$("#yang2").hide().eq(index).find()
})
//一级菜单
$.get("http://47.104.244.134:8080/goodstypelist.do",{"l":1},function(data){
		//console.log(data)
		//var level1=[];
		for(let i=0;i<data.length;i++){
			//level1.push(data[i].name)
			//console.log(data)
			$("#yang2 .yang3").append(`<span>${data[i].name}</span>`)
			
		}
		//console.log(level1)
		//for(let j=0;j<level1.length;j++){
			//console.log(level1[j])
			//$("#yang2 .yang3").find("span").eq(j).html(level1[j])
		//};
		
	})
















})

	

