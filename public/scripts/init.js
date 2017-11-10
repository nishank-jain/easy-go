var moreServices = false;

$('.showMoreServices').on('click', function(e) {
    if (!moreServices) {
        $('.services-fold').css({'max-height': '4000px'});
        $(this).html("See Less Services");
        moreServices = true;
    }
    else {
        $('.services-fold').css({'max-height': '0px'});
        $(this).html("See More Services");
        moreServices = false;
    }
});

(function($){
	$(function(){
		$('.button-collapse').sideNav({
            closeOnClick: true,
            edge: 'right',
            draggable: true
        });
	});
})(jQuery);