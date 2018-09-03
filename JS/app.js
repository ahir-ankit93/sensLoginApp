var app = angular.module("myApp", []);

app.controller("myAppCtrl", function ($scope, $window) {

    $scope.removeUser = function (user) {

        var removeUser = $scope.users.indexOf(user);
        $scope.users.splice(removeUser, 1);
        localStorage.setItem("users", JSON.stringify($scope.users));

    }

    $scope.addUsers = function (user) {
        

        var a = localStorage.getItem("users")

        // console.log("stringify",JSON.stringify(a))
        var b = JSON.parse(a)
        if (b != null) {
            var exist =false;
            for (var i = 0; i < b.length; i++) {
                // console.log( "!!!!!!!!!!!!!!!!!!!!",b[i].username,$scope.newUserName)
                // console.log( "!!!!!!!!!!!!!!!!!!!!",b[i].password)

                if ($scope.newUserName == b[i].username) {
                    exist=true;
                    // alert("username already exist")
                    break;
                }
            }
                 if(!exist) {

                    $scope.users.push({
                        username: $scope.newUserName,
                        password: $scope.newPassword
                    })

                    localStorage.setItem("users", JSON.stringify($scope.users));
                    // console.log("#########################",$scope.users)

                    // $scope.newUserName = "";
                    // $scope.newPassword = "";

                }else{
                    alert("username already exist");
                }
            
        } else if(b == null){

            $scope.users.push({
                username: $scope.newUserName,
                password: $scope.newPassword

            })

            localStorage.setItem("users", JSON.stringify($scope.users));
            // console.log("#########################",$scope.users)

            $scope.newUserName = "";
            $scope.newPassword = "";

        }

    }


    $scope.validate = function (user) {

        var a = localStorage.getItem("users")
        // console.log("stringify",JSON.stringify(a))
        var b = JSON.parse(a)
        var exist =false;
        for (var i = 0; i <= b.length; i++) {
            // console.log( "!!!!!!!!!!!!!!!!!!!!",b[i].username,$scope.newUserName)
            // console.log( "!!!!!!!!!!!!!!!!!!!!",b[i].password)

            if ($scope.newUserName == b[i].username && $scope.newPassword == b[i].password) {
                // $location.path('home.html');
                 exist=true;

                $window.location.href = '/home.html';
            } 
        }
            if(!exist) {
                alert("user does not exist");
            }

        // for (var i = 0; i <= b.length; i++) {
        //     // console.log( "!!!!!!!!!!!!!!!!!!!!",b[i].username,$scope.newUserName)
        //     // console.log( "!!!!!!!!!!!!!!!!!!!!",b[i].password)

        //     if ($scope.newUserName == b[i].username && $scope.newPassword == b[i].password) {
        //         // $location.path('home.html');
        //         $window.location.href = '/home.html';
        //     } else {
        //         alert("user does not exist");
        //     }

        // }


    }


    if (localStorage.getItem("users") === null) {
        $scope.users = [];
        localStorage.setItem("items", JSON.stringify($scope.users));
    } else {
        $scope.users = JSON.parse(localStorage.getItem("users"));
    }

    // $scope.users = [
    //     {
    //         username:"ankit",
    //         password:"abc"
    //     },
    //     {
    //         username:"ajay",
    //         password:"xyz"
    //     }
    // ]



});



