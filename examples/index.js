var isArray = require( './../lib' );

// Positive validation:
console.log( isArray( [] ) );

/**
* Returns:
*	true
*/

// Negative validation:
console.log( isArray( {} ) );

/**
* Returns:
*	false
*/