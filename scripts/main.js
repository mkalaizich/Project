let app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/main.html"
    })
    .when("/list", {
        templateUrl : "./views/list.html"
    })
    .when("/manage", {
        templateUrl : "./views/manage.html"
    })
    .when("/alarms", {
        templateUrl : "./views/alarms.html"
    });
});