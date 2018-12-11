import React from "react";
import PropTypes from "prop-types";
import "../../assets/entryAssets/entrypage.scss";
import { clearToken } from "../../utils/myHeaders";
// import "../assets/navbar.scss";

import {
    Button,
    Label,
    Form,
    FormGroup,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
} from "reactstrap";



const CreateEntryView = ({
    toggle,
    modal,
    classname,
    closemodal,
    handleChange,
    title,
    body,
}) => {
    return (
        <div>
            {/* <a target="_blank" >
                <Button className="user-button" onClick={toggle}>
                    Create
                </Button>
                <Button className="user-button2" href="/" onClick={() => clearToken()}>
                    Log Out
                </Button>
            </a> */}
            <Navbar light expand="md" id="mynav">
                    <NavbarBrand href="/" id="navbar-brand">
                        MY DIARY
                    </NavbarBrand>
                    <NavbarToggler  />
                    <Collapse  navbar >
                    <Nav className="ml-auto" navbar>
                    <ul className="navbar-nav">
                        
                        <a target="_blank" >
                        <Button className="user-button" onClick={toggle}>
                            Create
                        </Button>
                        <Button className="user-button2" href="/" onClick={() => clearToken()}>
                            Log Out
                        </Button>
                        </a>
                        
                        
                    </ul>

                    </Nav>
                    </Collapse>
            </Navbar>
            <Modal isOpen={modal} toggle={toggle} className={classname}>
                <ModalHeader toggle={toggle}>Create New Entry</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="Title">Title</Label>
                            <Input
                             type="text"
                             name="title"
                             id="title"
                             placeholder="Enter entry title.."
                             onChange={handleChange}
                             value={title}
                             required
                            />

                        </FormGroup>
                        <FormGroup>
                            <Label for="Body">Body</Label>
                            <Input
                             type="textarea"
                             name="body"
                             id="body"
                             placeholder="Enter entry body.."
                             onChange={handleChange}
                             value={body}
                             required
                            />

                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className="pull-right" onClick={closemodal} type="submit">
                        Create
                    </Button>
                </ModalFooter>
            
            </Modal>

        </div>
    );
};

CreateEntryView.propTypes = {
    closemodal: PropTypes.func,
    handleChange: PropTypes,
    toggle: PropTypes.func,
    modal: PropTypes.string,
    classname: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string
}

export default CreateEntryView;