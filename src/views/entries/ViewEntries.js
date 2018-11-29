import React from "react";
import "../../assets/entryAssets/entrypage.scss";
import PropTypes from "prop-types";

const Viewallentries = ({ results }) => {
  const showEntries = results.map(entry => (
    <EntryCard {...entry} key={entry.id} />
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

export const EntryCard = entry => (
  <div className="article-column">
    
    <div className="entry-info">
      <br />
      <header className="entry-header">
        <h3 className="entry-title">
            {entry.title}
        </h3>
      </header>
      <div className="entry-meta">
        <h5 className="entry-description">
          <span>{entry.body}</span>
          <br />
        </h5>
        <br />
      </div>
      <time class="entry-date">{entry.date_created}</time>
      <br />
    </div>
  </div>
);
