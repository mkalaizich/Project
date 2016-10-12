app.controller('manageController', function($scope, $http, services) {
    
    $scope.movies = [];
    $scope.selectedMovie = '';
    $scope.searchedMovie = '';
    $scope.example = 0;
    $scope.trailer = '';
    //Setup
    for (let i = 0; i < localStorage.length; i++) {
        let storedMovie = JSON.parse(localStorage.getItem(localStorage.key( i )));
        
        $scope.movies.push({ title: storedMovie.title});
    };
    //Controller Functions
    $scope.add = function () {
        services.store($scope.searchedMovie);
        $scope.movies.push({ title: $scope.searchedMovie.title});
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

    $scope.search = function () {
        let urlStart = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
        let urlEnd = '+official+movie+trailer&videoEmbeddable=true&regionCode=US&type=video&order=rating&maxResults=1&key=AIzaSyCYCDrrr4VkpcpWKLmeiBoB1uwC1egs4d4';

        if ($scope.title != null) {
            let url = 'http://www.omdbapi.com/?t=' + $scope.title.replace(/ /g, "+") + '&y=' + $scope.year + '&plot=short&r=json';
            $http.get(url).then(function(response) {
                if (response.data.Response == 'True') {
                    $scope.searchedMovie = services.saveMovie(response);
                    url = urlStart + $scope.searchedMovie.title.replace(/ /g, '+') + '+' + $scope.searchedMovie.year + urlEnd;
                    console.log(url);
                    $http.get(url).then(function(response) {
                        $scope.trailer = services.getTrailer(response);
                    })
                } else {
                    $scope.searchedMovie = {
                        plot : 'Movie title misspelled or does not exist',
                        poster : 'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'
                    };
                }
            })
            $scope.title = null;
            $scope.year = '';
            $scope.example = 1;
        }   
    }
});