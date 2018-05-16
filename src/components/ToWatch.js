import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Input, Label } from 'reactstrap';
import axios from 'axios';
import swal from 'sweetalert';
import Notes from './notes';

export default class ToWatch extends Component{

  constructor(){
    super();
    this.state={
      note: ''
    }
    this.updateChange = this.updateChange.bind(this);
  }

  updateChange(e){
    this.setState({note: e.target.value})
  }


render(){

    let display = this.props.notes.map((element,index)=>{
     //console.log(element);
     return( <Notes
      key={index}
     title={this.props.title}
      note={element.note}
      />)
    })

    return(
      <div>
        <Col sm="7">
        <Card>
          <CardImg width="50%" src={`https://image.tmdb.org/t/p/w342/${this.props.img}`} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{}</CardText>
            <Label for="exampleText"></Label>
             <Input onChange={this.updateChange} placeholder="Make a note" type="textarea" name="text" id="exampleText" />
             <Button outline onClick={()=>this.props.updateNote(this.props.id,this.state.note)} color="secondary">Update</Button>
           
             <Button  outline color="danger" size="sm" onClick={() => this.props.remove(this.props.id)}>Remove</Button>{' '}
             <br/>
    
          </CardBody>
        </Card>
      </Col>
      <Col sm="5">
        {display}
      </Col>
      </div>
    );
}
}

