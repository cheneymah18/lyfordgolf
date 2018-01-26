
$(document).ready(function(){
	$('#tips-mobile-select').on('change', function (e) {
	    $('#tips-desktop-menu a[href="#'+$(this).val()+'"]').tab('show')
	});

});