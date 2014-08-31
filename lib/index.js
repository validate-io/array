/**
*
*	VALIDATE: array
*
*
*	DESCRIPTION:
*		- Validates if a value is an array.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: isArray( value )
	*	Validates if a value is an array.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is an array
	*/
	function isArray( value ) {
		if ( !Array.isArray( value ) ) {
			return false;
		}
		return true;
	} // end FUNCTION isArray()


	// EXPORTS //

	module.exports = isArray;

})();