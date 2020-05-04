var playable = [];
var inventory = [ 'Фродо', 'Сэм', 'Голлум', 'Кольцо' ];

// List of possible combos to create new elements
var COMBO = {
    'Фродо'   : {
        info:
        `После разделения братства Фродо отправился в путь. Его ноша дает ему
цель и уже несколько иное понимание того, как разворачиваются события:
“Но я думаю, что мне все равно суждено попасть во владения Тени, как
бы дело ни обернулось, так что и дорога найдется.” Фродо ведет за
собой Сэма и в определенном смысле Голлума. Он дает персонажам цель
двигаться. Он уже в Мордоре в мыслях… и о настоящем возможно не сильно
думает. Может так статься, что уже сейчас Фродо меньше похож на
хоббита, чем Сэм и в определенном смысле чем Голлум. Два обращения к
голлуму в которых Сэм видит его другим` },

    'Сэм' : { info: `Сэм – это хоббит от кончиков пальцев до макушки. Забота о саде,
напевание разных песен и легенд, любовь к еде. Он любит Шир, его
родной дом, к которому он привязан. Но есть у него одна увлечение, о
котором знают немногие в Шире, - он интересуется фольклором. “Я
запомнил это (стих о Гил-Гэладе) у господина Бильбо, мальчишкой
еще. Он частенько рассказывал мне всякие истории. Старик знал, что
если заходит речь про эльфов, то я тут как тут! Старый добрый господин
Бильбо, он и читать меня выучил. А сам как много книг перелопатил! И
стихи писал. Это я не чей–нибудь, а его стишок вспомнил!”  В
путешествии Сэм наяву увидел то, о чем мечтал.  Сэм в этом пути взял
на себя роль того, кто следит за бытом. Он не может понять Фродо и его
попыток вернуть Смеагола из Голлума. “Ума у него палата, это верно, да
вот сердце чересчур уж доброе. Ни один Гэмджи на свете не смог бы
сказать, как он теперь поступит”.  Когда Голлум приносит кроликов и
Сэм начинает готовить их в нем будто бы на время торжествует все самое
хоббитское.
` },
    'Голлум'  : { info: `Голлум преследует Фродо и Сэма. Ищет свою прелесть
непрестанно. Большую часть времени для него не существовало ничего
кроме Прелести. Встреча с Фродо и Сэма многое изменила Голлум влачил
жалкую, совершенно безрадостную жизнь. Тьму он ненавидел, света не
переносил, а в итоге проклял все на свете, и Кольцо – в первую
очередь.  Он и ненавидел, и обожал Кольцо, точь–в–точь как самого
себя. Он не мог от него избавиться. Его желания были здесь уже ни при
чем.
` },
    'Кольцо' : { info: `<em>“И действительно, с каждым шагом, приближавшим путников к Вратам
Мордора, Кольцо, которое Фродо прятал на груди, все больше обременяло
его.”</em>  Кольцо все больше влияет на Фродо. Он начинает чувствовать
власть. Власть над Голлумом. Это проявляется в странной речи Фродо в
результате которой сэм отре Сэм посмотрел на Фродо с одобрением, но и
несколько ошарашенно: таким он его еще не видел, да и таким тоном
Фродо еще никогда не разговаривал.
` },
	
    'Хоббит' : {
        info: `Толкин прямо пишет, что хоббиты – близкие родственники людей (куда
ближе, чем эльфы или гномы), но какова степень этого родства – не
знает никто. Хоббиты – народец не очень приметный, но весьма древний и
некогда довольно многочисленный, не то что в наши дни, – дело в том,
что они любят тишину, покой и тучные, хорошо разработанные земли;
поэтому обычно они выбирают для житья сельскую местность, где можно
содержать хозяйство в образцовом порядке и вести его по всем
правилам. Хоббиты косо смотрят (и всегда косо смотрели!) на механизмы
сложнее кузнечных мехов, водяной мельницы или примитивного ткацкого
станка, хотя с инструментами обращаться умеют. Достоверно известно,
что хоббиты занимаются земледелием, выращивая табак (хоббиты любят
покурить), виноград и ячмень. Пиво хоббитов очень ценится во всем
Средиземье. Также у хоббитов (в частности в Хоббитании) есть много
трактиров. Также хоббиты в своем большинстве боятся
приключений. Однако несмотря на это, некоторые хоббиты, отправлялись
на поиски приключений.`,
        needs: [ 'Фродо', 'Сэм' ] },
    
	'Dirt' : { info: "It's dirty.", needs: [ 'Water', 'Earth' ] },
	'Steam' : { info: "Caution, may be hot", needs: [ 'Fire', 'Water' ] },
	'Energy' : { info: "You've got the power", needs: [ 'Air', 'Fire' ] },
	'Lava' : { info: "What have you done?!", needs: [ 'Earth', 'Fire' ] },
	'Cloud' : { info: "Up in the air", needs: [ 'Steam', 'Air' ] },
	
	// 'xx' : { info: "xx", needs: [ 'ww', 'zz' ] },

	/*
	'IBM'    : { info: 'the gigantic company' },
	'Hackers' : { info: 'People who code while others sleep' },
	'Coffee' : { info: 'Hackers need this' },
	'GUI'    : { info: 'Graphical User Interface. Because, the CLI sucks, sometimes' },
	'mud'    : { needs: [ 'water', 'earth' ], info: "it's muddy" },
	'boue'   : { needs: [ 'water', 'earth' ], info: "it's muddy" },
	'steam'  : { needs: [ 'water', 'fire' ], info: "it's very hot and can burn severely" },
	'chew'   : { needs: [ 'fire', 'air' ], info: "it's muddy" },
	'bubble' : { needs: [ 'air', 'chew' ], info: "it's muddy" },
	*/	
	
};

