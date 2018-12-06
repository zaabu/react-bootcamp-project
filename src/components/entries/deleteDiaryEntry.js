import React, { Component } from "react";
import PropTypes from "prop-types";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


class DeleteEntryConfirm extends Component {
    submit = (id) => {
        confirmAlert({
            title: "Delete Entry",
            message: "Are you sure you want to delete your entry.",
            buttons: [
                {
                    label: "Yep",
                    onClick: () => this.props.delete(this.props.uniqueId)
                },
                {
                    label: "Nope"
                }
            ]
        });
    };

    render() {
        return <button id="danger-button" type="button" class="btn btn-danger"  onClick={this.submit} href="#">Delete</button>
    }

    
}
DeleteEntryConfirm.propTypes = {
    handleDelete: PropTypes.func,
    uniqueId: PropTypes.id
        
}

export default DeleteEntryConfirm;