import React, { useContext } from 'react'
import Users from '../Users/Users'
import InfoAboutUser from '../InfoAboutUser/InfoAboutUser'
import NoInfoAboutUser from '../NoInfoAboutUser/NoInfoAboutUser'
import './_HeaderMain.scss'
import {MyContext} from '../../App'

const HeaderMain = () => {
    const { filteredUsers } = useContext(MyContext);
    const page = filteredUsers.every((el) => {
        return !el.checkedUser ? true : false
    })
    return (
        <div className="header-main">
        <Users />
        {page
            ? <NoInfoAboutUser />
            : <InfoAboutUser />
        }
        </div>
    )
}

export default HeaderMain