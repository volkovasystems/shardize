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

var assert = require("should");



//: @client:
var shardize = require("./shardize.support.js");
//: @end-client






//: @client:

describe("shardize", function () {

	describe("`shardize( 'Hello World' )`", function () {
		it("should be equal to 'hello-world'", function () {

			assert.equal(shardize("Hello World"), "hello-world");

		});
	});


	describe("`shardize( 'hello_world' )`", function () {
		it("should be equal to 'hello-world'", function () {

			assert.equal(shardize("hello_world"), "hello-world");

		});
	});


	describe("`shardize( 'helloWorld' )`", function () {
		it("should be equal to 'hello-world'", function () {

			assert.equal(shardize("helloWorld"), "hello-world");

		});
	});


	describe("`shardize( 'hello world' )`", function () {
		it("should be equal to 'hello-world'", function () {

			assert.equal(shardize("hello world"), "hello-world");

		});
	});
});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwic2hhcmRpemUiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxXQUFXRCxRQUFTLHVCQUFULENBQWpCO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxVQUFWLEVBQXNCLFlBQU87O0FBRTVCQSxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUksa0NBQUosRUFBd0MsWUFBTzs7QUFFOUNKLFVBQU9LLEtBQVAsQ0FBY0gsU0FBVSxhQUFWLENBQWQsRUFBeUMsYUFBekM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUksa0NBQUosRUFBd0MsWUFBTzs7QUFFOUNKLFVBQU9LLEtBQVAsQ0FBY0gsU0FBVSxhQUFWLENBQWQsRUFBeUMsYUFBekM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLDRCQUFWLEVBQXdDLFlBQU87QUFDOUNDLEtBQUksa0NBQUosRUFBd0MsWUFBTzs7QUFFOUNKLFVBQU9LLEtBQVAsQ0FBY0gsU0FBVSxZQUFWLENBQWQsRUFBd0MsYUFBeEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUksa0NBQUosRUFBeUMsWUFBTzs7QUFFL0NKLFVBQU9LLEtBQVAsQ0FBY0gsU0FBVSxhQUFWLENBQWQsRUFBeUMsYUFBekM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7QUFPQSxDQXBDRDtBQXFDQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInNoYXJkaXplXCIsXG5cdFx0XHRcInBhdGhcIjogXCJzaGFyZGl6ZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvc2hhcmRpemUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInNoYXJkaXplXCI6IFwic2hhcmRpemVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IHNoYXJkaXplID0gcmVxdWlyZSggXCIuL3NoYXJkaXplLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwic2hhcmRpemVcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgc2hhcmRpemUoICdIZWxsbyBXb3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvLXdvcmxkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHNoYXJkaXplKCBcIkhlbGxvIFdvcmxkXCIgKSwgXCJoZWxsby13b3JsZFwiICk7XG5cblx0XHR9KTtcblx0fSk7XG5cblxuXHRkZXNjcmliZSggXCJgc2hhcmRpemUoICdoZWxsb193b3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvLXdvcmxkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHNoYXJkaXplKCBcImhlbGxvX3dvcmxkXCIgKSwgXCJoZWxsby13b3JsZFwiICk7XG5cblx0XHR9KTtcblx0fSk7XG5cblxuXHRkZXNjcmliZSggXCJgc2hhcmRpemUoICdoZWxsb1dvcmxkJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnaGVsbG8td29ybGQnXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggc2hhcmRpemUoIFwiaGVsbG9Xb3JsZFwiICksIFwiaGVsbG8td29ybGRcIik7XG5cblx0XHR9KTtcblx0fSk7XG5cblxuXHRkZXNjcmliZSggXCJgc2hhcmRpemUoICdoZWxsbyB3b3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvLXdvcmxkJ1wiICwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzaGFyZGl6ZSggXCJoZWxsbyB3b3JsZFwiICksIFwiaGVsbG8td29ybGRcIiApO1xuXG5cdFx0fSk7XG5cdH0pO1xufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
