app.controller('manageController', function($scope, $http, services) {
    
    $scope.movies = [];
    $scope.selectedMovie = '';
    $scope.searchedMovie = '';
    $scope.example = 0;

    for (let i = 0; i < localStorage.length; i++) {
        let storedMovie = JSON.parse(localStorage.getItem(localStorage.key( i )));
        
        $scope.movies.push({ title: storedMovie.title});
    };

    $scope.search = function () {
        if ($scope.title != null) {
            let url = 'http://www.omdbapi.com/?t=' + $scope.title.replace(/ /g, "+") + '&y=' + $scope.year + '&plot=short&r=json';
            $http.get(url).then(function(response) {
                if (response.data.Response == 'True') {
                    $scope.searchedMovie = services.saveMovie(response);
                }
            })
        $scope.title = null;
        $scope.year = '';
        $scope.example = 1;
        }   
    }

    $scope.add = function () {
        services.store($scope.searchedMovie);
        $scope.example = 0;
        $scope.searchedMovie = '';
    }

    $scope.notAdd = function () {
        $scope.example = 0;
        $scope.searchedMovie = '';
    }

    $scope.removeMovieFromList = function () {
        let index = -1;

        index = services.getIndex($scope.selectedMovie, $scope.movies);
        
        if(index >= 0) {

            $scope.movies.splice(index, 1);
            localStorage.removeItem($scope.selectedMovie);
        }

        $scope.selectedMovie = null;
    }
});