import React from 'react'
import { withRouter } from 'react-router-dom';
import "../App.css";

const Summery = (props) => {
    console.log(props.match.params)
    return (
        <div className="summery_section">
            <h1 className="movie">Movies Name : {props.match.params.name}</h1>
            <h1 className="averageRuntime">Movies averageRuntime : {props.match.params.averageRuntime}</h1>
            <h1 className="language">Movies language : {props.match.params.language}</h1>
            <h1 className="premiered">Movies premiered : {props.match.params.premiered}</h1>
            <h1 className="summary">Movies summary : {props.match.params.summary}</h1>
        </div>
    )
}

export default withRouter(Summery)
 