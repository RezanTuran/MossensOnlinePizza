import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import '../Admin/style.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

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
                        <thead>
                            <tr>
                                <th>Förnamn</th>
                                <th>Efternamn</th>
                                <th>Email</th>
                                <th>Ta Bort</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{val.userName}</td>
                                <td>{val.sureName}</td>
                                <td>{val.email}</td>
                                <td>
                                    <Button
                                    variant="contained"
                                        color="secondary"
                                        endIcon={<DeleteIcon />}
                                        onClick={() => { deleteAdmin(val.id) }}>Ta Bort
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </div>
    )
}

export default GetAdmin
