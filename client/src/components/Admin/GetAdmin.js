import React, { useEffect, useState } from 'react'
import Axios from 'axios';


function GetAdmin() {
    const [adminList, setAdminList] = useState([])

    useEffect(() => {
        Axios.get('https://mossenspizzeria.herokuapp.com/api/getAdmin').then((Response) => {
            setAdminList(Response.data)
        })
    }, [])

    return (
        <div>
            {adminList.map((val) => {
                return (
                    <table>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>{val.userName}</td>
                            <td>{val.email}</td>
                            <td>{val.sureName}</td>
                        </tr>
                    </table>
                )
            })}
        </div>
    )
}

export default GetAdmin
