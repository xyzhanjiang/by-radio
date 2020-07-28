# By Radio

[![Build Status](https://travis-ci.org/xyzhanjiang/by-radio.svg?branch=master)](https://travis-ci.org/xyzhanjiang/by-radio)

A radio and checkbox plugin without image. Demo: [https://xyzhanjiang.github.io/by-radio/](https://xyzhanjiang.github.io/by-radio/)

## Usage

1. Include plugin's code:

``` html
<link rel="stylesheet" href="dist/by-radio.css">
```

or

``` javascript
import '@by/radio'
```

2. Call the plugin:

``` html
<!-- radio -->
<input class="by-radio" id="radio-example" name="gender" type="radio" value="female">
<label for="radio-example">Radio</label>

<!-- or checkbox -->
<input class="by-checkbox" id="checkbox-example" name="favourite" type="checkbox" value="apple">
<label for="checkbox-example">Checkbox</label>

<!-- or switch -->
<input class="by-switch" id="switch-example" name="wifi" type="checkbox" value="on">
<label for="switch-example">Switch</label>
```

## Browser support

* Google Chrome
* Microsoft Internet Explorer 9.0+

## License

MIT License
