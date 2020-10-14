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
<label class="by-checkable" for="radio-example">Radio</label>

<!-- or checkbox -->
<input class="by-checkbox" id="checkbox-example" type="checkbox">
<label class="by-checkable" for="checkbox-example">Checkbox</label>

<!-- or switch -->
<input class="by-switch" id="switch-example" type="checkbox">
<label class="by-checkable" for="switch-example">Switch</label>
```

or without id property

``` html
<!-- radio -->
<label>
  <input class="by-radio" type="radio">
  <span class="by-checkable">Radio</span>
</label>

<!-- or checkbox -->
<label>
  <input class="by-checkbox" type="checkbox">
  <span class="by-checkable">Checkbox</span>
</label>

<!-- or switch -->
<label>
  <input class="by-switch" type="checkbox">
  <span class="by-checkable">Switch</span>
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

## Changelog

### 2.0.0

Break change

## License

MIT License
