import React from 'react'
import './Stage5.css'

import {
    Container, 
    Row, 
    Col,
    Button
} from 'reactstrap';

export default class Stage5 extends React.Component {
    
    render() {

        return (
            <Container id="Stage5">
                <Col className="info text-center">
                    <h5 className="companies-say-about">what companies say about us</h5>
                    <h1 className="citation">“Tt is the most solid performer for the price. you could comfortably leave it around a pool edge without any worry”</h1>
                </Col>

                <Row className="brands">
                    <Col xs="6" className="text-right">
                        <img src={require(`./img/Google.svg`)} alt="Google" />
                    </Col>
                    <Col xs="6" className="text-left">
                        <img src={require(`./img/redbull.svg`)} alt="Redbull" />
                    </Col>
                </Row>

                <Col sm="12" md={{ size: 6, offset: 3 }} className="your-companie text-center">
                    <Button color="">4 your companie</Button>
                </Col>
            </Container>
        );
    }
}
