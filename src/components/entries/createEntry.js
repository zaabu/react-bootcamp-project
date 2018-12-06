import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CreateEntryView   from "../../views/entries/createEntry";
import { createDiaryEntry } from "../../actions/entryActions/entryAction";


class CreateDiaryEntryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            title: "",
            body: ""
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

    handleSubmit = () => {
        const data = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.dispatch(createDiaryEntry(data));

    };
    modalClose = () => {
        this.toggle();
        this.handleSubmit();
    }

    render() {
        const { modal, title, body} = this.state;
        const classname = this.props.className;
        return (
            <div>
                <CreateEntryView
                    toggle={this.toggle}
                    modal={modal}
                    title={title}
                    body={body}
                    classname={classname}
                    closemodal={this.modalClose}
                    handleChange={this.handleChange}
                />
            
            </div>
        )
    }
}

CreateDiaryEntryComponent.propTypes = {
    className: PropTypes.string,
    dispatch: PropTypes.func
};

const mapDispatchToProps = dispatch => ({ dispatch });
const mapStateToProps = state => ({
    entry: state.entriesReducer

});

export {CreateDiaryEntryComponent as CreateEntryModalTest};
export default connect(
    mapStateToProps,
    mapDispatchToProps

)(CreateDiaryEntryComponent);