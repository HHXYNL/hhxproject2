$(function(){
	/*涓诲ぇ鍥惧垏鎹�*/
	$(".mbanner .focus").sudyfocus({      
		p:2,
		zWidth:1100,
		zHeight:435,
		title:{
			isAutoWidth: true,
			active:true
		},
		 text:{
			 active: false,
			 isAutoHeight: false,
			 href: false
		},
		response: true,
		speed:700, 
		pagination: true,
		navigation: true,
		isNavHover: true,
		href:true,
		effect: 'fade'
	});
	/*鏂伴椈鍥剧墖鍒囨崲*/
	$(".post-11 .focus").sudyfocus({      
		p:11,      
		zWidth:314,      
		zHeight:246,  
		title:{        
			isAutoWidth: false,
			active:true      
		},  
		 text: {        
			 active: false,
			 isAutoHeight: false,   
			 href: false 
		},  
		response: true,     
		speed:700, 
		pagination: true,
		navigation: true,
		isNavHover: true,
		href:true,
		effect: 'fade'
	});
	$(".post-101 .focus").sudyfocus({      
		p:101,      
		zWidth:350,      
		zHeight:230,  
		title:{        
			isAutoWidth: false,
			active:true      
		},  
		 text: {        
			 active: false,
			 isAutoHeight: false,   
			 href: false 
		},  
		response: true,     
		speed:700, 
		pagination: true,
		navigation: true,
		isNavHover:true,
		href:true,
		effect: 'fade'
	});
	/*鍙嬫儏閾炬帴涓嬫媺*/
	$(".botlinks").each(function(index, el){
		$(el).find(".links-wrap").hover(function(){
			$(this).addClass('wrap-open').children('.link-items').stop(true,true).slideDown(300);
		},function(){
			$(this).removeClass('wrap-open').children('.link-items').stop(true,true).slideUp(100);
		});
	
	
	//slick宸﹀彸杞挱
	$('.post-14 .news_list').slick({
			dots: false,  //鎸囩ず鐐�
			infinite: true,  //寰幆鎾斁
			autoplay: true,  //鑷姩鎾斁
			autoplaySpeed: 5000, //鑷姩鎾斁闂撮殧
			arrows: true,  //宸﹀彸绠ご
			useCSS: true,  //浣跨敤 CSS3 杩囧害
			speed: 600,  //婊戝姩鏃堕棿
			slide: 'li',  //婊戝姩鍏冪礌鏌ヨ
			slidesToShow: 4,  //骞荤伅鐗囨瘡灞忔樉绀轰釜鏁�
			slidesToScroll: 1,  //骞荤伅鐗囨瘡娆℃粦鍔ㄤ釜鏁�
			responsive: [   //鏂偣瑙﹀彂璁剧疆
				{
				breakpoint: 1200,   //鍒嗚鲸鐜囦箣涓�(涓嶅寘鍚缃垎杈ㄧ巼鏈韩)
					settings: {			//鍙傛暟璁剧疆
						slide: 'li',    //婊戝姩鍏冪礌鏌ヨ
						slidesToShow: 4,  //骞荤伅鐗囨瘡灞忔樉绀轰釜鏁�
						slidesToScroll: 1, //骞荤伅鐗囨瘡娆℃粦鍔ㄤ釜鏁�
						infinite: true  //寰幆鎾斁
					}
				},
				{
				breakpoint: 960,
					settings: {
						slide: 'li',
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
				breakpoint: 768,
					settings: {
						slide: 'li',
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
				breakpoint: 480,
					settings: {
						slide: 'li',
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
				breakpoint: 320,
					settings: {
						slide: 'li',
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
					}
				}
			]
	});
});
});