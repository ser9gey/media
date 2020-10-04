import React, { useContext } from 'react'
import './_Users.scss'
import User from '../User/User'
import {MyContext} from '../../App'

const Users = () => {
    const { filteredUsers } = useContext(MyContext)
    const currUser = filteredUsers.map((el) => {
        return (
            <User key={el.id} id={el.id} el={el} />
        )
    })

    return (
        <div className="users">
            <ul className="users__ul">
               { currUser }
            </ul>
        </div>
    )
}

export default Users