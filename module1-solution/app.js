(function () {
    'use strict';
    
    angular.module('M1App', [])
    .controller('M1Controller', M1Controller);
    
    M1Controller.$inject = ['$scope'];
    function M1Controller($scope) {
       $scope.message='';
       $scope.dishes='';
       $scope.checker=function(){
        var arr = $scope.dishes.split(",");
        if($scope.dishes == ''){
            $scope.message='entre your dishes!'
        }
        else if(arr.length <= 3){
            $scope.message="Enjoy!";
        }
        else{
            $scope.message="Too much!";
        }
       }

    }
})();