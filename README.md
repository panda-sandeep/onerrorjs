# onerrorjs
An implementation of window.onerror which allows you to see your users' JavaScript errors in your backend logs.

To make use of this library, include the following as the first include in your page:

    <script type="text/javascript" src="onerror.js"></script>

Followed by implementing `jvaas.submitError`:

    jvaas.submitError = function (error) {
      // do HTTP POST here
    }

You can use `xhr.send`, `$.POST` or whatever floats your boat, see the sample implementation in test.html

If the error submit fails, you can call `jvaas.resubmitError(error);` which will retry the submit.
