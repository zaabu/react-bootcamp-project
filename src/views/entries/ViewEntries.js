import React from "react";
import "../../assets/entryAssets/entrypage.scss";
import PropTypes from "prop-types";
import DeleteEntryConfirm from "../../components/entries/deleteDiaryEntry";
import EditEntryModal from "../../components/entries/editDiaryEntry"
import ViewEntry from "../../components/entries/viewDiary";


const Viewallentries = ({ results, handleDelete }) => {
  const showEntries = results.map(entry => (
    entriesView(entry, handleDelete)
  ));

  return (
    <div>
      <br />
      <div className="pic-container">{showEntries}</div>
    </div>
  );
};
Viewallentries.propTypes = {
  results: PropTypes.array,
};
export default Viewallentries;


function entriesView(entry, handleDelete) {
  return <div className="article-column" key={entry.id}>
    {/* {entry.title} {" "} */}
    <div className="entry-info">
      <br />
      <header className="entry-header">
        <h3 className="entry-title">
          {entry.title}
        </h3>
      </header>
      <div className="entry-meta">
        <h5 className="entry-description">
          <span>{entry.body.substring(0, 25)}...</span>
          <br />
        </h5>
        <br />
      </div>

      <div class="buttons">
        <div>
          <time class="d-inline float-left entry-date">{entry.date_created}</time>
        </div>

        <div className="d-inline float-right">
          {/* <button class="d-inline view-button">View</button> */}
          {/* <button class="d-inline edit-button">Edit</button> */}
          <ViewEntry 
            title={entry.title}
            body={entry.body}
            date_created = {entry.date_created}
            date_modified = {entry.date_modified}
          />
          <EditEntryModal
            uniqueId={entry.id}
            title={entry.title}
            body={entry.body}
          />
          <DeleteEntryConfirm 
            delete={handleDelete} 
            uniqueId={entry.id} 
          />
        </div>
      </div>

      <br />
    </div>

  </div>;
}

Viewallentries.propTypes = {
  results: PropTypes.array,
  handleDelete: PropTypes.func
};

// export default Viewallentries;

