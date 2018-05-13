import React, {Component} from 'react';
import axios from 'axios';
import Box from './box'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Row, Container } from 'reactstrap';


class Search extends Component{

    constructor(){
        super()
        this.state ={
            search: '',
            userInput: '',
            overview: [],
            movies: [] 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){       
        axios.get("/api/movies/nowshowing")
             .then(response=>{        
               //  console.log(response); 
                 this.setState({movies: response.data})               
             })
    }

    handleChange(e){
        this.setState({userInput: e.target.value})
    }

    handleClick(){
       /*  axios.get(`/api/movies?query=${this.state.search}`)
              .then(response=>{
                  console.log(result);
                 this.setState({movies: response.data}) 
              }) */
            this.setState({search: this.state.userInput})
    }


render(){

    let arr = this.state.movies.filter(element=>{
        if(element.title.includes(this.state.search)){
            return element;
        }
    }).map((element,index)=>{
        return (<Box key= {index}
                title = {element.title}
                img = {element.poster_path}
                overview ={element.overview}
            /> )
    })
    return ( 
       <Container> 
      
        <div className="search">       
        <input onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Search</button>  
        <h2> Now Showing</h2>
       <Row> {arr} </Row>  
        </div>
        </Container>
    )
}

}

export default Search;