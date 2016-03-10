/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

function myEventHandler() {
    "use strict";

    var ua = navigator.userAgent;
    var str;

    if (window.Cordova && dev.isDeviceReady.c_cordova_ready__) {
        str = "It worked! Cordova device ready detected at " + dev.isDeviceReady.c_cordova_ready__ + " milliseconds!";
    } else if (window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______) {
        str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!";
    } else {
        str = "Bad device ready, or none available because we're running in a browser.";
    }

    alert(str);
}


// ...additional event handlers here...

function emulatorAlert() {
    alert("This feature is not supported on the emulator. Please test on app preview or as a built app");
}

function extPage() {
    "use strict";
    var fName = "extPage():";
    console.log(fName, "entry");
    try {
        var ref = window.open('http://html5test.com', '_blank', 'location=yes');
        console.log(fName, "try, success");
    } catch (e) {
        console.log(fName, "catch, failure");
    }

    console.log(fName, "exit");
}


function extPageTimed() {
    "use strict";
    var fName = "extPageTimed():";
    console.log(fName, "entry");
    try {
        var ref = window.open('http://html5test.com', '_blank', 'location=yes');
        setTimeout(function () {
            ref.close();
        }, 3000);
        console.log(fName, "try, success");
    } catch (e) {
        console.log(fName, "catch, failure");
    }

    console.log(fName, "exit");
}


function extPageSysBrowser() {
    "use strict";
    var fName = "extPageSysBrowser():";
    console.log(fName, "entry");
    try {
        if (window.tinyHippos) {
            emulatorAlert();
            console.log(fName, "emulator alert");
        } else {
            var ref = window.open('http://html5test.com', '_system', 'location=yes');
            console.log(fName, "try, success");
        }
    } catch (e) {
        console.log(fName, "catch, failure");
    }

    console.log(fName, "exit");
}


function localImg() {
    "use strict";
    var fName = "localImg():";
    console.log(fName, "entry");
    try {
        var ref = window.open('images/coffee.jpg', '_blank', 'location=yes');
        console.log(fName, "try, success");
    } catch (e) {
        console.log(fName, "catch, failure");
    }

    console.log(fName, "exit");
}