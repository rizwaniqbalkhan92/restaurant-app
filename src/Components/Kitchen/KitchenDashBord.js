import React from 'react'
import {Paper,Card,Button,Typography}  from '@material-ui/core'
// import './DashboardAdmin.scss'
import img  from '../../images/rr.png'
// import AllUsers  from './Allusers'
// import CreateProducts  from './CreateProducts'
// import Booking from './Booking'
import AllOrders from './AllOrders'


const KitchenDashboard = () => {
    return (
     
        <Paper className='dashboard-main'>
    <Card className='dashboard-links'>
        <div className='profileDiv'>
            <img  src={img} width='100px' hieght='100px' className='profile' />
            <Typography className='nameProfile'>Rizwan Iqbal Khan</Typography>
        </div>
<div className='btnDiv'>
    <Button variant='contained' fullWidth className='btns'>
        <Typography  className='btntext'>Users</Typography>
    </Button>
    {/* <Button className='btns' variant='contained' fullWidth>
        <Typography className='btntext'>Users</Typography>
    </Button>
    <Button className='btns' variant='contained' fullWidth>
        <Typography className='btntext'>Users</Typography>
  
    </Button>
   */}
    <Button className='btnsLogout' variant='contained' fullWidth>
        <Typography className='btntextLogout'>Users</Typography>
    </Button>
</div>



    </Card>
    <Card className='dashboard-links-data'>
      
{/* <AllUsers/> */}
{/* <CreateProducts/> */}
{/* <Booking/> */}
<AllOrders/>


    </Card>
        </Paper>
    )
}

export default KitchenDashboard
