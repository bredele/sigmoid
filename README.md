# Sigmoid

A sigmoid function is a bounded differentiable real function that is defined for all real input values and has a positive derivative at each point.

## usage

```js
  var sigmoid = require('sigmoid');
  sigmoid(0); // => 0.5
  sigmoid(1); // => 0.7310585786300049
  sigmoid(10); // => 0.9999546021312976
  sigmoid(-10); // => 0.00004539786870243441
```

The shape of a sigmoid function is a smoothed out version of a step function : it gives values between 0 and 1 for all positive or negative numbers. 

## license

The MIT License (MIT)

Copyright (c) 2015 Olivier Wietrich

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

