// banner 轮播
;$(function(){
	$(document).ready(function(){
		var i=0;
		var clone = $("#banner #list li").first().clone();
		$("#banner #list").append(clone);
		var size = $("#banner #list li").size();

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

//
;$(function(){
		var i=0;
		var clone = $("#sliderBox #sliderList>li").first().clone();
		$("#sliderBox #sliderList").append(clone);
		var size = $("#sliderBox #sliderList>li").size();
		/*向左按钮*/
        $(".hot_left").click(function () {
            i--;
            move();
        })


        /*向右按钮*/
        $(".hot_next").click(function () {
            i++;
            move();
        })
		function move(){
			
			if(i==size){
				$("#sliderBox #sliderList").css({left:0});
				i=1;
			}
			if(i==-1){
				$("#sliderBox #sliderList ").css({left:-(size-1)*1210});
				i =size-2;
			}
			$("#sliderBox #sliderList").stop().animate({left:-i*1210},660);
		}

})

//商场同款

$(function(){
	
	var i=0;
		var clone = $(".storesame .storebox > li").first().clone();
		$(".storesame .storebox").append(clone);
		var size = $(".storesame .storebox > li").size();
		$(".hitemlink>li").hover(function () {

            var index = $(this).index();//获取当前索引值
            i = index;
            $(".storesame .storebox").stop().animate({ left: -index * 1212 }, 500);
              $(this).addClass("storebox").siblings().removeClass("storebox");
        });
		
})



//购物中心
//点击导航找到相对的栏目
$(function(){
	$(".shopnav>li").click(function(){
//		console.log("aaa");
		$(document).scrollTop($(".jdxb").children().eq($(this).index()).offset().top);
	})
})


$(function(){
	 $(".picleft li").hover(function() {
		$(this).children(".top_style1").animate({ width: 192}, 200);
		$(this).children(".left_style1").animate({ height: 62 }, 200);
		$(this).children(".bootm_style1").animate({ width: 192}, 200);
		$(this).children(".right_style1").animate({ height:62 }, 200);
		
		})
	$(".picleft li").mouseleave(function(){
		$(this).children(".top_style1").animate({ width: 0 }, 200);
		$(this).children(".left_style1").animate({ height: 0 }, 200);
		$(this).children(".bootm_style1").animate({ width: 0 }, 200);
		$(this).children(".right_style1").animate({ height: 0 }, 200);				      
	});
	
	$(".picleft li").mousemove(function(){
		var lsrc=$(this).find("img").attr("src");
		$(".picright").find("img").attr("src",lsrc);
//		console.log(lsrc);
	})
})
  



