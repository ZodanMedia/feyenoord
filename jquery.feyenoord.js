/*!
 * jquery.feyenoord.js is a jQuery plugin that transforms
 * default $.ajax() calls into a more Rotterdam-friendly
 * approach.
 *
 * So, from now on you just call
 * $.feyenoord({
 *     method: "POST",
 *     url: "rest/endpoint/",
 *     data: { id: "2023", content: "kampioen" }
 * })
 * .done(function( msg ) {
 *     alert( "Feyenoord returned: " + msg );
 * });
 * 
 * 
 *
 * @author  Marten Moolenaar [zodan.nl]
 * @see     https://speelwei.zodan.nl/feyenoord/
 *
 */
(function( $ ){
	$.feyenoord = function ( data ) {
		return $.ajax( data );
	}
	$.feyenoordSetup = function ( data ) {
		return $.ajaxSetup( data );
	}
})( jQuery );