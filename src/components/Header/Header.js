import React from 'react'
import './Header.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import logo from './logoripo_DIIVE_logo1.svg';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
Button
} from 'reactstrap';

library.add(faShoppingBag)

export default class Header extends React.Component {
constructor(props) {
super(props);

this.toggle = this.toggle.bind(this);
this.state = {
    isOpen: false
};
}
toggle() {
this.setState({
    isOpen: !this.state.isOpen
});
}
render() {
return (
    <Navbar expand="md" className="fixed-top">
        <NavbarBrand href="/">
            <img src={logo} width="18px" height="18px" alt="diive"/>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/">diive</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">for company</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">about</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">where to buy</NavLink>
                </NavItem>
            </Nav>

            <div className="right-content">
                <Button color="">BUY NOW</Button>
                <a href="/">
                    <FontAwesomeIcon icon={faShoppingBag} />
                </a>
            </div>
        </Collapse>
    </Navbar>
);
}
}
