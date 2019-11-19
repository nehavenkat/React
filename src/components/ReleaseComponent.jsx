import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle,Button
} from 'reactstrap';

const ReleaseComponent  = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={this.props.book.img} alt="Card imag" />
        <CardBody>
          <CardTitle>{this.props.book.title}</CardTitle>
          <CardText>{this.props.price}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ReleaseComponent ;