import React from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';

const SerieDetail = (props) =>{
    return (
        <div className="card">
            <img src={props.poster} class="card-img-top" alt="..."></img>
        </div>
    );
}