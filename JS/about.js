

 angular.module("myAppHome").
 controller("myAppAboutCtrl",function($scope,$http){
     console.log("about controller")
 //  $http.get("https://api.github.com/users").then(function(item){
       $http.get("/views/data.json").then(function(item){
         $scope.players=item.data;
     })
 })
 