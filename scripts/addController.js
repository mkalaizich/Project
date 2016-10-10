app.controller('addController', function($scope, $http, services) {
  
    $scope.add = function () {

        if ($scope.title != ''){
            let url = 'http://www.omdbapi.com/?t=' + $scope.title.replace(/ /g, "+") + '&y=' + $scope.year + '&plot=short&r=json';
            
            $http.get(url).then(function(response) {
                if (response.data.Response == 'True') {
                    let newMovie = services.saveMovie(response);
                    services.store(newMovie);
                }
            });
            $scope.title='';
            $scope.year='';
        }
    }
});