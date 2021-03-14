

$( function () {

	'use strict';

	//Hide Place Holder In Form Focus 

	$('[placeholder]').focus( function () {

		$(this).attr('data-text',$(this).attr('placeholder'));
		$(this).attr('placeholder','');

	}).blur( function () {

		$(this).attr('placeholder',$(this).attr('data-text'));

	});

	// Add * on Required Field

	$('input').each(function() {

		if ($(this).attr('required') === 'required') {

			$(this).after('<span class= "asterisk"> * </span>')
		}

	});

	// Convert Password Field To Text Field on click

	var passfield = $('.password');

	$('.showpass').hover(function(){

		passfield.attr('type','text');

	}, function(){


		passfield.attr('type','password');

	});

	// Conformatiom Message on Button

	$('.confirm').click(function(){

		return confirm('Are You Sure?');

	});

	//Category View Manage

	$('.cat h3').click(function(){

		$(this).next('.full-view').fadeToggle(500);
	});

});