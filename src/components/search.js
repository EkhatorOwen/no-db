import React, {Component} from 'react';
import axios from 'axios';


class Search extends Component{

    constructor(){
        super()
        this.state ={
            search: '',
            title: [],
            imgURL: [],
            overview: [],
            movies: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){       
        axios.get("/api/movies/nowshowing")
             .then(response=>{
                let mov = {};
                let tit = [];
                let pic = [];
              const  {title} = response.data[0];
                 for(let i=0; i<response.data.length;i++){

                    
                   // Object.assign(mov,response.data[i])
                    tit.push(response.data[i].title)
                    pic.push(response.data[i].poster_path)
                 }               
                 console.log(response.data);                
             })
    }

    handleChange(e){
        this.setState({search: e.target.value})
    }

    handleClick(){
        axios.get(`/api/movies?query=${this.state.search}`)
             .then(res=>{
                 console.log(res.data);
             })

    }

render(){

    return ( 
        
        <div className="search">       
        <input onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Search</button>     
        </div>
    )
}

}

export default Search;