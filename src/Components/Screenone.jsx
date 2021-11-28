import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const ScreenOne = (props) => {
    return (
        <div className="section_col">
            <img src={props.nameItem.show.image.original} alt="movies name" />
            <h1 className="nameText">{props.nameItem.show.name}</h1>
            <Link to={`/summery/${props.nameItem.show.id}/${props.nameItem.show.name}/${props.nameItem.show.averageRuntime}/${props.nameItem.show.language}/${props.nameItem.show.premiered}/${props.nameItem.show.summary}`}><button className="screen_button">Book Details</button></Link>
        </div>
    )
}

export default ScreenOne;
  