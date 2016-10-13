app.controller('listController', function($scope, services) {

    $scope.movies = [];
    $scope.maxRuntime = 210;
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
            genre: storedMovie.genre, 
            plot: storedMovie.plot,
            poster: storedMovie.poster,
            runtime: storedMovie.runtime,
            trailer: storedMovie.trailer,
            alarm: storedMovie.alarm,
            alarmOn: onOff
        });
    }

    $scope.showInfo = function (poster, plot) {
        let image = document.createElement('img');
        let details = document.createElement('p');
        let text = document.createTextNode(plot);
        let infoDisplay = document.querySelector(".displayInfo");

        while (infoDisplay.hasChildNodes()) {
            infoDisplay.removeChild(infoDisplay.childNodes[0]);
        }

        details.appendChild(text);
        image.src = poster;
        image.width = 175;
        image.height = 259;
        image.classList.add("displayInfo--poster");
        details.classList.add("displayInfo--plot");
        infoDisplay.appendChild(image);
        infoDisplay.appendChild(details);
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