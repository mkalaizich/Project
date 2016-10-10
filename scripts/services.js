app.service('services', function () {

    this.getIndex = function (title, target) {
        for (let i = 0; i < target.length; i++){
            if (target[i].title == title){
                return index = i;
                break;
            }
        }
    }

    this.currentDay = function () {
        let date = new Date();
        let day = date.getDay();

        switch (day) {
            case 1: 
                return day = 'Monday';
                break;
            case 2: 
                return day = 'Tuesday';
                break;
            case 3: 
                return day = 'Wednesday';
                break;
            case 4: 
                return day = 'Thursday';
                break;
            case 5: 
                return day = 'Friday';
                break;
            case 6: 
                return day = 'Saturday';
                break;
            default: 
                return day = 'Sunday';
                break;
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
                    alarm: 'Off'
        };
    }
});