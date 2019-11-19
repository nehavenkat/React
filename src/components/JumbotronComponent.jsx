import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">My Book Store</h1>
          <p className="lead">All kinds of books found here.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;