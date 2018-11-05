import React from 'react'
import './Stage2.css'
import {
    Container, 
    Row, 
    Col,
    Modal, 
    ModalHeader, 
    ModalBody, 
} from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

export default class Stage2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {

        const data = [
            {
                "title": "in or out",
                "img": "stage2_1.png",

                "modal_text": "In or out. Thanks to this ultra-portable speaker for any adventures - is has a built-in microphone and its unique flexible \"tail\" mount is designed to be completely universal in any situation.", 
                "modal_footer": "Beatriz, 16 years"
            },
            {
                "title": "IN DEEP",
                "img": "stage2_2.png",

                "modal_text": "In or out. Thanks to this ultra-portable speaker for any adventures - is has a built-in microphone and its unique flexible \"tail\" mount is designed to be completely universal in any situation.",
                "modal_footer": "Beatriz, 17 years"
            },
            {
                "title": "IN PARTY",
                "img": "stage2_3.png",

                "modal_text": "In or out. Thanks to this ultra-portable speaker for any adventures - is has a built-in microphone and its unique flexible \"tail\" mount is designed to be completely universal in any situation.",
                "modal_footer": "Beatriz, 18 years"
            }
        ];

        const listElements = data.map((element, index) => <Col md={12} lg={4} className="wrapper" key={element.title} onClick={this.toggle}>
                    <div className="contents">
                        <div className="inner">
                            <img className="img-responsive" src={require(`./img/${element.img}`)} alt={element.title} />
                            <div className="text-container">
                                <h4>Diive</h4>
                                <h1>{element.title}</h1>
                                <div className="rounded-circle outer-circle">
                                    <div className="rounded-circle inner-circle">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id={`modal${index}`}>
                            <ModalHeader toggle={this.toggle}></ModalHeader>
                            <ModalBody>
                                <img className="img-responsive" src={require(`./img/${element.img}`)} alt={element.title} />
                                <h3>Diive</h3>
                                <h1>{element.title}</h1>
                                <div>{element.modal_text}</div>
                            </ModalBody>
                        </Modal>
                    </div>
                </Col>);

        return (
            <Container id="Stage2">
                <Row className="elements container-fluid">
                    {listElements}
                </Row>
            </Container> 
        );
    }
}