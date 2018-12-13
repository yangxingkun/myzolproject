;(function($){
	$(function(){
		
		//console.log("hhhh")
		var id = location.search.split("=")[1];
		console.log(id);
		$.get("http://47.104.244.134:8080/goodsbyid.do",{id:id},function(data){
			console.log(data)
			//console.log("hhhh")
			var str=`<div class="preview">
					
					<div class="mainImg">
						<img src="${data.picurl}"/>
						<div class="zoom">
							
						</div>
						
					</div>
					<div class="bigImg">
						<img src="${data.picurl}"/>
					</div>
					<div class="smallImg">
						<ul>
							<li class="hover"><img src="${data.picurl}"/></li>
							<li><img src="${data.picurl}"/></li>
							<li><img src="${data.picurl}"/></li>
							<li><img src="${data.picurl}"/></li>
							<li><img src="${data.picurl}"/></li>
						</ul>
					</div>
				</div>`
			var str1=`<div class="content">
					<h4>${data.name}</h4>
					<div class="content-price">
						<i>￥${data.price/100}</i>
						<span>编号：${data.id}</span>
					</div>
					<a href=#>
						<img src="${data.picurl}"/>
					</a>
					
					<div class="carBtn">
						<input type="button" class="dtlBtn" value="加入购物车" />
						<input type="button" class="buyBtn" value="立即购买" />
					</div>
					
				</div>`
			$(".warp").append(str);
			$(".warp").append(str1);
			//点击加入购物车
			
			$(".dtlBtn").click(function(){
				var id=data.id
				console.log(id)
				var token=$.cookie("token");
				$.get("http://47.104.244.134:8080/cartsave.do",{gid:id,token:token},function(data){
					console.log(data);
				})
			})
			//立即购买
			$(".buyBtn").click(function(){
				
				location.href="shoppingcart.html";
			})
			//鼠标移入
			$(".mainImg").mouseover(function(){
				$(".zoom").css({"display":"block"});
				$(".bigImg").css({"display":"block"});

			})
			
			//鼠标移出
			$(".mainImg").mouseout(function(){
				$(".zoom").css({"display":"none"});
				$(".bigImg").css({"display":"none"});
			})
			
			$(".smallImg li").each(function(){
				$(this).click(function(){
					$(this).addClass("hover").siblings().removeClass("hover");
					
				})
			})
			
			//鼠标移动
			$(".mainImg").mousemove(function(e){
				
				var x=e.pageX-$(".mainImg").offset().left;
				
				var y=e.pageY-$(".mainImg").offset().top;
				
				var _left=x-$(".zoom").outerWidth()/2;
				var _top=y-$(".zoom").outerHeight()/2;

				
				var cw=$(".mainImg").innerWidth();
				var ch=$(".mainImg").innerHeight();
				if(_left<=0){
					_left=0;
				}
				if(_top<=0){
					_top=0;
				}
				if(_left>=cw-$(".zoom").outerWidth()){
					_left=cw-$(".zoom").outerWidth();
				}
				if(_top>=ch-$(".zoom").outerHeight()){
					_top=ch-$(".zoom").outerHeight();
				}
				
				$(".zoom").css({"left":_left});
				$(".zoom").css({"top":_top});
				b_Left=-_left/$(".mainImg").outerWidth()*$(".bigImg").outerWidth();
				b_Top=-_top/$(".mainImg").outerHeight()*$(".bigImg").outerHeight()
				$(".bigImg>img").css({"left":b_Left,"top":b_Top});
			})
		
		
			
			
		})
		
			
		
		
		
	})
	
})(jQuery)
