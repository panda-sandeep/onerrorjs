// create jvaas namespace
var jvaas = jvaas || {};
jvaas.resubmitError = function (error) {
    window.setTimeout(function () {
        if (jvaas.submitError) {
            jvaas.submitError(error);
        }
    }, 10000);
}

// make sure that window.onerror is supported as precaution we don't want to cause errors when trying to capture errors
if (window.hasOwnProperty("onerror")) {
    window.onerror = function (a, b, c, d, e, f, g, h) {
        // all our code should be in a try-catch to not trigger errors - if we don't, expect an infinite loop
        try {

            // uncomment to test the try-catch handler
            //invalidFunctionThatWillCauseError();

            var data = [];
            if (a) {
                data.push(a);
            }
            if (b) {
                data.push(b);
            }
            if (c) {
                data.push(c);
            }
            if (d) {
                data.push(d);
            }
            if (e) {
                data.push(e);
            }
            if (f) {
                data.push(f);
            }
            if (g) {
                data.push(g);
            }
            if (h) {
                data.push(h);
            }

            var error = {};
            error["date"] = new Date().toISOString();
            error["data"] = data;
            error["url"] = window.location.href;
            error["userAgent"] = navigator.userAgent;

            // submit error if handler is implemented
            if (jvaas.submitError) {
                jvaas.submitError(error);
            }

        } catch (error) {
            // any errors in our try catch should shown no matter what, even if we have to alert()
            if (window.console) {
                console.error(error);
            } else {
                window.alert(error);
            }
        }

        // return false so that we don't swallow the errors
        return false;
    };
}