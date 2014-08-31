
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-array', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( isArray ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isArray( [] ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
				5,
				{},
				true,
				'5',
				null,
				NaN,
				function(){},
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isArray( values[i] ) );
		}
	});

});