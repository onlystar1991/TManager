trelloApp.controller('WelcomeController', function($scope, $location, UserService, AuthService) {
	if (AuthService.isLoggedIn()) {
        console.log("I am dashboard, you have no access to this page.")
        $location.path('/dashboard');
    }
})
