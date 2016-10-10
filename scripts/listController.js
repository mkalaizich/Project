app.controller('listController', function($scope, services) {

    $scope.movies = [];
    
    for (let i = 0; i < localStorage.length; i++) {
        let storedMovie = JSON.parse(localStorage.getItem(localStorage.key( i )));
        $scope.movies.push({ 
            title: storedMovie.title, 
            year: storedMovie.year, 
            plot: storedMovie.plot,
            poster: storedMovie.poster,
            runtime: storedMovie.runtime,
            alarm: storedMovie.alarm
        });
    }
    //uncomment the following line in order to clear storage for tests
    //localStorage.clear(); 
});