import React, { Component } from "react";
import Viewallentries from "../../views/entries/ViewEntries";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { retrieveAllEntries } from "../../actions/entryActions/entryAction";

export class ViewEntries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch(retrieveAllEntries());
  }

  render() {
    const entries = this.props.allentries;
    
    return (
      <div>
        <h1 class="title">Diaries</h1>
        <Viewallentries results={entries} />
      </div>
    );
  }
}
ViewEntries.propTypes = {
  dispatch: PropTypes.func.isRequired,
  allentries: PropTypes.array,

};

const mapStateToProps = state => ({
  allentries: state.entriesReducer.entries,

});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewEntries);
