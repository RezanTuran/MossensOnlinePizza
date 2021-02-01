import React, { useEffect, useState } from 'react'
import Axios from 'axios';


function GetAdmin() {
    const [adminList, setAdminList] = useState([])

    useEffect(() => {
        Axios.get('https://mossenspizzeria.herokuapp.com/api/getAdmin').then((Response) => {
            setAdminList(Response.data)
        })
    }, [])

    const deleteAdmin = (pizza) => {
        Axios.delete(`https://mossenspizzeria.herokuapp.com/api/deleteAdmin/${pizza}`)
        window.location.reload()
      }

    return (
        <div>
            {adminList.map((val) => {
                return (
                    <table>
                        <tr>
                            <th>Förnamn</th>
                            <th>Efternamn</th>
                            <th>Email</th>
                            <th>Ta Bort</th>
                        </tr>
                        <tr>
                            <td>{val.userName}</td>
                            <td>{val.sureName}</td>
                            <td>{val.email}</td>
                            <button onClick={() => { deleteAdmin(val.id) }}>Ta Bort</button>
                        </tr>
                    </table>
                )
            })}
        </div>
    )
}

export default GetAdmin
