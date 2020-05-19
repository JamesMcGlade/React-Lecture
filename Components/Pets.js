import React from "react"

const Pets = (props) => {
    return (
      <div>
        <p>My pet's name is {props.name}. It's a cute {props.species} who loves {props.favefood}</p>
      </div>
    )
  }

export default Pets;