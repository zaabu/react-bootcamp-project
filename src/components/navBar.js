import React from "react";
import "../assets/navbar.scss";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,

} from "reactstrap";

class NavBar extends React.Component {
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
            <div>
                <Navbar light expand="md" id="mynav">
                    <NavbarBrand href="/" id="navbar-brand">
                        MY DIARY
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar >
                    <Nav className="ml-auto" navbar>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/" id="navv-link">
                            CREATE
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/" id="navv-link">
                            LOG OUT
                            </a>
                        </li>
                        
                        
                    </ul>

                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;