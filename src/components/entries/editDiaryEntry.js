import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EditEntryView from "../../views/entries/editEntryView";
import { updateDiaryEntry } from "../../actions/entryActions/entryAction";


class EditEntryModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        title: this.props.title,
        body: this.props.body
      };
    }
  
    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    };
  
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  
    handleUpdate = () => {
      const data = {
        
        title: this.state.title,
        body: this.state.body,
        // type: this.state.type
      };
      this.props.dispatch(updateDiaryEntry(this.props.uniqueId,data));
    };
    modalClose = () => {
      this.toggle();
      this.handleUpdate();
    };
  
    render() {
      const { modal,title, body } = this.state;
      const classname = this.props.className;
      return (
        <React.Fragment>
          <EditEntryView
            toggle={this.toggle}
            modal={modal}
            title={title}
            body={body}
            classname={classname}
            closemodal={this.modalClose}
            handleChange={this.handleChange}
            props={this.props}
          />
        </React.Fragment>
      );
    }
  }
  EditEntryModal.propTypes = {
    className: PropTypes.string,
    dispatch: PropTypes.func,
    props: PropTypes.object,
    uniqueId:PropTypes.string
  };
  const mapDispatchToProps = dispatch => ({ dispatch });
  const mapStateToProps = state => ({
    modified : state.entriesReducer.modified
  });
//   export {EditEntryModal as EditEntryModalTest};
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditEntryModal);
