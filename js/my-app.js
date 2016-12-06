// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('Ianuarie', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('Februarie', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('Martie', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('Aprilie', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('Mai', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('Iunie', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('Iulie', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('August', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('Septembrie', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('Octombrie', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('Noiembrie', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('Decembrie', function (page) {
    // Do something here for "about" page

})