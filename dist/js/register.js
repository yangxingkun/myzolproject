

	
	
	
	
	
;(function($){
	$(function(){
		//console.log("jjjjj")
		//用户名验证
		$("#username").change(function(){
			//console.log("jjjjj")
		var $str=$(this).val();
		if($str.length<6||$str.length>12){
			console.log("dhddhh")
			alert("格式不对")
			return;
		}
		if($str[0]>="0"&&$str[0]<="9"){
			console.log("jjj")
			alert("不能用数字开头")
			return;
		}
		
			var count=0;
			$str=$str.toLowerCase();
			for(var i=0; i<$str.length; i++){
				//console.log("kkkk")
				var $ch=$str.charAt(i);
				if($ch>="0"&&$ch<="9"||$ch>="a"&&$ch<="z"||$ch=="_"){
					count++;
					console.log("kkkk")
				}
			}
			
			if(count=$str.length){
					alert("正确");
			}else{
					alert("格式不正确")
			}
		})
		
		//密码验证
		$("#oldpsw").change(function(){
			var $oldpsw=$("#oldpsw").val();
			var reg = /^[A-Za-z0-9]{6,16}$/; 
			if($oldpsw.match(reg)){
				alert("格式正确")
			}else{alert("不正确")}
		})
		//密码在验证
		$("#newpsw").change(function(){
			var $newpsw=$("#newpsw").val();
			var $oldpsw=$("#oldpsw").val();
			
			if($oldpsw==$newpsw){
				console.log("hhhh")
				alert("密码正确")
				return;
			}
		})
		
		
		
		
		
		
		
		 
	
	$("#sub").click(function(){
		var data={
		username:$("#username").val(),
			password:$("#oldpsw").val(),
			email:$("#email").val(),
			sex:$("#sex").val()
	};
	console.log(data)
	$.post("http://47.104.244.134:8080/usersave.do",data,function(data){
		console.log(data)
//		if(data.code==0){
//			alert("注册ok")
//		}
	});
	
		
	})
		
		
		
		
		
	})
	
})(jQuery)
		
