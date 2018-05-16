import React,{Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';


export default class Notes extends Component{

    render(){
    return (
        <Card body inverse color="primary">
        <CardTitle>{this.props.title}</CardTitle>
        <CardText>{this.props.note}</CardText>
        <Button color="secondary">Change</Button>
        </Card>
    )
}

}