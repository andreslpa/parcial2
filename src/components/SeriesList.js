import React from "react";
import { FormattedDate, FormattedMessage } from "react-intl";

const SeriesList = (props) => {
  const series = props.series;
  return (
    <>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="nameHeader" />
            </th>
            <th scope="col">
              <FormattedMessage id="channelHeader" />
            </th>
            <th scope="col">
              <FormattedMessage id="seasonsHeader" />
            </th>
            <th scope="col">
              <FormattedMessage id="episodesHeader" />
            </th>
            <th scope="col">
              <FormattedMessage id="releaseDateHeader" />
            </th>
          </tr>
        </thead>
        <tbody>
          {series.map((e) => (
            <tr key={e.id}>
              <th scope="row"> {e.id}</th>
              <td onClick={() => props.handle(e)}>{e.name}</td>
              <td>{e.channel}</td>
              <td>{e.seasons}</td>
              <td>{e.episodes}</td>
              <td>
                <FormattedDate
                  value={
                    new Date(
                      e.release.split("/")[2],
                      e.release.split("/")[1],
                      e.release.split("/")[0]
                    )
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SeriesList;
