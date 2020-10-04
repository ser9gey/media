import React, {useContext} from 'react'
import './_User.scss'
import {MyContext} from '../../App'

const User = ({el, id}) => {
  const { checkedUserOnClick } = useContext(MyContext);
  let className = "users__ul-li"
  if(el.checkedUser) {
    className += " users__ul-li_checked"
  }
  return (
      <li className={className} onClick={(event) => checkedUserOnClick(event, id, el)}>
        <img className="users__ul-img" src={el.avatar} alt="user" />
        <a className="users__ul-li-a" href="/">{el.name}</a>  
      </li>
  )
}

export default User