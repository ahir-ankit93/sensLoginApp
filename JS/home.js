
let app= angular.module("myAppHome",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/aboutus",{
        templateUrl:"views/aboutus.html",
        controller:"myAppAboutCtrl"
    }).
    when("/contactus",{
        templateUrl:"views/contactus.html",
        controller:"myAppContactCtrl"
    }).
    when("/gallery",{
        templateUrl:"views/gallery.html"
    }).
    when("/feedback",{
        templateUrl:"views/feedback.html"
    }).otherwise({
        redirectTo:"/aboutus"
    })
});// route