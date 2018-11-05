import React from 'react'
import './Stage6.css'

import {
    Container,
    Row,
    Col,
} from 'reactstrap';

export default class Stage6 extends React.Component {
    render() {

        let images = ["Layer_19", "Layer_20", "Layer_21", "Layer_22", "Layer_23", "Layer_24"];
       
        return (
          <Container id="Stage6">
            <div className="info">
                <h5 className="join-our-comunity">Join the our community of friends</h5>
                <h1 className="diivein">#diivein</h1>
            </div>
                            
                <Row className="images row">
                    <Col md={4} lg></Col>
                    <Col md={4} lg><img key={images[1]} src={require(`./img/${images[1]}.png`)} alt="" className="img-responsive" /></Col>
                    <Col md={4} lg></Col>
                    <Col md={4} lg><img key={images[3]} src={require(`./img/${images[3]}.png`)} alt="" className="img-responsive" /></Col>
                    <Col md={4} lg></Col>

                    <div className="w-100 hidden-md-down"></div>
                    
                    <Col md={4} lg><img key={images[0]} src={require(`./img/${images[0]}.png`)} alt="" className="img-responsive" /></Col>
                    <Col md={4} lg></Col>
                    <Col md={4} lg><img key={images[2]} src={require(`./img/${images[2]}.png`)} alt="" className="img-responsive" /></Col>
                    <Col md={4} lg><img key={images[4]} src={require(`./img/${images[4]}.png`)} alt="" className="img-responsive" /></Col>
                    <Col md={4} lg><img key={images[5]} src={require(`./img/${images[5]}.png`)} alt="" className="img-responsive" /></Col>
                </Row>
            </Container>
        );

    }
}
