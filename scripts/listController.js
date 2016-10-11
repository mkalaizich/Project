app.controller('listController', function($scope, services) {

    $scope.movies = [];
    $scope.maxRuntime = 201;
    let day = services.currentDay();
    
    for (let i = 0; i < localStorage.length; i++) {
        let storedMovie = JSON.parse(localStorage.getItem(localStorage.key( i )));
        let onOff = 0;

        if (storedMovie.alarm == day) {
            onOff = 1;
        }
        
        $scope.movies.push({ 
            title: storedMovie.title, 
            year: storedMovie.year, 
            plot: storedMovie.plot,
            poster: storedMovie.poster,
            runtime: storedMovie.runtime,
            alarm: storedMovie.alarm,
            alarmOn: onOff
        });
    }
    //uncomment the following line in order to clear storage for tests
    //localStorage.clear(); 
});

app.filter('maxDuration', function () {
    return function (movies, maxRuntime) {
        let filtered = [];

        for (let i = 0; i < movies.length; i++) {
            let movie = movies[i];

            if ( maxRuntime > movie.runtime) {
                filtered.push(movie);
            }
        }
    return filtered;
    };
});