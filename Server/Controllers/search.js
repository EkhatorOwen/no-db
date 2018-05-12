const axios = require ("axios");

let movies = [];
let nowShowingtitle = [];
let nowShowing = [];
let watched = [];
let toWatch = [];
let test = [{}]

module.exports = {

    getMovies(req, res){ 

       
            console.log(req.query.query);
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c6ec8af34a4f2f2c72b1b18b31540c8e&language=en-US&query=${req.query.query}&page=1&include_adult=false`).then(({data})=>{

           
            movies = data;
          
            res.status(200).send();
            
            })
    },

    getNowShowing(req, res){

            axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c6ec8af34a4f2f2c72b1b18b31540c8e&language=en-US&page=1`).then(({data})=>{
  
             movies = data.results;
             res.status(200).send(movies);
            })
            .catch(console.log)
    }
}

// axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c6ec8af34a4f2f2c72b1b18b31540c8e&language=en-US&query=captainamerica&page=1&include_adult=false`)


//axios.get("/api/movies/?  name=captain")

