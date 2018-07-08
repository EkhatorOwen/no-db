import React, { Component } from "react";
import axios from "axios";
import Box from "./box";
import { InputGroup,InputGroupAddon,InputGroupText,Input,Row,Container,Col} from "reactstrap";

import ToWatch from "./ToWatch"


class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      userInput: "",
      overview: [],
      movies: [],
      toWatch: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addToWatchList = this.addToWatchList.bind(this);
    this.deleteToWatchList = this.deleteToWatchList.bind(this);
  }

  componentDidMount() {
      axios.get("/api/movies/nowshowing").then(response => {

          this.setState({movies:response.data})
    });
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  handleClick() {
    this.setState({ search: this.state.userInput });
  }

  addToWatchList(name, img, id, overview) {
   // console.log(name, img, id);
    let movie = {
      name: name,
      img: img,
      id: id,
      overview: overview
    };
    axios.post(`/api/movies/watched`, { movie }).then(response => {
      this.setState({toWatch: response.data});
     //console.log(response.data);
    });

    axios.get("/api/movies/updateNowshowing").then(response => {
     // console.log(response);
      this.setState({ movies: response.data });
    });   
  }

  deleteToWatchList(id){
     
      axios.delete(`/api/movies/deleteToWatch/${id}`).then(response =>{

       // console.log(response.data);
        this.setState({toWatch: response.data});

      })

  }

  render() {
    
    let arr = [];
    {
      if (this.state.movies[0]) {
        arr = this.state.movies
          .filter(element => {
           
            if (element.title.includes(this.state.search)) {
              return element;
            }
          })
          .map((element, index) => {
              
            return (
              <Box
                key={index}
                title={element.title}
                img={element.poster_path}
                overview={element.overview}
                id={element.id}
                addToWatchList={this.addToWatchList}
              />
            );
          });
      }
    }

    let toWatchMovies = this.state.toWatch.map((element,index)=>{
      //  console.log(element);
        return ( <ToWatch 
            key={index}
                title={element.name}
                img={element.img}
                overview={element.overview}
                id={element.id} 
                remove={this.deleteToWatchList}             
             />)

    })
    return (
      <Container>
        <div className="search">
          <InputGroup>
        <Input onChange={this.handleChange} placeholder="Search for a now showing" />
        <InputGroupAddon addonType="append"><button onClick={this.handleClick}>Search</button></InputGroupAddon>
      </InputGroup>
          <br/>
          <br/>
          <Row>

          <Col xs="8">
          <h1>Now Showing</h1>
          <Row> {arr} </Row>
          </Col>
          <Col xs="4">
          <h1>To Watch List </h1>
          {toWatchMovies}
          </Col>

          </Row>
        </div>
      </Container>
    );
  }
}

export default Search;
