# By Radio

[![Build Status](https://travis-ci.org/xyzhanjiang/by-radio.svg?branch=master)](https://travis-ci.org/xyzhanjiang/by-radio)

A radio and checkbox plugin without image. Demo: [https://xyzhanjiang.github.io/by-radio/](https://xyzhanjiang.github.io/by-radio/)

## Install

``` shell
npm install --save by-radio
```

## Usage

1. Include plugin's code:

``` html
<link rel="stylesheet" href="by-radio/dist/by-radio.css">
```

or

``` javascript
import 'by-radio'
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

or no id property:

``` html
<!-- radio -->
<label class="by-radio">
  <input name="gender" type="radio" value="female">
  <span class="by-radio-item">Radio</span>
</label>

<!-- or checkbox -->
<label class="by-checkbox">
  <input name="favourite" type="checkbox" value="apple">
  <span class="by-checkbox-item">Checkbox</span>
</label>

<!-- or switch -->
<label class="by-switch">
  <input name="wifi" type="checkbox" value="on">
  <span class="by-switch-item">Switch</span>
</label>
```

## Customize

In a **.scss** file

``` css
$by-radio-color: #36f;
@import 'by-radio/src/by-radio.scss'
```

## Browser support

* Google Chrome
* Microsoft Internet Explorer 9.0+

## License

MIT License
