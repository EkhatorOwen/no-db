import React, { Component } from "react";
import axios from "axios";
import Box from "./box";
import { InputGroup,InputGroupAddon,InputGroupText,Input,Row,Container,Col} from "reactstrap";
import removeDuplicates from "removeduplicates";
import ToWatch from "./ToWatch"


class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      userInput: "",
      overview: [],
      movies: [],
      toWatch: [],
      notes: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addToWatchList = this.addToWatchList.bind(this);
    this.deleteToWatchList = this.deleteToWatchList.bind(this);
   
    this.updateNote = this.updateNote.bind(this);
  }

  componentDidMount() {
      axios.get("/api/movies/nowshowing").then(response => {
          this.setState({ movies: response.data });
         // console.log(response.data)
    });
    // axios.get('/api/movies/showToWatch').then(response=>{
    //     this.setState({toWatch: response.data})
    // })
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

  updateNote(id,text){
    axios.put(`/api/movies/note/${id}`,{text}).then(response=>{
        this.setState({notes: response.data})
        console.log(response.data);
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
                releaseDate={element.release_date}
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
                notes={this.state.notes}
                updateNote={this.updateNote}            
             />)

    })
    return (
      <Container>
        <div className="search">
          <InputGroup>
        <Input onChange={this.handleChange} placeholder="Search from the displayed movies" />
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