var BADGES = {
	// "Badge Name" : { def: "Awesome badge description", icon: "this_badge.png" },
};

// Const
var ELEMENT_PROXIMITY = 10; // distance between 2 elements (in pixel) for them to be considered overlapping
var ELEM_HEIGHT = ELEM_WIDTH = '32px';

var BODY_BGCOLOR = $('body').css( 'background-color' );
var BODY_BGCOLOR_DARK = '#5B5050';
var DEFAULT_INVENTORY = [ 'Фродо', 'Сэм', 'Голлум', 'Кольцо' ];

var COOKIE = 'elem'; // cookie name

// Array of COMBO keys for faster parsing
var COMBO_KEYS = elem_get_obj_keys( COMBO );

// Array of BADGES keys for faster parsing
var BADGES_KEYS = elem_get_obj_keys( BADGES );

// Draggable options for elements in the play area
var dragged_twice = {
	stack: ".elem",
	drag: function( ev, ui ) {
		elem_toggle_body_bgcolor( ui.helper );
	},
	stop: function( ev, ui ) {
		// Delete if dragged outside, accept otherwise
		if( !elem_is_playable( ui.helper ) ) {
			elem_destroy( ui.helper );
		} else {
			elem_was_moved( ui.helper, $(ui.helper).attr('id') );
		}
	}
};

/****************************************** Functions, stop editing **************************************/

// Start everything
$(function() { elem_init(); });
function elem_init(){
	// elem_init_inventory();
	elem_load_game();
	elem_init_draggable();
	elem_init_droppable();
	elem_update_inventory_tooltips();
	elem_update_playable();
	elem_init_controls(); // all the misc stuff
}

