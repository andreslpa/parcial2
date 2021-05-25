import React, { useEffect, useState } from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';

const SeriesList = () => {
    const [series, setSeries] = useState([]);
    const seriesURL = "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/e2d16f7440d51cae06a9daf37b0b66818dd1fe31/series-en.json";
    useEffect(() =>{
        fetch(seriesURL)
            .then(response => response.json())
            .then(data => setSeries(data));
    },[])

    return(<>
    <h1>
        <FormattedMessage
            id="title"
        />
    </h1>
    <table className = "table table-striped">
        <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">
                    <FormattedMessage 
                    id= "nameHeader"
                    />
                </th>
                <th scope="col">
                    <FormattedMessage 
                    id= "channelHeader"
                    />
                </th>
                <th scope="col">
                    <FormattedMessage 
                    id= "seasonsHeader"
                    />
                </th>
                <th scope="col">
                    <FormattedMessage 
                    id= "episodesHeader"
                    />
                </th>
                <th scope="col">
                    <FormattedMessage 
                    id= "releaseDateHeader"
                    />
                </th>
            </tr>
        </thead>
        <tbody>
            {console.log(series)}
                {series.map((e, i) => <tr key={e.id}>
                    <th scope="row"> {e.id}</th>
                    <td>{e.name}</td>
                    <td>{e.channel}</td>
                    <td>{e.seasons}</td>
                    <td>{e.episodes}</td>
                    <td>
                        {e.release}
                    </td>
                </tr>)}
            </tbody>
    </table>

    </>);

}

export default SeriesList;