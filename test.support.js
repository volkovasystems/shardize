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
		it("should have value 'hello-world'", function () {

			assert.equal(shardize("Hello World"), "hello-world");

		});
	});


	describe("`shardize( 'hello_world' )`", function () {
		it("should have value 'hello-world'", function () {

			assert.equal(shardize("hello_world"), "hello-world");

		});
	});


	describe("`shardize( 'helloWorld' )`", function () {
		it("should have value 'hello-world'", function () {

			assert.equal(shardize("helloWorld"), "hello-world");

		});
	});


	describe("`shardize( 'hello world' )`", function () {
		it("should have value 'hello-world'", function () {

			assert.equal(shardize("hello world"), "hello-world");

		});
	});
});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwic2hhcmRpemUiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxXQUFXRCxRQUFTLHVCQUFULENBQWpCO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxVQUFWLEVBQXNCLFlBQU87O0FBRTVCQSxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUksaUNBQUosRUFBdUMsWUFBTzs7QUFFN0NKLFVBQU9LLEtBQVAsQ0FBY0gsU0FBVSxhQUFWLENBQWQsRUFBeUMsYUFBekM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUksaUNBQUosRUFBdUMsWUFBTzs7QUFFN0NKLFVBQU9LLEtBQVAsQ0FBY0gsU0FBVSxhQUFWLENBQWQsRUFBeUMsYUFBekM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLDRCQUFWLEVBQXdDLFlBQU87QUFDOUNDLEtBQUksaUNBQUosRUFBdUMsWUFBTzs7QUFFN0NKLFVBQU9LLEtBQVAsQ0FBY0gsU0FBVSxZQUFWLENBQWQsRUFBd0MsYUFBeEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUksaUNBQUosRUFBd0MsWUFBTzs7QUFFOUNKLFVBQU9LLEtBQVAsQ0FBY0gsU0FBVSxhQUFWLENBQWQsRUFBeUMsYUFBekM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7QUFPQSxDQXBDRDtBQXFDQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwic2hhcmRpemVcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwic2hhcmRpemUvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3NoYXJkaXplLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwic2hhcmRpemVcIjogXCJzaGFyZGl6ZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCBzaGFyZGl6ZSA9IHJlcXVpcmUoIFwiLi9zaGFyZGl6ZS5zdXBwb3J0LmpzXCIgKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5cclxuZGVzY3JpYmUoIFwic2hhcmRpemVcIiwgKCApID0+IHtcclxuXHRcclxuXHRkZXNjcmliZSggXCJgc2hhcmRpemUoICdIZWxsbyBXb3JsZCcgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlICdoZWxsby13b3JsZCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggc2hhcmRpemUoIFwiSGVsbG8gV29ybGRcIiApLCBcImhlbGxvLXdvcmxkXCIgKTtcclxuXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBzaGFyZGl6ZSggJ2hlbGxvX3dvcmxkJyApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGhhdmUgdmFsdWUgJ2hlbGxvLXdvcmxkJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzaGFyZGl6ZSggXCJoZWxsb193b3JsZFwiICksIFwiaGVsbG8td29ybGRcIiApO1xyXG5cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHNoYXJkaXplKCAnaGVsbG9Xb3JsZCcgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlICdoZWxsby13b3JsZCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggc2hhcmRpemUoIFwiaGVsbG9Xb3JsZFwiICksIFwiaGVsbG8td29ybGRcIik7XHJcblxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgc2hhcmRpemUoICdoZWxsbyB3b3JsZCcgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlICdoZWxsby13b3JsZCdcIiAsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHNoYXJkaXplKCBcImhlbGxvIHdvcmxkXCIgKSwgXCJoZWxsby13b3JsZFwiICk7XHJcblxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0gKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