// Init controls and misc stuff
function elem_init_controls() {
	// Notification system
 	$("#notify").notify();

	// Control tooltips
	$('#controls .control').tooltip();
	
	// Empty button
	$('#empty').click(function(){
		var num = parseInt( $( '#play .elem' ).length ) ;
		var speed = num < 10 ? 200 : parseInt( 2000 / num );
		$( '#play .elem' ).each( function( i, e ) {
			setTimeout(function(){
				elem_destroy( $(e) );
			}, speed*i);
		});	
	});
	
	// Reset button
	$('#reset').click(function(){
		if( $("#notify div").is(':visible') )
			return;
	
		var options = {
			button: 'Reset'
		};

		var box = elem_notify(
			'Reset the game',
			'Click "Reset" to re-initialize the game from start.',
			'confirm', options
		);
		$('#notify textarea').focus( function(){ $(this).select(); } );
		$('#notify button').click( function(){ elem_reset_game(); box.close( true ); } );

	});
	
	// Load
	$('#load').click(function(){
		if( $("#notify div").is(':visible') )
			return;
	
		var options = {
			gamecode: '',
			button: 'Load'
		};

		var box = elem_notify(
			'Load a game',
			'Paste a game code. This will overwrite your current game.',
			'loadsave', options
		);
		$('#notify textarea').focus( function(){ $(this).select(); } );
		$('#notify button').click( function(){ elem_load_game( $('#notify textarea').val(), true ); box.close( true ); } );

	});
	
	
	// Save
	// gmailto link: https://mail.google.com/mail/?view=cm&fs=1&body=zomg%0Ahello%0Aworld
	$('#save').click(function(){
		if( $("#notify div").is(':visible') )
			return;
	
		var options = {
			gamecode: elem_save_game(),
			button: 'Done'
		};

		var box = elem_notify(
			'Save your game',
			"Here is the code to save your game. Write it down or mail it to you! (It's also saved in a cookie)",
			'loadsave', options
		);
		$('#notify textarea').focus( function(){ $(this).select(); } );
		$('#notify button').click( function(){ box.close( true ); } );

	});
	
}

// Save game state in a cookie and return it
function elem_save_game() {
	var game = '';
	
	// Get badges & elements
	game += 'elements:' + inventory.toString();
	game += '&badges:'  + BADGES_KEYS.toString();
	game = elem_encode( game );
	
	// Save to cookie
	$.cookie( COOKIE, game );
	
	return game;
}

// Reset game state
function elem_reset_game() {
	$.removeCookie( COOKIE );
	inventory = DEFAULT_INVENTORY;
	elem_init_inventory();
}

// Load game state. Var from_dialog: set to true if function called from dialog box
function elem_load_game( game, from_dialog ) {
	if( game == null && from_dialog == true)
		return;

	var from_cookie = false;
	if( game == null && $.cookie( COOKIE ) != null ) {
		game = $.cookie( COOKIE );
		from_cookie = true;
	}
	
	// If there's a game cookie, attempt to read it and load game from it
	if( $.cookie( COOKIE ) ) {
	
		var decoded = [];
		try {
			// Decode game code
			game = elem_decode( game ).split('&');	// [ 'elements:this,that', 'badges:this,that' ]
			$(game).each(function( i, e ){
				e = e.split(':');
				decoded[ e[0] ] = e[1].split(',');
			});
			
			// Load inventory & badges
			inventory   = decoded['elements'];
			BADGES_KEYS = decoded['badges'];
			
			// Overwrite cookie
			if( from_cookie == false ) {
				elem_save_game();
			}
			
		} catch( err ) {
			if( from_dialog != null ) {
				elem_notify( "Oops!", "You have entered an incorrect game code. Please retry!", 'sticky' );
				return false;
			}

		}
	
	}
	
	// Init game
	elem_init_inventory();	
}

// Notify wrapper function. Optional type : "default" or empty, "sticky"
function elem_notify( title, text, type, more_options ) {
	if( title == null || text == null ) {
		return;
	}
	
	type = ( type == null ? "default" : type );
	var expires = ( type == "default" ? 3000 : 0 );
	
	var params = { title: title, text: text };
	if( more_options != null && typeof( more_options ) == 'object' ) {
		$.extend( params, more_options );
	}
	
	return $('#notify').notify( "create", type,
		params,
		{ expires: expires, speed: 1000 }
	);
}

// Init draggables
function elem_init_draggable() {
	$("#inventory .elem").draggable({
		stack: ".elem",
		helper: 'clone',
		cursor: 'pointer',
		revert: "invalid",
		containment: '#game',
		stop: function( event, ui ) {
			// if validly dropped, clone dragged element
			if( elem_is_playable( ui.helper ) ) {
				var id = elem_new_id();
				var newdiv = $( ui.helper ).clone( true );
				$( newdiv ).attr( 'id', id ).appendTo( '#play' );
				$( newdiv ).draggable();
				$( newdiv ).draggable( 'option', dragged_twice );
				$( newdiv ).dblclick(function(){
					elem_clone_playable_element( newdiv );
				});;
				elem_was_moved( newdiv, id );
			}
		},
		start: function( ev, ui ) {
			$(ui.helper).css('z-index', 10000 );
		},
		drag: function( ev, ui ) {
		
		}
	});
}


