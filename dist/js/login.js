;(function($){
	$(function(){
	
	$("#J_loginBtn").click(function(){
		var data={
		name:$("#J_loginUser").val(),
		password:$("#J_loginpassword").val()
	}
		$.post("http://47.104.244.134:8080/userlogin.do",data,function(data){
			console.log(data)
			if(data.code==0){
				$.cookie("token",data.data.token,{expires:30});
				location.href="homepage.html";
				
			}
		})
		
	})
		
		
		
		
	})
})(jQuery)
