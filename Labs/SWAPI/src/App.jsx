import axios from "axios";
import Table from "./components/Table.jsx";
import {useState} from "react";

const App = () => {

    const [tableInfo, setTableInfo] = useState([]);
    const [callTable, setCallTable] = useState(false);

    const handleSubmit = async () => {
        try {
            // console.log("submit works")
            const tableData = await axios.get('https://swapi.dev/api/people')
            setTableInfo(tableData.data.results)
            setCallTable(true)
        } catch (err) {
            console.log("ERROR: ", err)
        }
    }


    const handleReset = async () => {
        // console.log("reset works")
        setTableInfo([])
        setCallTable(false)
    }

    return (

        <div>
            <h1>Star Wars Characters</h1>
            <button onClick={handleSubmit}>
                Generate Table
            </button>
            <button onClick={handleReset}>
                Reset Table
            </button>

            {callTable && <Table data={tableInfo}/>}
        </div>


    )
}

export default App;