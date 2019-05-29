app.controller('AppController', ['$scope',function($scope){
    var self=this;
    self.submit = function(){
        console.log("Form is submitted", $scope.user);
    };
}]);