# gm-captcha

a node captcha library using the gm module 

gm is the GraphicsMagick and ImageMagick for node

[gm document](https://github.com/aheckmann/gm)


## Getting started

First download and install [GraphicsMagick](http://www.graphicsmagick.org/) or [ImageMagick](http://www.imagemagick.org/). In Mac OS X, you can simply use [Homebrew](http://mxcl.github.io/homebrew/) and do:

    brew install imagemagick
    brew install graphicsmagick

then either use npm:

	npm install gm-captcha


## Usage

```js
var gmCaptcha = require('gm-captcha');
var options = {
	width: 100,
	height: 50,
	text: '1024'
}
// Other configurations using default parameters
var captcha  = new gmCaptcha();
var gmObj = captcha.generator(); // return a gm object
captcha.gmBuffer(gmObj, 'PNG', function (buffer) {
	// do something with buffer
});
```
## Options

<table>
	<th>filed</th><th>description</th><th>default</th>
    <tr><td>width</td><td>image width</td><td>100</td></tr>
    <tr><td>height</td><td>image height</td><td>50</td></tr>
    <tr><td>background</td><td>image background, support rgb or hex</td><td>#fff</td></tr>
    <tr><td>colorLength</td><td>the maximum color count of the point and line displayed</td><td>20</td></tr>
    <tr><td>text</td><td>the text you want to display</td><td>Random four digit</td></tr>
    <tr><td>textColor</td><td>text color, support rgb or hex</td><td>#000</td></tr>
    <tr><td>textIndent</td><td>indent, left margin of text</td><td>0</td></tr>
    <tr><td>wordSpacing</td><td>word space</td><td>25</td></tr>
    <tr><td>maxSwirl</td><td>the maximum degree of the picture center swirl</td><td>20</td></tr>
    <tr><td>maxShear</td><td>the maximum degree of the picture shear</td><td>30</td></tr>
    <tr><td>lineCount</td><td>the maximum count of line</td><td>20</td></tr>
    <tr><td>lineWidth</td><td>the width of line</td><td>1</td></tr>
    <tr><td>pointCount</td><td>the maximum count of point</td><td>500</td></tr>
    <tr><td>font</td><td>font path</td><td>DroidSansFallback</td></tr>
    <tr><td>fontSize</td><td>font size</td><td>50</td></tr>
</table>

## License

MIT License

Copyright (c) [2016] [eidonjoe]

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