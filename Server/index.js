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

app.listen(port, () =>
  console.log(`I'm listening on port: ${port}`)
);