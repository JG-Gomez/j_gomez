import React from "react";

const CardContainer = (props) => {

    return (
        <div style={{border: "2px solid", padding: 20}}>
            {props.children}
        </div>

    )
}

export default CardContainer;