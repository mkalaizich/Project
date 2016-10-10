let app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : './views/main.html'
    })
    .when('/list', {
        templateUrl : './views/list.html',
        controller: 'listController'
    })
    .when('/manage', {
        templateUrl : './views/manage.html',
        controller: 'manageController'
    })
    .when('/alarms', {
        templateUrl : './views/alarms.html',
        controller: 'alarmController'
    });
});