"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "shardize",
			"path": "shardize/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/shardize.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"shardize": "shardize"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const shardize = require( "./shardize.js" );
//: @end-server

//: @client:
const shardize = require( "./shardize.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "shardize", ( ) => {

	describe(`"shardize( "Hello World" )"`, ( ) => {
		it("should have value 'hello-world'", ( ) => {

			assert.equal( shardize( "Hello World" ), "hello-world" );

		});
	});

	describe(`"shardize( "hello_world" )"`, ( ) => {
		it("should have value 'hello-world'", ( ) => {

			assert.equal( shardize( "hello_world" ), "hello-world" );

		});
	});

	describe(`"shardize( "helloWorld" )"`, ( ) => {
		it("should have value 'hello-world'", ( ) => {

			assert.equal( shardize( "helloWorld" ), "hello-world");

		});
	});

	describe(`"shardize( "hello world" )"`, ( ) => {
		it("should have value 'hello-world'" , ( ) => {

			assert.equal( shardize( "hello world" ), "hello-world" );

		});
	});

} );


//: @end-server


//: @client:

describe( "shardize", ( ) => {

	describe(`"shardize( "Hello World" )"`, ( ) => {
		it("should have value 'hello-world'", ( ) => {

			assert.equal( shardize( "Hello World" ), "hello-world" );

		});
	});

	describe(`"shardize( "hello_world" )"`, ( ) => {
		it("should have value 'hello-world'", ( ) => {

			assert.equal( shardize( "hello_world" ), "hello-world" );

		});
	});

	describe(`"shardize( "helloWorld" )"`, ( ) => {
		it("should have value 'hello-world'", ( ) => {

			assert.equal( shardize( "helloWorld" ), "hello-world");

		});
	});

	describe(`"shardize( "hello world" )"`, ( ) => {
		it("should have value 'hello-world'" , ( ) => {

			assert.equal( shardize( "hello world" ), "hello-world" );

		});
	});

} );

//: @end-client


//: @bridge:

describe( "shardize", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( `shardize( "Hello World" )`, ( ) => {
		it( `"should be equal to 'hello-world'`, ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return shardize( "Hello World" );
				}

			).value;

			assert.equal( result, "hello-world" );

		} );
	} );


	describe( `shardize( "hello_world" )`, ( ) => {
		it( `should be equal to "hello-world"`, ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){

					return shardize( "hello_world" );

				}

			).value;

			assert.equal( result, "hello-world" );

		} );
	} );


	describe( `shardize( "helloWorld" )`, ( ) => {
		it( `should be equal to "hello-world"`, ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return shardize( "helloWorld" );
				}

			).value;

			assert.equal( result, "hello-world" );

		} );
	} );
	

	describe( `shardize( "hello world" )`, ( ) => {
		it( `should be equal to "hello-world"`, ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return shardize( "hello world" );
				}

			).value;

			assert.equal( result, "hello-world" );

		} );
	} );

} );

//: @end-bridge
