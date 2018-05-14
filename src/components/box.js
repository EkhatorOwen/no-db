import React, {Component} from 'react';
import removeDuplicates from 'removeduplicates';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import axios from 'axios';
import swal from 'sweetalert';


export default class  Box extends Component {
  
  constructor(){
    super()
      this.moreInfo = this.moreInfo.bind(this);


  }
  moreInfo(){
   
    swal("More Info",this.props.overview)
  }
    render(){
return (                                                        
    <Col sm="3">
    <Card>
      <CardImg width="50%" src={`https://image.tmdb.org/t/p/w154/${this.props.img}`} alt="Card image cap" />
      <CardBody>
        <CardTitle>{this.props.title}</CardTitle>
        <CardText>{}</CardText>
         <Button  outline color="success" size="sm" onClick={() => this.props.addToWatchList(this.props.title,this.props.img,this.props.id,this.props.overview)}>To-Watch</Button>{' '}
         <br/>
         <Button outline color="info" size="sm" onClick={this.moreInfo}>More Info</Button>
      </CardBody>
    </Card>
  </Col>
        )  
}
}