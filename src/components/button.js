import React from 'react';
import { Button } from 'reactstrap';

export default function but (props) {
  
    return (
      <div>
        <Button onClick={props.act} color={props.color}>{props.name}</Button>{' '}
      </div>
    );
  }
