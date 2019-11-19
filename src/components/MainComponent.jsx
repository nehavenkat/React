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
                </Row> 
                <Row>             
                    {MyBook.map((newEntry, index) => 
                        <ReleaseComponent book={newEntry} key={index} />
                    )}
                </Row>

            </Container>
        );
    }
}
    export default MainComponent;