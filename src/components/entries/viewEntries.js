import React, { Component } from "react";
import Viewallentries from "../../views/entries/ViewEntries";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { retrieveAllEntries, deleteDiaryEntry } from "../../actions/entryActions/entryAction";
import CreateDiaryEntryComponent from "../../components/entries/createEntry";
// import DeleteEntryConfirm from "../../components/entries/deleteEntry";



export class ViewEntries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.entry.message === "diary entry added successfully." ||
      nextProps.deleted.message === "Diary entry deleted successfully" ||
      nextProps.modified.message === "diary entry updated succesfully"
    ){
      this.props.dispatch(retrieveAllEntries())
    }
  }

  handleDelete = id => {
    this.props.dispatch(deleteDiaryEntry(id));
  }

  componentWillMount() {
    this.props.dispatch(retrieveAllEntries());
  }

  render() {
    const entries = this.props.allentries;
    
    return (
      <div>
        {/* <h1 class="title d-inline">MY DIARY</h1> */}
       
        
        <CreateDiaryEntryComponent />
        {/* <div class="button_cont d-inline user-button example_a" > */}
        {/* <div class="button_cont d-inline" ><a class="example_a" href="add-website-here" target="_blank" rel="nofollow noopener">Log Out</a></div> */}
        
        {/* <h2 class="d-inline pencil-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGLSURBVGhD7dq7SgNRGEXhUUGtFAuvvYKKWImthfgkIpjW0kpsBCvfQMRKFPFeamVlYeOttlBB0EYELXTtwIFhmInOJJL/xLPhKxJSnJVAEjKJwsJyrRnzuMQnXrGFUXizVmzjK8UbpuHFRqBXIC1EntEJLzaBSjGzMLl27OAe7tmuFLMGc1PECXTAB3TALStmBaYWj3jEMJJLi5mBmbXhpwi3eMwpmmBieSLcFHOO7vItA8sT0YUlDJZvGVreiAvosau6w8oUcYy8EXfoh4lVEzEAEysacYsQUcvpW2yIsLB/H2HmLVYRRwgR9V7RiBuEiFquYSIO4SL0y0fWQsRfrpqIPpiYIg4QIuq9ohHXCBG1XMNE7CNE1HvVRPTCxBSxB68jNHe5y+uIIehgHxjTHRmLR1zBVIRWgg4nG2hBcuYjtF24kLQYLyJ04BfEQ+IxXkRok0hGOJvwIkJbRDIgSRE9ML0zpB1enrAO8xHaO9zB9RcJXVFawDjMXHT8zeawjCno0z0srPCi6BsHNBINm/BYCQAAAABJRU5ErkJggg=="></img></h2> */}

        <Viewallentries results={entries}  handleDelete={this.handleDelete} />
      </div>
    );
  }
}
ViewEntries.propTypes = {
  dispatch: PropTypes.func.isRequired,
  allentries: PropTypes.array,
  entry: PropTypes.object,
  deleted: PropTypes.object,
  message: PropTypes.string,
  modified: PropTypes.object


};


const mapStateToProps = state => ({
  allentries: state.entriesReducer.entries,
  entry: state.entriesReducer.entry,
  deleted: state.entriesReducer.deleted,
  modified: state.entriesReducer.modified
  
});
const mapDispatchToProps = dispatch => ({ dispatch });

export { ViewEntries as ViewDiariesTest }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewEntries);
