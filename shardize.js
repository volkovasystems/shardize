/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

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
	@end-module-license

	@module-configuration:
		{
			"packageName": "shardize",
			"fileName": "shardize.js",
			"moduleName": "shardize",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/shardize.git",
			"testCase": "shardize-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation
*/

if( !( typeof window != "undefined" &&
	"harden" in window ) )
{
	var harden = require( "harden" );
}

if( typeof window != "undefined" && 
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" ); 
}

var shardize = function shardize( text, formal ){
	/*:
		@meta-configuration:
			{
				"text:required": "string",
				"formal:optional": "boolean"
			}
		@end-meta-configuration
	*/

	if( !text ){
		return text;
	}

	if( shardize.TEXT_PATTERN.test( text ) ){
		if( formal ){
			text = text[ 0 ].toLowerCase( ) + text.substring( 1 );
		}

		if( shardize.FULL_UPPERCASE_PATTERN.test( text ) ){
			text = text.toLowerCase( );
		}

		return text
			.replace( shardize.TERM_PATTERN,
				function onReplaced( match, divideCharacter ){
					if( shardize.UPPERCASE_PATTERN.test( divideCharacter ) ){
						return match.replace( divideCharacter, "-" + divideCharacter.toLowerCase( ) );

					}else if( divideCharacter && divideCharacter != "-" ){
						return match.replace( divideCharacter, "-" );
						
					}else{
						return match;
					}
				} )
			.toLowerCase( );

	}else{
		return text;
	}
};

harden.bind( shardize )
	( "TEXT_PATTERN",
		/^(?:[a-zA-Z][a-zA-Z0-9]*[-_ ]?)*[a-zA-Z][a-zA-Z0-9]*$/ );

harden.bind( shardize )
	( "TERM_PATTERN",
		/^[a-z]|([-A-Z_ ])[a-zA-Z]/g );

harden.bind( shardize )	
	( "UPPERCASE_PATTERN",
		/[A-Z]/ );

harden.bind( shardize )	
	( "FULL_UPPERCASE_PATTERN",
		/^(?:[A-Z][A-Z0-9]*[-_ ]?)*[A-Z][A-Z0-9]*$/ );

if( typeof module != "undefined" ){ 
	module.exports = shardize; 
}

if( typeof global != "undefined" ){
	harden
		.bind( shardize )( "globalize", 
			function globalize( ){
				harden.bind( global )( "shardize", shardize );
			} );
}