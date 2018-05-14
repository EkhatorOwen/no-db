const express = require("express"),
  app = express(),
  port = process.env.PORT || 3001,
  cors = require("cors"),
  { json } = require("body-parser")
  s = require("./controllers/search");

app.use(json());
app.use(cors());

app.get("/api/movies", s.getMovies);
app.get("/api/movies/nowshowing", s.getNowShowing);
app.get("/api/movies/updateNowshowing", s.updateNowShowing);
//app.get("api/movis/getToWatch",s.getToWatch)
 app.post("/api/movies/watched",s.createToWatch)
// app.post("/api/movies/notWatched",s.updateNotWatched)
 app.delete(`/api/movies/notWatched/:id`,s.deleteToWatch)
 //app.delete(`/api/movies/watched/:id`,s.deleteWatched)
// app.put(`/api/movies/notWatched/:id`,s.createNotWatched)
// app.put(`/api/movies/Watched/:id`,s.createWatched)

app.listen(port, () =>
  console.log(`I'm listening on port: ${port}`)
);