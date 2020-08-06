# By Radio

[![Build Status](https://travis-ci.org/xyzhanjiang/by-radio.svg?branch=master)](https://travis-ci.org/xyzhanjiang/by-radio)

A radio and checkbox plugin without image, pure CSS. Demo: [https://xyzhanjiang.github.io/by-radio/](https://xyzhanjiang.github.io/by-radio/)

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

2. Call the plugin, only HTML

``` html
<!-- radio -->
<input class="by-radio" id="radio-example" type="radio">
<label for="radio-example">Radio</label>

<!-- or checkbox -->
<input class="by-checkbox" id="checkbox-example" type="checkbox">
<label for="checkbox-example">Checkbox</label>

<!-- or switch -->
<input class="by-switch" id="switch-example" type="checkbox">
<label for="switch-example">Switch</label>
```

or without id property

``` html
<!-- radio -->
<label class="by-radio">
  <input type="radio">
  <span class="by-radio-item">Radio</span>
</label>

<!-- or checkbox -->
<label class="by-checkbox">
  <input type="checkbox">
  <span class="by-checkbox-item">Checkbox</span>
</label>

<!-- or switch -->
<label class="by-switch">
  <input type="checkbox">
  <span class="by-switch-item">Switch</span>
</label>
```

## Customize

In a **.scss** file

``` css
$by-radio-color: #36f; // Theme color
@import 'by-radio/src/by-radio.scss'
```

The control size will be the same as font size

## Browser support

* Google Chrome
* Microsoft Internet Explorer 9.0+

## License

MIT License
