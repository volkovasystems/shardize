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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwic2hhcmRpemUiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxXQUFXRCxRQUFTLHVCQUFULENBQWpCO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxVQUFWLEVBQXNCLFlBQU87O0FBRTVCQSxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUksa0NBQUosRUFBd0MsWUFBTzs7QUFFOUNKLFVBQU9LLEtBQVAsQ0FBY0gsU0FBVSxhQUFWLENBQWQsRUFBeUMsYUFBekM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsNkJBQVYsRUFBeUMsWUFBTztBQUMvQ0MsS0FBSSxrQ0FBSixFQUF3QyxZQUFPOztBQUU5Q0osVUFBT0ssS0FBUCxDQUFjSCxTQUFVLGFBQVYsQ0FBZCxFQUF5QyxhQUF6Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSw0QkFBVixFQUF3QyxZQUFPO0FBQzlDQyxLQUFJLGtDQUFKLEVBQXdDLFlBQU87O0FBRTlDSixVQUFPSyxLQUFQLENBQWNILFNBQVUsWUFBVixDQUFkLEVBQXdDLGFBQXhDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUksa0NBQUosRUFBeUMsWUFBTzs7QUFFL0NKLFVBQU9LLEtBQVAsQ0FBY0gsU0FBVSxhQUFWLENBQWQsRUFBeUMsYUFBekM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUEsQ0FsQ0Q7QUFtQ0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJzaGFyZGl6ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwic2hhcmRpemUvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3NoYXJkaXplLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJzaGFyZGl6ZVwiOiBcInNoYXJkaXplXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBzaGFyZGl6ZSA9IHJlcXVpcmUoIFwiLi9zaGFyZGl6ZS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcInNoYXJkaXplXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYHNoYXJkaXplKCAnSGVsbG8gV29ybGQnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdoZWxsby13b3JsZCdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzaGFyZGl6ZSggXCJIZWxsbyBXb3JsZFwiICksIFwiaGVsbG8td29ybGRcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHNoYXJkaXplKCAnaGVsbG9fd29ybGQnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdoZWxsby13b3JsZCdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzaGFyZGl6ZSggXCJoZWxsb193b3JsZFwiICksIFwiaGVsbG8td29ybGRcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHNoYXJkaXplKCAnaGVsbG9Xb3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvLXdvcmxkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHNoYXJkaXplKCBcImhlbGxvV29ybGRcIiApLCBcImhlbGxvLXdvcmxkXCIpO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHNoYXJkaXplKCAnaGVsbG8gd29ybGQnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdoZWxsby13b3JsZCdcIiAsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggc2hhcmRpemUoIFwiaGVsbG8gd29ybGRcIiApLCBcImhlbGxvLXdvcmxkXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
