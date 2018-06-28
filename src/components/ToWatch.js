import React from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import axios from 'axios';
import swal from 'sweetalert';



export default function ToWatch(props){
//console.log(props);
    return(

        <Col sm="6">
        <Card>
          <CardImg width="50%" src={`https://image.tmdb.org/t/p/w154/${props.img}`} alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{}</CardText>
             <Button  outline color="danger" size="sm" onClick={() => props.remove(props.id)}>Remove</Button>{' '}
             <br/>
    
          </CardBody>
        </Card>
      </Col>

    );
}

