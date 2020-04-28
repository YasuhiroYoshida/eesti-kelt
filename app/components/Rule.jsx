import React from 'react';
import PropTypes from 'prop-types';

// Rule component
// - shows what rule applies to a searched word
const Rule = ({ number, text }) => {
  let cleanedNumber = number;
  // number comes in one of the following two forms: "123" or "123b"
  if (cleanedNumber.match(/[a-z]/i)) {
    cleanedNumber = cleanedNumber.slice(0, cleanedNumber.length - 1);
  }
  return (
    <div key={number} className="row">
      <div className="col-xs-3">
        <span className="glyphicon glyphicon glyphicon-list-alt" />
        <a target="_blank" rel="noreferrer noopener" href={`http://www.eki.ee/dict/qs/muuttyybid.html#${cleanedNumber}`}>
          <em>Rule {number}:</em>
        </a>
      </div>
      <div className="col-xs-9">
        {text}
      </div>
    </div>
  );
};

Rule.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Rule;
