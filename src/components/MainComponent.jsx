import React from 'react';
import { Container, Row, Col } from "reactstrap"
import NavComponent from './NavComponent';
import MyBook from "../data/horror.json"
import JumbotronComponent from './JumbotronComponent';
import ReleaseComponent from './ReleaseComponent';

class MainComponent extends React.Component {
    state = {  }
    render() {
        return(
        <Container>
               <Row>
                <Col md="12">
                <NavComponent /> 
                <JumbotronComponent/>
                </Col>
                <Col md="12">              
                    {MyBook.map((newEntry, index) => 
                        <ReleaseComponent book={newEntry} key={index} />
                    )}
                </Col>
                </Row>

            </Container>
        );
    }
}
    export default MainComponent;