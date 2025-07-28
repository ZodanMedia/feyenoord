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
 * @version 1.0.2
 *
 */
(function( $ ){
	// check if feyenoord is already playing
	// or, in perfect Rotterdutch:
	// "ff kijke wavvorvlees we in De Kuip hebbe"
	if (typeof $.feyenoord != 'function') {
		$.feyenoord = function ( data ) {
			return $.ajax( data );
		}
		$.feyenoordSetup = function ( data ) {
			return $.ajaxSetup( data );
		}
	}
})( jQuery );
