let app = angular.module('app', ['ngRoute']);

app.service('services', function(){

    this.getIndex = function (title, target) {
        for (let i = 0; i < target.length; i++){
            if (target[i].title == title){
                return index = i;
                break;
            }
        }
    }

    this.store = function (newMovie) {
        localStorage.setItem(newMovie.title, JSON.stringify({ 
            title: newMovie.title, 
            year: newMovie.year, 
            plot: newMovie.plot,
            poster: newMovie.poster,
            runtime: newMovie.runtime,
            alarm: newMovie.alarm
        }));
    }

    this.saveMovie = function (response) {
        let duration = parseInt(response.data.Runtime);
        
        return newMovie = {
                    title: response.data.Title,
                    year: response.data.Year,
                    plot: response.data.Plot,
                    poster: response.data.Poster,
                    runtime: duration,
                    alarm: 'NO'
        };
    }
});

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
        controller: 'addController'
    })
    .when('/alarms', {
        templateUrl : './views/alarms.html',
        controller: 'alarmController'
    });
});