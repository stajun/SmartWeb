$(document).ready(function(){
	$('.auto-search').click(function(){
		$('#auto-box').toggleClass('display-block');
		$('.auto-down').toggleClass('auto-up');
	});
	$('.item4').click(function(){
		menu();
	});
	$('.menu-close').click(function(){
		menu();
		// $('.sub-menu').removeClass('display-block');
		// $('.sub-menu-background').removeClass('display-block');
	});
	function menu(){
		$('.item4').toggleClass('item4-1');
		$('.sub-menu').toggleClass('display-block');
		$('.sub-menu-background').toggleClass('display-block');
	}
	//div는 ul태그를 감싸는 객체의 선택자명
	//h는 marginTop의 높이
	//time은 이동하는데 걸리는 시간
	var ticker = function(div,h,time)
	{
		timer = setTimeout(function(){
			$(div+' li:first').animate( {marginTop: h}, time, function()
				{
					//여기서 this는 item5클래스 안에 있는 ul태그 안에 있는 첫번째 
					//li태그 객체
					//datach는 해당 객체를 제거한 후 해당 객체를 리턴한다.
					$(this).detach().appendTo(div+'>ul').removeAttr('style');
				});
			ticker(div,h,time);
		}, 2000);         
	};
	ticker('.item5','-20px',400);
	ticker('.news-content','-20px',600);
	$('.item5').hover(function(){
		$('.real-search-box').toggleClass('display-block');
	});
});
