

const axios = require ("axios");
var removeDuplicates = require('removeDuplicates');


let nowShowingMovies = [];
let watched = [];
let toWatch = [];
let searched = [];


module.exports = {
    getMovies(req, res){    
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.key}&language=en-US&query=${req.query.query}&page=1&include_adult=false`).then(({data})=>{
         
            
                const {results} = data;
                results.map((element,index,arr)=>{                   
                         delete element.video;
                         delete element.vote_count;
                         delete element.vote_average;
                         delete element.vote;
                         delete element.popularity;
                         delete element.original_language;
                         delete element.original_title;
                         delete element.genre_ids;
                         delete element.backdrop_path;
                         delete element.adult;
                         delete element.overview;
                         element.id = index;                 
                         searched.push(element);  
                 })
                  res.status(200).send(searched);
            })
    },

    getNowShowing(req, res){
            axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c6ec8af34a4f2f2c72b1b18b31540c8e&language=en-US&page=1`).then(({data})=>{ 
            const {results} = data;
           results.map((element,index,arr)=>{                   
                    delete element.video;
                    delete element.vote_count;
                    delete element.vote_average;
                    delete element.vote;
                    delete element.popularity;
                    delete element.original_language;
                    delete element.original_title;
                    delete element.genre_ids;
                    delete element.backdrop_path;
                    delete element.adult;
                  //  delete element.overview;
                    element.id = index; 
                    nowShowingMovies.push(element); 
               
            })
           
             res.status(200).send(nowShowingMovies);
            })
            .catch(console.log)

    },
    createToWatch(req,res){ 
            
          toWatch.push(req.body.movie);   
           const deleteId = req.body.movie.id;
    
         nowShowingMovies.map((element,index)=>{
                 if(element.id==deleteId){
                   let test = nowShowingMovies.splice(index,1);
                 
                 }
         })
           res.status(200).send(toWatch); 
    },

    deleteToWatch(req,res){
            
            const deleteId = req.params.id;
              movieIndex = toWatch.findIndex(movie => movie.id == deleteId);
              toWatch.splice(movieIndex,1);
            res.status(200).send(toWatch);
    },

    updateNowShowing(req,res){

        res.status(200).send(nowShowingMovies);

    }

}


