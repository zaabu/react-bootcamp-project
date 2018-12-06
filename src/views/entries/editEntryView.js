import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Label,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
 const EditEntryView = ({
  toggle,
  modal,
  classname,
  closemodal,
  handleChange,
  title,
  body
  
}) => {
  return (
    <React.Fragment>
      {/* <CardLink id="cardlink" onClick={toggle} href="#">
        Edit |
      </CardLink> */}
      {/* <button class="d-inline edit-button" onClick={toggle}>Edit</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button> */}
      <button id="warning-button" type="button" class="btn btn-warning d-inline" onClick={toggle}>Edit</button>
      <Modal isOpen={modal} toggle={toggle} className={classname}>
        <ModalHeader toggle={toggle}>Edit Entry</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="entryTitle">Title</Label>
              <Input
                type="text"
                name="title"
                id="entryTitle"
                placeholder="Enter name of entry ..."
                onChange={handleChange}
                value={title}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label for="entryBody">Body</Label>
              <Input
                type="textarea"
                name="body"
                id="entryBody"
                onChange={handleChange}
                value={body}
                required
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="pull-right" onClick={closemodal} type="submit">
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};
EditEntryView.propTypes = {
  closemodal: PropTypes.func,
  handleChange: PropTypes,
  toggle: PropTypes.func,
  modal: PropTypes.string,
  classname: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string
};
export default EditEntryView;