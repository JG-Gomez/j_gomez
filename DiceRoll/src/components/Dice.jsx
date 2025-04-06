import React from 'react';
import { diceNumbers } from '../helper';

const Dice = ({ diceValue }) => {
    return (
        <div className="dice">
            <i className={`fas fa-dice-${diceNumbers[diceValue]}`} />
        </div>
    );
};

export default Dice;