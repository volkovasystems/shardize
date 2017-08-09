"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "shardize",
              			"path": "shardize/shardize.js",
              			"file": "shardize.js",
              			"module": "shardize",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/shardize.git",
              			"test": "shardize-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Transform any human readable alphanumeric string divided by certain
              			characters into dash separated form.
              	@end-module-documentation
              
              	@include:
              		{
              			"disdo": "disdo",
              			"falzy": "falzy"
              		}
              	@end-include
              */

var disdo = require("disdo");
var falzy = require("falzy");

var SPACE_PATTERN = /\s+/g;

var shardize = function shardize(text) {
	/*;
                                        	@meta-configuration:
                                        		{
                                        			"text:required": "string"
                                        		}
                                        	@end-meta-configuration
                                        */

	if (falzy(text) || typeof text != "string") {
		return text;
	}

	return disdo(text).toLowerCase().replace(SPACE_PATTERN, "-");
};

module.exports = shardize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJkaXplLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZGlzZG8iLCJyZXF1aXJlIiwiZmFsenkiLCJTUEFDRV9QQVRURVJOIiwic2hhcmRpemUiLCJ0ZXh0IiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxnQkFBZ0IsTUFBdEI7O0FBRUEsSUFBTUMsV0FBVyxTQUFTQSxRQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUN6Qzs7Ozs7Ozs7QUFRQSxLQUFJSCxNQUFPRyxJQUFQLEtBQWlCLE9BQU9BLElBQVAsSUFBZSxRQUFwQyxFQUE4QztBQUM3QyxTQUFPQSxJQUFQO0FBQ0E7O0FBRUQsUUFBT0wsTUFBT0ssSUFBUCxFQUFjQyxXQUFkLEdBQTZCQyxPQUE3QixDQUFzQ0osYUFBdEMsRUFBcUQsR0FBckQsQ0FBUDtBQUNBLENBZEQ7O0FBZ0JBSyxPQUFPQyxPQUFQLEdBQWlCTCxRQUFqQiIsImZpbGUiOiJzaGFyZGl6ZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJzaGFyZGl6ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwic2hhcmRpemUvc2hhcmRpemUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInNoYXJkaXplLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInNoYXJkaXplXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9zaGFyZGl6ZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInNoYXJkaXplLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0VHJhbnNmb3JtIGFueSBodW1hbiByZWFkYWJsZSBhbHBoYW51bWVyaWMgc3RyaW5nIGRpdmlkZWQgYnkgY2VydGFpblxuXHRcdFx0Y2hhcmFjdGVycyBpbnRvIGRhc2ggc2VwYXJhdGVkIGZvcm0uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImRpc2RvXCI6IFwiZGlzZG9cIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGRpc2RvID0gcmVxdWlyZSggXCJkaXNkb1wiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuXG5jb25zdCBTUEFDRV9QQVRURVJOID0gL1xccysvZztcblxuY29uc3Qgc2hhcmRpemUgPSBmdW5jdGlvbiBzaGFyZGl6ZSggdGV4dCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInRleHQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCB0ZXh0ICkgfHwgdHlwZW9mIHRleHQgIT0gXCJzdHJpbmdcIiApe1xuXHRcdHJldHVybiB0ZXh0O1xuXHR9XG5cblx0cmV0dXJuIGRpc2RvKCB0ZXh0ICkudG9Mb3dlckNhc2UoICkucmVwbGFjZSggU1BBQ0VfUEFUVEVSTiwgXCItXCIgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhcmRpemU7XG4iXX0=
//# sourceMappingURL=shardize.support.js.map
