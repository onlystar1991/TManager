trelloApp.controller('LoginController', function($scope, $location, UserService) {
    $scope.signup = {};
    $scope.login = {};

    UserService.currentUser().then(function(user) {
        $scope.user = user;
    });

    $scope.signup = function() {
        UserService.signup({
            name: $scope.signup._name,
            email: $scope.signup.email,
            password: $scope.signup.password
        })
        .then(function(user) {
            $location.path('/dashboard');
        }, function(reason) {
            $scope.signup.errors = reason;
        });
    };

    $scope.login = function() {
        UserService.login({
            email: $scope.login.email,
            password: $scope.login.password
        })
        .then(function(user) {
            $location.path('/dashboard');
        }, function(reason) {
            $scope.login.errors = reason;
        });
    };
})