// Init droppable
function elem_init_droppable() {
	$( "#play" ).droppable({
		accept: "#game div.elem",
		stack: ".elem",
		tolerance: 'fit',
		drop: function( event, ui ) {

		}
	});
}

// Bind body color and element playability
function elem_toggle_body_bgcolor( elem ) {
	if( elem_is_playable( elem ) ) {
		$('body').css('background-color', BODY_BGCOLOR );
	} else {
		$('body').css('background-color', BODY_BGCOLOR_DARK );
	}
}

// Return random ID
function elem_new_id() {
	return ( 'id_' + Math.floor(Math.random()*1000000) );
}

// An element was moved. Performs checks.
function elem_was_moved( el, id ) {

	// Check if element has an id (not sure why it's not passed the 1st time...)
	if( $(el).attr('id') == null && id != null ) {
		$(el).attr( 'id', id );
	}
	
	// Update list of playable elements
	elem_update_playable();
	// var all = []; $(playable).each(function(i,e){all.push( e.name );} );console.log( all.toString() );

	// Current object coordinates
	var p = $(el).position();
	var top  = parseInt( p.top );
	var left = parseInt( p.left );
	
	// Check if element dropped on another one
	$( playable ).each( function( i, e ) {
		// compare dropped element with all others
		if( e.id != id ) {
			if( Math.abs( parseInt( top - e.top ) ) <= ELEMENT_PROXIMITY && Math.abs( parseInt( left - e.left ) ) <= ELEMENT_PROXIMITY ) {

				// We have an overlap. Is it a COMBO ?
				var new_elems = elem_is_combo( elem_get_name( el ), e.name );
				if( new_elems ) {
					// OMG! Combo!

					// Destroy the two elements
					$( $('#'+e.id) ).hide("puff", {}, 500);
					elem_destroy( $( '#'+e.id ) );
					$( $('#'+id) ).hide("puff", {}, 500);
					elem_destroy( $('#'+id) );

					// Spring new element(s)
					$( new_elems ).each( function( i, e ) {
						setTimeout(function(){
							elem_add_to_play_area( e, top, left );
						}, 300*i);
					});
					
					// Add new element(s) to inventory and update game cookie
					$( new_elems ).each( function( i, e ) {
						if( !elem_in_inventory( e ) ) {
							elem_add_new_elements_to_inventory( new_elems );
						}
					});
				}
			}
		}
	});
}

// Add new elements to inventory (global array and div)
// faster == true : faster anim, no popup
function elem_add_new_elements_to_inventory( new_elems, faster ) {

	var speed = parseInt( 1500 / new_elems.length );
	
	// Add elements to inventory array (remove duplicates if any)
	//$.merge( inventory, new_elems );
	//var inventory_unique = [];
	$.each( new_elems, function( i, el ){
		if( $.inArray( el, inventory ) === -1) inventory.push( el );
	});

	// Save game
	elem_save_game();
	
	// Add elements to inventory area
	$( new_elems ).each( function( i, e ) {
		setTimeout( function(){
			elem_add_to_inventory_area( e, faster );
		}, speed*i );
	});
}


// Add new element to playground
function elem_add_to_play_area( new_elem, top, left ) {
	top = top + elem_return_random( 30, 10 );
	left = left + elem_return_random( 30, 10 );
	var newdiv = $( '<div style="display:none" class="elem elem_' + new_elem + '">' + new_elem + '</div>' )
	$(newdiv)
		.appendTo( '#play' )
		.css({ top: top, left: left, position: "absolute" }).draggable();
	$(newdiv)
		.draggable( "option", dragged_twice )
		.attr( "id", elem_new_id() )
		.effect("bounce", { times:5 }, 600).fadeIn('slow');
	$(newdiv).dblclick(function(){
		elem_clone_playable_element( newdiv );
	});
	
	elem_update_playable();
}

// Clone playable element div
function elem_clone_playable_element( elem ) {
	var p = $( elem ).position();
	elem_add_to_play_area( elem_get_name( elem ), parseInt( p.top ), parseInt( p.left ) );
}

