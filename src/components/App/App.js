import React, {Fragment, Component} from 'react'
import '../App/_App.scss';
import Header from '../App/HeaderTW/Header/Header'
import avatar from '../../images/Header/user.png'
import { BrowserRouter } from 'react-router-dom';

export const MyContext = React.createContext()

class App extends Component {
    state = {
        users: [],
        currCheckedUser: {},
        filteredUsers: [],
        currentValueInputSearch: "",
    }

    async componentDidMount() {
        const response = await fetch('http://swapi.dev/api/people/');
        const jsonDate = await response.json();
        const data = await jsonDate.results;
        const newdata = data.map(el => {
            const url = el.url
            const regEx  = /[0-9]{1,2}/;
            const id = url.match(regEx)[0]
           return {...el, id: id, checkedUser: false, avatar: avatar, imgFull: false}
        });
        this.setState(() => {
            return {
                users: newdata,
                filteredUsers: newdata
            } 
        })
    }

    //CheckedUser
    checkedUserOnClick = (event, id, curEl) => {
        event.preventDefault();
        const newUsers = [...this.state.users]
        newUsers.forEach((el) => {
            if(el.id === id && el.checkedUser === false) { el.checkedUser = true }
            else { el.checkedUser = false }
        })
        this.setState(() => {
            return {
                users: newUsers,
                currCheckedUser: curEl
            } 
        })
        console.log(newUsers);
        console.log(curEl);
    }

    //ShowAndHideFullAvatarUser
    showAndHideFullAvatar = (curUser) => {
        const currentUser = {...this.state.currCheckedUser}
        if(currentUser.id === curUser.id && currentUser.imgFull === false) { currentUser.imgFull = true }
        else { currentUser.imgFull = false }
        this.setState(() => {
            return { currCheckedUser: currentUser}
        })
    }

    //searchUser
    searchUser = (event) => {
        const AllUser = [...this.state.users]
        const target = event.target.value
        const targettoLowerCase = event.target.value.toLowerCase()
        const selectedUser = AllUser.filter((user) => { 
            return user.name.toLowerCase().indexOf(targettoLowerCase) > -1
        })
        this.setState(() => { 
            return {
                filteredUsers: selectedUser,
                currentValueInputSearch: target
            }
        })
    }

    render() {
        const dates = this.state; // вспомоготельное нужно удалить
        console.log(dates)

        const value = {
            filteredUsers: this.state.filteredUsers,
            checkedUserOnClick: this.checkedUserOnClick,
            currCheckedUser: this.state.currCheckedUser,
            showAndHideFullAvatar: this.showAndHideFullAvatar,
            searchUser: this.searchUser,
            currentValueInputSearch: this.state.currentValueInputSearch
        }
        return (
            <MyContext.Provider value={value} >
                <BrowserRouter>
                    <Fragment>
                        <Header />
                    </Fragment>
                </BrowserRouter>
            </MyContext.Provider>
        )
    }
    
}

export default App