import React from "react";
import PropTypes from "prop-types";


import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge
} from "reactstrap";


 class ViewEntry extends React.Component {
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
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );
    return (
      <React.Fragment>
        <button type="button" id="success-button" class="btn btn-success" onClick={this.toggle} >View</button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            {this.props.title}
          </ModalHeader>
          <ModalBody>{this.props.body}</ModalBody>
          <ModalFooter>
            <Badge  className="pull-right float-left">
              Date Created - {this.props.date_created}
            </Badge>{" "}
            <Badge  className="pull-right float-left">
              Last Modified - {this.props.date_modified}
            </Badge>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
ViewEntry.propTypes = {
  buttonLabel: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  date_modified: PropTypes.string,
  date_created: PropTypes.string
};
 export default ViewEntry;