var atime=document.getElementsByClassName("time")
		for(let i=0;i<atime.length;i++){
			function miaosha(date1,date2){
				var ss = (date2-date1)/1000;
				
				var hour = Math.floor(ss/3600);
				var minute = Math.floor(ss/60%60);
				var second = Math.floor(ss%60);
				
				atime[i].innerHTML = "剩余："+hour+"小时"+minute+"分"+second+"秒";

				ss = Math.floor(ss);
				if(ss<=0){
					atime[i].innerHTML = "秒杀结束";
					clearInterval(timer);
				}
				
			}
			
			var date1 = new Date();
			var date2 = new Date("2018-12-20 19:55:50");
			miaosha(date1,date2);
			var timer = setInterval(function(){
				miaosha(new Date(),date2);
			},1000)
			
			
		}