// Initialize inventory area
function elem_init_inventory() {
	$('#inventory .elem').remove();
	elem_add_new_elements_to_inventory( inventory, true );
}

// Add a new (hidden) div element to the inventory
function elem_add_new_div_to_inventory( name ) {
	var html_name = name.replace(/ /, '_');
	var newdiv = $( '<div style="display:none" class="elem elem_' + html_name + '">' + name + '</div>' )
	$('#divclear').before( newdiv );
	return( newdiv );
}

// Add new element to inventory
function elem_add_to_inventory_area( new_elem, do_it_fast ) {
	var newdiv = elem_add_new_div_to_inventory( new_elem );
	elem_init_draggable();
	var speed = ( do_it_fast == true ? 300 : 1000 );
	$(newdiv).show( "drop", { direction: "up" }, speed );
	elem_update_inventory_tooltips();
	//elem_update_fragment( new_elem );
	if( do_it_fast != true ) {
		elem_notify( "New element !", "You have created <b>" + new_elem + "</b>" );
	}
}

// Update URL fragment with new elem
function elem_update_fragment( elem ) {
	var hash = elem_decode( document.location.hash );
	if( hash !== '' ) {
		hash = hash + ',' ;
	}
	document.location.hash = elem_encode( hash + elem );
}

// Encrypt string. TODO: make something at least a bit more cryptic.
function elem_encode( str ) {
	return ( Base64.encode ( str ) );
	// return lzw_encode( Base64.encode ( str ) );
	// return elem_rot13( Base64.encode ( str ) );
}

// Decrypt string
function elem_decode( str ) {
	return ( Base64.decode ( str ) );
	// return lzw_decode( Base64.decode ( str ) );
	// return elem_rot13( Base64.decode ( str ) );
}

// Rot13. OMG this will be undecypherable!!1!
function elem_rot13( str ){
    return str.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}

// Check if element already in inventory
function elem_in_inventory( elem ) {
	return ( $.inArray( elem, inventory ) > -1 );
}


// Update tooltips in the inventory area
function elem_update_inventory_tooltips() {
	$("#inventory .elem").tooltip();
}


// Check if two elements make a COMBO
function elem_is_combo( elem1, elem2 ) {
	return alchemy.combine( elem1, elem2 );
	
	/*
	// Previous method, for reference, because it's interesting: how to compare 2 arrays
	// (interesting, but not fast probably: go through the whole object
	
	// TODO: when we have 200+ elements, benchmarks the 2 methods
	
 	var test_combo = [ elem1, elem2 ];

	var elems = [];
	for( var elem in COMBO ) {
		// Compare 2 arrays: http://stackoverflow.com/questions/1773069/using-jquery-to-compare-two-arrays
		if( $(COMBO[elem].needs).not(test_combo).length == 0 && $(test_combo).not(COMBO[elem].needs).length == 0 ) {
			elems.push( elem );
		}
	}
	return( elems );
	*/
}

// Return random number, positive or negative, abs value between max and min
function elem_return_random( max, min ) {
	min = ( min == null ? 0 : parseInt( min ) );
	max = parseInt( max - min );
	var sign = [ 2 * Math.floor( Math.random() * 2 ) -1 ]; // 1 or -1
	var num  = [ Math.floor( Math.random()* max + min ) ];
	return( parseInt( sign * num ) );
}


// Destroy an element, in a bit fancy way
function elem_destroy( el ) {
	el.animate(
		// properties 
		{ 	height: parseInt( el.height() / 4 ) + 'px',
			width: parseInt( el.width() / 4 ) + 'px',
			opacity: 0.1,
			borderSpacing: elem_return_random( 290, 10 )
		}, 
		// options
		{ 	duration: 400, 
			easing: "linear",
			step: function( now,fx ) {
				$(this).css('-webkit-transform','rotate('+now+'deg)');
				$(this).css('-moz-transform','rotate('+now+'deg)'); 
				$(this).css('transform','rotate('+now+'deg)');  
			},
			complete: function() {
				$( el ).remove();
				elem_update_playable();
				$('body').css( 'background-color', BODY_BGCOLOR )
			}
		}
	);
}


