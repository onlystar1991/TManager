trelloApp.controller('OAuthController', function($routeParams, $location, UserService) {

    UserService.login({
        provider: $routeParams.provider,
    })
        .then(function(user) {
            $location.path('/dashboard');
        }, function(reason) {
            $location.path('/');
        });

});