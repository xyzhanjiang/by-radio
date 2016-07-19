# Radio Plugin

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

## Browser support

* Modern browsers
* Microsoft Internet Explorer 9.0+

## License

[MIT License](https://zenorocha.mit-license.org)