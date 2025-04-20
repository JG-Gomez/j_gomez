import React, { useState } from "react";
import { randNum } from "./helper";
import Icons from "./components/Icons";

const App = () => {
    const [iconIndex, setIconIndex] = useState(randNum());
    const [colorIndex, setColorIndex] = useState(randNum());

    const handleClick = () => {
        setIconIndex(randNum());
        setColorIndex(randNum());
    };

    return (
        <div>
            <h1>Welcome to the Randomizer</h1>
            <Icons iconIndex={iconIndex} colorIndex={colorIndex} />
            <button onClick={handleClick}>Click to Generate</button>
        </div>
    );
};

export default App;
