import React from 'react';

const Students = (props) => {
    return(
        <div>
            <p>Hello my name is {props.name} and I am {props.age} years old.</p>
        </div>
    )
}

export default Students;