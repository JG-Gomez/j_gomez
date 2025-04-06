import React, { useState } from 'react';
import { RandomNumber } from './helper';
import Dice from './components/Dice';
import './App.css';

const App = () => {
    const [firstDice, setFirstDice] = useState(0);
    const [secondDice, setSecondDice] = useState(0);

    const diceRoll = () => {
        setFirstDice(RandomNumber());
        setSecondDice(RandomNumber());
    };

    const diceTotal = firstDice + secondDice + 2;

    return (
        <div className="App">
            <h1>Test Your Luck!!!</h1>
            <div className="dice-container">
                <Dice diceValue={firstDice} />
                <Dice diceValue={secondDice} />
            </div>
            <div className="dice-numbers">
                {firstDice !== null && secondDice !== null && (
                    <p>
                        You rolled: {diceTotal} !!!
                    </p>
                )}
            </div>
            <button onClick={diceRoll}>Click me !!!</button>

        </div>
    );
};

export default App;