import React, {Component} from 'react';
import removeDuplicates from 'removeduplicates';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import axios from 'axios';

export default class  Box extends Component {
  
  constructor(){
    super()
      
    this.addToWatchList = this.addToWatchList.bind(this);
  }

  addToWatchList(){

    let movie = {name: this.props.title,
                  img: this.props.img
                };

               // console.log(movie);
       
    axios.post(`/api/movies/watched`,{movie})
         .then(response=>{
              
              console.log(removeDuplicates(response.data,'name'));
         })
}
    render(){
return (                                                        
    <Col sm="2">
    <Card>
      <CardImg top width="20%" src={`https://image.tmdb.org/t/p/w185/${this.props.img}`} alt="Card image cap" />
      <CardBody>
        <CardTitle>{this.props.title}</CardTitle>
        <CardText>{}</CardText>
        <Button color="primary" onClick={this.addToWatchList}>To-Watch</Button>
        <Button color="success"  >Watched</Button>
      </CardBody>
    </Card>
  </Col>
        )  
}
}