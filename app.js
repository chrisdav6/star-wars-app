var express = require("express");
var path = require("path");
var app = express();
var routes = require("./routes");

//Use EJS
app.set("view engine", "ejs");

//Use Public Folder
app.use(express.static(path.join(__dirname, "public")));

//*******Routes*********//

//Home
app.get("/", routes.home);

//Movie Single
app.get("/star_wars_episode/:episode_number?", routes.movie_single);

//NotFound
app.get("*", routes.notFound);


//*******Start Server*********//
app.listen(process.env.PORT, process.env.IP, () => {
  console.log("Star Wars App Server has Started!"); 
});