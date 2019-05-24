app.controller("AppController", [function($scope){
    $scope.submit = function(){
        console.log("Form is submitted", $scope.user);
    };
}]);