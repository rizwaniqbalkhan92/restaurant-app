import React from 'react'
import UserSignIn from '../User/UserSignIn'
import AdminSignIn from '../Admin/AdminSignIn'
import AdminSignUp from '../Admin/AdminSignUp'
import CreateProfileAdmin from '../Admin/CreateProfile'
import CreateProfile from '../User/CreateProfile'
import CreateProfileKitchen from '../Kitchen/CreateProfileKitchen'
import DashboardAdmin from '../Admin/DashboardAdmin'
import KitchenDashboard from '../Kitchen/KitchenDashBord'
import Home from '../User/Home'
import {BrowserRouter as Router, Route,Link,useHistory}  from 'react-router-dom'
import UserSignUp from '../User/UserSignUp'
import KitchenSignIn from '../Kitchen/KichenSignIn'
import KitchenSignUp from '../Kitchen/KitchenSignUp'


const MainRouting = () => {
    return (
<Router>
    <Route path='/userSignIn'  exact  component={UserSignIn} />
    <Route path='/'  exact   component={Home} />
    <Route path='/userSignUp'    component={UserSignUp} />
    <Route path='/createProfile'    component={CreateProfile} />
    <Route path='/adminSignIn'    component={AdminSignIn} />
    <Route path='/adminSignUp'    component={AdminSignUp} />
    <Route path='/admin/dashboard'    component={DashboardAdmin} />
    <Route path='/kitchen/dashboard'    component={KitchenDashboard} />
    <Route path='/kitchen/createProfile'    component={CreateProfileKitchen} />
    <Route path='/admin/createProfile'    component={CreateProfileAdmin} />
    <Route path='/kitchenSignIn'    component={KitchenSignIn} />
    <Route path='/kitchenSignUp'    component={KitchenSignUp} />





</Router>
    )
}

export default MainRouting
