import React from "react";

function Question(props) {

    console.log(props)

    return (
        <div className="question">{props.question}</div>
    )
}

export default Question