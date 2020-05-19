import React from "react";

const Movies = (props) => {
    return (
    <div>
        <p>You are watching {props.title}</p>
        <ul>
            <li>Year: {props.year}</li>
            <li>Genre: {props.genre}</li>
            <li>Trivia: {props.trivia}</li>
        </ul>
    </div>
    )
}

export default Movies;


