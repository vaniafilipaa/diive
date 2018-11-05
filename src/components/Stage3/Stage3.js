import React, { Component } from 'react';
import './Stage3.css'

import {
    Container, 
    Col,
    Button
} from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Stage3 extends React.Component {

    render() {

        const data = [
            {
                "bottom": "connect",
                "title": "Bluetooth speaker with flexible mount.",
                "text": "Ultra-portable speaker for any adventures – it has a built-in microphone and its unique flexible “tail” mount is designed to be completely universal in any situation. Easily fix Divenamic on a bike wheel, shower head or a bag and enjoy music whenever you want!",
                "img": "slide1.png"
            },
            {
                "bottom": "custom",
                "title": "Flexible is the feature number 2 for this slide..",
                "text": "Ultra-portable speaker for any adventures – it has a built-in microphone and its unique flexible “tail” mount is designed to be completely universal in any situation. Easily fix Divenamic on a bike wheel, shower head or a bag and enjoy music whenever you want!",
                "img": "slide2.png"
            },
        ];

        const listElements = data.map((element) => <div className="elements row" key={element.bottom}>
                <Col className="text-left" md={6} lg={2}>
                    <h2>{element.title}</h2>
                    <p>{element.text}</p>
                </Col>
                <Col md={6} lg={10}> 
                    <img src={require(`./img/${element.img}`)} alt={element.bottom}/>
                </Col>
                <Col className="bottom">
                    <h1>{element.bottom}</h1>
                </Col>
        </div>
            );

        class DemoCarousel extends Component {
            
            render() {
            
                return (
                    <Carousel showThumbs={false} showArrows={false} showStatus={false}>
                        {listElements}
                    </Carousel>
                );
            }
        };

        return (    
            <Container id="Stage3">
                <Col className="top text-right">
                    <select>
                        <option>FULL SPECIFICATIONS</option>
                    </select>
                    <Button>BUY NOW</Button>
                </Col>
                
                <DemoCarousel /> 
            </Container>
        );
    }
}

