import React, { useState } from "react";
import { useIntl } from "react-intl";

const SerieDetail = (props) => {
  const intl = useIntl();
  const [error, setError] = useState(false);

  const imageLoadingError = intl.formatMessage({ id: "imageLoadingError" });
  return (
    <div className="card">
      <img
        src={props.poster}
        className="card-img-top"
        alt={error ? imageLoadingError : props.name}
        onError={() => setError(true)}
      ></img>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text">{props.description}</p>
        <a href={props.webpage}>{props.webpage}</a>
      </div>
    </div>
  );
};

export default SerieDetail;
