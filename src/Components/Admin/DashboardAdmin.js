import React from 'react'
import { Paper, Card, Button, Typography } from '@material-ui/core'
import './DashboardAdmin.scss'
import img from '../../images/rr.png'
import AllUsers from './Allusers'
import CreateProducts from './CreateProducts'
import Booking from './Booking'
import { useHistory, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const DashboardAdmin = () => {

    const history = useHistory()

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
                            <Button variant='contained' onClick={() => history.push('/admin/dashboard/bookings')} fullWidth className='btns'>
                                <Typography className='btntext'>Users</Typography>
                            </Button>
                            <Button onClick={() => history.push('/admin/dashboard/createProduct')} className='btns' variant='contained' fullWidth>
                                <Typography className='btntext'>Create Product</Typography>
                            </Button>
                            <Button className='btns' variant='contained' onClick={() => history.push('/admin/dashboard/allUsers')} fullWidth>
                                <Typography className='btntext'>Users</Typography>
                            </Button>
                            <Button className='btnsLogout' variant='contained' fullWidth>
                                <Typography className='btntextLogout'>Users</Typography>
                            </Button>
                        </div>



                    </Card>
                    <Card className='dashboard-links-data'>

                <Route path='/admin/dashboard/createProduct' exact={true} component={CreateProducts} />
                <Route path='/admin/dashboard/bookings' component={Booking} />
                <Route path='/admin/dashboard/allUsers' component={AllUsers} />
                        {/* <AllUsers/> */}
                        {/* <CreateProducts/> */}
                   
                    </Card>
                </Paper>


            </Switch>
        </Router>

    )
}

export default DashboardAdmin
