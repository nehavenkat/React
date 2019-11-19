import React from 'react';
import { Button, Container, Row, Col } from "reactstrap"
import navComponent from './navComponent';
import MyMenu from "../data/horror.json"
import SingleDish from './SingleDish';

class MainComponent extends React.Component {
    state = {  }
    render() { 
        return(<Container>
               <Row>
                <Col md="12">
                    <navComponent />
                    </col>


            </Container>
        );

    }
}
 
    export default MainComponent;