// Verify if an element has been dropped in the play area and return true if so
function elem_is_playable( el ) {
	// dropped element
	var p = $(el).position()
	var top  = parseInt( p.top );
	var left = parseInt( p.left );
	var width = $(el).width();
	var height = $(el).height();
	
	// play area
	p = $('#play').position();
	var play_top  = p.top;
	var play_left = p.left;
	var play_width = $('#play').width();
	var play_height = $('#play').height();
	
	// check if element is inside play area
	return(
		   ( play_top + 10 ) <= top
		&& ( play_left ) <= left
		&& ( ( play_top + play_height + 15 ) >= ( top + height ) )
		&& ( ( play_left + play_width + 10 ) >= ( left + width ) )
	);
}

// Update a global array of all playable elems and their coordinates
function elem_update_playable() {
	playable = [];
	$('#play .elem').each( function( i, e ) {
		var name = elem_get_name( e );
		var p = $(e).position()
		var top = parseInt( p.top );
		var left = parseInt( p.left );
		var id = $(e).attr( 'id' );
		playable.push( { id: id, name: name, top: top, left: left } );
	});
}


// Get element name
function elem_get_name( el ) {
	var name = $( el ).attr('class');
	var matches = name.match(/elem_(\S+)\s+/);
	name = matches[1].replace(/_/, ' ');
	return ( name );
}

// Return array of object keys
function elem_get_obj_keys( obj ) {
	var result = [];
	for( var key in obj ) {
		result.push( key );
	}
	return result;
}

/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
 
var Base64 = {
 
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = Base64._utf8_encode(input);
 
		while (i < input.length) {
 
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
 
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
		}
 
		return output;
	},
 
	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
		while (i < input.length) {
 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));
 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
 
			output = output + String.fromCharCode(chr1);
 
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
 
		}
 
		output = Base64._utf8_decode(output);
 
		return output;
 
	},
 
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	},
 
	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
 
		while ( i < utftext.length ) {
 
			c = utftext.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
 
		return string;
	}
 
}

/**
*
*  LZW encode / decode
*  http://stackoverflow.com/a/294421/36850
*
**/

// LZW-compress a string
function lzw_encode(s) {
    var dict = {};
    var data = (s + "").split("");
    var out = [];
    var currChar;
    var phrase = data[0];
    var code = 256;
    for (var i=1; i<data.length; i++) {
        currChar=data[i];
        if (dict[phrase + currChar] != null) {
            phrase += currChar;
        }
        else {
            out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
            dict[phrase + currChar] = code;
            code++;
            phrase=currChar;
        }
    }
    out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
    for (var i=0; i<out.length; i++) {
        out[i] = String.fromCharCode(out[i]);
    }
    return out.join("");
}

// Decompress an LZW-encoded string
function lzw_decode(s) {
    var dict = {};
    var data = (s + "").split("");
    var currChar = data[0];
    var oldPhrase = currChar;
    var out = [currChar];
    var code = 256;
    var phrase;
    for (var i=1; i<data.length; i++) {
        var currCode = data[i].charCodeAt(0);
        if (currCode < 256) {
            phrase = data[i];
        }
        else {
           phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict[code] = oldPhrase + currChar;
        code++;
        oldPhrase = phrase;
    }
    return out.join("");
}

// Linq queries. ZOMG now that's serious business, see http://stackoverflow.com/a/13317272/36850

// the Alchemy class
function Alchemy( stuff ) {
	var recipes = Enumerable.From(stuff).ToLookup(
		"$.Value.needs",
		"$.Key", 
		"Enumerable.From($).OrderBy().ToString('+')"
	);
    
	// Attempt element combo, return array of new elements created if applicable, or null
	this.combine = function(elem1, elem2) {
		return recipes.Get([elem1, elem2]).source;
	};
};
var alchemy = new Alchemy( COMBO );

/*
Usage:
console.log(alchemy.combine('Earth', 'Water'));   // [ "Mud" , "Boue" ]
console.log(alchemy.combine('Earth', 'Earth')); // undefined
console.log(alchemy.combine('Fire', 'Water')); // [ "Steam" ]
*/

