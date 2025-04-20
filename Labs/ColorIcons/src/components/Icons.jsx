import React from "react";
import { colors, icons } from "../helper";

const Icons = ({ iconIndex, colorIndex }) => {

    const icon = icons[iconIndex];
    const color = colors[colorIndex];

    return (
        <div>
            <i
                className={`fa fa-${icon}`}
                style={{ color: color, fontSize: "50px" }}
            ></i>
            <h2>
                {icon} but in {color}
            </h2>
        </div>
    );
};

export default Icons;
