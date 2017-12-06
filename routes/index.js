var moviesJSON = require("../movies.json");

//Home
exports.home = (req, res) => {
  
  var movies = moviesJSON.movies;
  
  res.render("home", {
    title: "Star Wars Movies",
    movies: movies
  });
  
};

//Movie Single
exports.movie_single = (req, res) => {
  
  var movies = moviesJSON.movies;
  var episode_number = req.params.episode_number;

  if(episode_number >= 1 && episode_number <= 6) {
    var movie = movies[episode_number - 1];
    var title = movie.title;
    var main_characters = movie.main_characters;
  
    res.render("movie_single", {
      movies: movies,
      title: title,
      movie: movie,
      main_characters: main_characters
    });
  }else {
    res.render("notFound", {
      movies: movies,
      title: "This is not the page you are looking for!"
    });
  }
  
};

//NotFound
exports.notFound = (req, res) => {
  
  var movies = moviesJSON.movies;
  
  res.render("notFound", {
      movies: movies,
      title: "This is not the page you are looking for!"
    });
    
};