const axios = require ("axios");
var removeDuplicates = require('removeDuplicates');


let nowShowingMovies = [];
let watched = [];
let toWatch = [];
let searched = [];


module.exports = {
    getMovies(req, res){    
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c6ec8af34a4f2f2c72b1b18b31540c8e&language=en-US&query=${req.query.query}&page=1&include_adult=false`).then(({data})=>{
         
            
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

                    // const newArr = myArrOfObjects.map(val => ({ title: val.title, img: val.poster_path, id: id }))
            })
           
             res.status(200).send(nowShowingMovies);
            })
            .catch(console.log)
//     },
//     updateWatched(req, res){ 
//         const {} =req.body;


    },
    createToWatch(req,res){
            
        for(let i =0; i<toWatch.length; i++){
                if(toWatch[i].name==req.body.movie.name){
                        console.log('false')
                        res.status(200).send(false);//use toastify here
                        return;
                }
               
        }
           toWatch.push(req.body.movie);        
           res.status(200).send(toWatch);

           
     
    }
}

// axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c6ec8af34a4f2f2c72b1b18b31540c8e&language=en-US&query=captainamerica&page=1&include_adult=false`)


//axios.get("/api/movies/?  name=captain")

