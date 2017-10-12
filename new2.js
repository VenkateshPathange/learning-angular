var myApp = angular.module("test",[]);
myApp.controller("myCtr", function($scope){
    $scope.name = "venkat";

    $scope.people = [{
                        "name":"venkatesh",
                        "marks":"100"
                     },
                     {
                        "name":"venkat",
                        "marks":"80"
                     },
                     {
                        "name":"venky",
                        "marks":"90"
                     },
                    ]
});