angular.module('myApp', [])
.controller('AppController', ['$scope', function($scope) {
    var self = this;

    //User Dummy Info.
    self.user={
        id:null,
        username:'',
        address:'',
        email:''
    };
    self.id = 4;
    
    //Array of Users with their properties.
    self.users = [
            
            {
                id:1, 
                username: 'Deeksha', 
                address: 'Goa', 
                email: 'deek1@cap.com'
            },
            {
                id:2, 
                username: 'Ranjana', 
                address: 'Karnataka', 
                email: 'ranj2@cg.com'
            },
            {
                id:3, 
                username: 'Leela', 
                address: 'Telangana', 
                email: 'leel3@cp.com'
            }
    ];
    

    //On Dynamically Adding users to the list
    self.submit = function() {
        if(self.user.id === null){
            self.user.id = self.id++;
            console.log('Saving New User', self.user);    
            self.users.push(self.user);  
        }
        else{
            for(var i = 0; i < self.users.length; i++){
                if(self.users[i].id === self.user.id) {
                  self.users[i] = self.user;
                  break;
                }
            }
           console.log('User updated with id ', self.user.id);
        }
        self.reset();
    };
    

    //Editing User Details
    self.edit = function(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.users.length; i++){
            if(self.users[i].id === id) {
               self.user = angular.copy(self.users[i]);
               break;
            }
        }
    }
    

    //To remove User
    self.remove = function(id){
        console.log('id to be deleted', id);
        for(var i = 0; i < self.users.length; i++){
            if(self.users[i].id === id) {
               self.users.splice(i,1);
               if(self.user.id === id){//It is shown in form, reset it.
                  self.reset();
               }
               break;
            }
        }
    }
    
    
    //To reset entered user details
    self.reset = function(){
        self.user={id:null,username:'',address:'',email:''};
        $scope.myForm.$setPristine(); //reset Form
    }

}]);
