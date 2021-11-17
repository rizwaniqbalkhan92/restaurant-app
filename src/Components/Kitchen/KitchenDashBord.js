import React from 'react'
import { Paper, Card, Button, Typography } from '@material-ui/core'
// import './DashboardAdmin.scss'
import img from '../../images/rr.png'
// import AllUsers  from './Allusers'
// import CreateProducts  from './CreateProducts'
// import Booking from './Booking'
import './KitchenDashBord.scss'
import AllOrders from './AllOrders'
import {BrowserRouter as Router ,useHistory,Switch, Route,Link}  from 'react-router-dom'

const KitchenDashboard = () => {

    const history=useHistory()
    return (
<Router>
<Switch>
        <Paper className='dashboard-main'>
            <Card className='dashboard-links'>
                <div className='profileDiv'>
                    <img src={img} width='100px' hieght='100px' className='profile' />
                    <Typography className='nameProfile'>Rizwan Iqbal Khan</Typography>
                </div>
                <div className='btnDiv'>
                    <Button onClick={()=>history.push('/kitchen/allorders')} variant='contained' fullWidth className='btns'>
                        <Typography className='btntext'>Users</Typography>
                    </Button>

                    <Button onClick={()=>history.push('/kitchenSignIn')} className='btnsLogout' variant='contained' fullWidth>
                        <Typography className='btntextLogout'>Log Out</Typography>
                    </Button>
                </div>



            </Card>
            <Card className='dashboard-links-data'>
                <AllOrders />

              


            </Card>
        </Paper>
        <Route  path='/kitchen/allorders'   component={AllOrders} />
        {/* <Route  path='/kitchen/allorders'   component={AllOrders} /> */}
</Switch>
</Router>
    )
}

export default KitchenDashboard
