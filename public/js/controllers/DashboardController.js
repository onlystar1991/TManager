trelloApp.controller('DashboardController', function($scope, $location, UserService, AuthService) {
    if (!AuthService.isLoggedIn()) {
        console.log("I am dashboard, you have no access to this page.")
        $location.path('/');
    }
    UserService.currentUser().then(function(user) {
        $scope.currentUser = user;
    });

    $scope.logout = function() {
        UserService.logout()
            .then(function(user) {
                $location.path('/');
            }, function(reason) {
                $scope.login.errors = reason;
            });
    };
})