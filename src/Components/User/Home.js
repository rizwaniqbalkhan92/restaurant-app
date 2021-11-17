import React from 'react'
import UserHeader from './UserHeader'
import UserNavbar from './UserNavbar'
import UserCards from './UserCards'
import UserHeaderLinks from './UserHeaderLinks'


const Home = () => {
    return (
        <div>
            <UserHeader/>
            <UserHeaderLinks/>
        <UserCards/>
        <UserNavbar/>
        </div>
    )
}



export default Home
