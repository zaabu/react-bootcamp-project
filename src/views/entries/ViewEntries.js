import React from "react";
import "../../assets/entryAssets/entrypage.scss";
import PropTypes from "prop-types";
import DeleteEntryConfirm from "../../components/entries/deleteDiaryEntry";

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
  return <div className="article-column">

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
        <div class="float-left">
          <time class="entry-date d-inline">{entry.date_created}</time>
        </div>

        <div class="float-right">
          <button class="d-inline view-button">View</button>
          <button class="d-inline edit-button">Edit</button>
          <DeleteEntryConfirm delete={handleDelete} uniqueId={entry.id} />
        </div>
      </div>

      <br />
    </div>

  </div>;
}

