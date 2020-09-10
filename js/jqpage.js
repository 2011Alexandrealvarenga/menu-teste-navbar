var height = $('.menu').height();
$(window).scroll (function(){

	if($(this).scrollTop()>height){
		$('.menu').addClass('fixed')
   
	}else{
		$('.menu').removeClass('fixed barra-menu2')
    

	}
});
