# By Radio

[![Build Status](https://travis-ci.org/xyzhanjiang/by-radio.svg?branch=master)](https://travis-ci.org/xyzhanjiang/by-radio)

A radio and checkbox plugin without image.

## Usage

1. Include jQuery:

  ``` html
  <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
  ```

2. Include plugin's code:

  ``` html
  <link rel="stylesheet" href="dist/css/by-radio.css">
  <script src="dist/js/by-radio.js"></script>
  ```

3. Call the plugin:

  ``` javascript
  $(function() {
    $('input[type="radio"], input[type="checkbox"]').byRadio()
  })
  ```

4. Destroy:

  ``` javascript
  $('input[type="radio"], input[type="checkbox"]').byRadio('destroy')
  ```

### Only use the style

Also you can only use the style, but You must write the html by yourself

``` html
<link rel="stylesheet" href="dist/css/by-radio.css">

<div class="by-radio">
  <input id="radio-example" name="gender" type="radio" value="female">
  <label for="radio-example"></label>
</div>
```

## Browser support

* Modern browsers
* Microsoft Internet Explorer 9.0+

## License

MIT License