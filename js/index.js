// banner 轮播
;$(function(){
	$(document).ready(function(){
		var i=0;
		var clone = $("#banner #list li").first().clone();
		$("#banner #list").append(clone);
		var size = $("#banner #list li").size();
		console.log(size);
		
		var timer =setInterval(function(){
			i++;
			move();
		},2000);
		
		$("#banner").hover(function(){
			clearInterval(timer);	
		},function(){
			timer =setInterval(function(){
				i++;
				move();
			},2000);
		})
		
		$("#banner #nums li").hover(function () {

            var index = $(this).index();//获取当前索引值
            i = index;
            $("#banner #list").stop().animate({ left: -index * 1440 }, 500);
            $(this).addClass("bg").siblings().removeClass("bg");
        });
        
		/*向左按钮*/
        $("#banner .prev").click(function () {
            i--;
            move();
        })


        /*向右按钮*/
        $("#banner .next").click(function () {
            i++;
            move();
        })
		//移动事件
		function move(){
			if(i==size){
				$("#banner #list").css({left:0});
				i=1;
			}
			if(i==-1){
				$("#banner #list ").css({left:-(size-1)*1440});
				i =size-2;
			}
			$("#banner #list").stop().animate({left:-i*1440},660);
			if(i==size-1){
				$(".num").eq(0).addClass("bg").siblings().removeClass("bg");
			}else{
				$(".num").eq(i).addClass("bg").siblings().removeClass("bg");
			}
		}
	})	
})		

