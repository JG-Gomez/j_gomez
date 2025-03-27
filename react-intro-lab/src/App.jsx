import React from "react";
import UserCard from "./components/UserCard.jsx"
import MyGreeting from "./components/Greetings.jsx";
import {people} from "./Util/database.js";
import CardContainer from "./components/CardContainer.jsx";

const App = () => {
    const sorter = (a, b) => b.age - a.age;

    return (
            <div>
                <MyGreeting fName="Jeremiah"/>
                <CardContainer>{
                    people.sort(sorter).map((person)=>
                        <UserCard age={person.age} name={person.name}/>
                    )
                }</CardContainer>
            </div>
    )
}

export default App;