angular.module("myAppHome").
 controller("myAppContactCtrl",function($scope,$http){
     console.log("contact controller")
 //  $http.get("https://api.github.com/users").then(function(item){
       $http.get("/views/data.json").then(function(item){
         $scope.players=item.data;
     })
 })