app.controller('alarmController', function($scope, services) {

    $scope.movies = [];
    $scope.alarmDay = 'NO';
    
    for (let i = 0; i < localStorage.length; i++) {
        let storedMovie = JSON.parse(localStorage.getItem(localStorage.key( i )));
        
        $scope.movies.push({ title: storedMovie.title});
    }

    $scope.setAlarm = function () {
        
        if ($scope.alarmDay != ''){
            let clone = JSON.parse(localStorage.getItem($scope.selectedMovie));
            clone.alarm = $scope.alarmDay;
            services.store(clone);
            $scope.selectedMovie = '';
            $scope.alarmDay = 'NO';
        }
    }
});