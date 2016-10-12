app.service('services', function () {

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

    this.getIndex = function (title, target) {
        for (let i = 0; i < target.length; i++){
            if (target[i].title == title){
                return index = i;
                break;
            }
        }
    }

    this.getTrailer = function (response) {
        let videoId = response.data.items[0].id.videoId;
        return trailer = 'https://www.youtube.com/embed/' + videoId;
    }

    this.store = function (newMovie) {
        localStorage.setItem(newMovie.title, JSON.stringify({ 
            title: newMovie.title, 
            year: newMovie.year,
            genre: newMovie.genre, 
            plot: newMovie.plot,
            poster: newMovie.poster,
            runtime: newMovie.runtime,
            alarm: newMovie.alarm
        }));
    }

    this.saveMovie = function (response) {
        let duration = parseInt(response.data.Runtime);
        let poster;

        if (response.data.Poster == 'N/A') {
            poster = 'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg';
        } else {
            poster = response.data.Poster;
        }
        return newMovie = {
                    title: response.data.Title,
                    year: response.data.Year,
                    genre: response.data.Genre,
                    plot: response.data.Plot,
                    poster: poster,
                    runtime: duration,
                    alarm: 'Off'
        };
    }
});