const Table = ({data}) => {

    return (

        <>
            <h1>Character Info</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>
                        Name
                    </th>

                    <th>
                        Height
                    </th>

                    <th>
                        Hair Color
                    </th>

                    <th>
                        Gender
                    </th>
                </tr>
                </thead>
                <tbody>
                {data.map((Characters, index) => (
                    <tr key={index}>
                        <td className="tableData">
                            {Characters.name}
                        </td>
                        <td>
                            {Characters.height}
                        </td>
                        <td>
                            {Characters.hair_color}
                        </td>
                        <td>
                            {Characters.gender}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>

    )
}

export default Table;