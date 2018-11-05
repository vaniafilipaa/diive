import React from 'react'
import './Stage4.css'

import {
    Container, 
    Row, 
    Col,
} from 'reactstrap';

export default class Stage4 extends React.Component {
    render() {

        const data = [
            {
                "col": 3,
                "alt": "aiia1",
                "file": "gallery1.png"
            },
            {
                "col": 6,
                "alt": "aiia2",
                "file": "gallery3.jpg"
            },
            {
                "col": 3,
                "alt": "aiia3",
                "file": "gallery2.png"
            },
        ];

        const listImages = data.map((image) => <Col sm={image.col} key={image.alt}>
            <img className="img-responsive" src={require(`./img/${image.file}`)} alt={image.alt}/>
        </Col>);

        return (
            <Container id="Stage4">
                <Row className="images">
                    {listImages}
                </Row>
            </Container>
        );
    }
}
