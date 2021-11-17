import * as React from 'react';
import './UserHeader.scss'
import {Button,Typography}  from '@material-ui/core'
import {useHistory}  from 'react-router-dom'

export default function UserHeader() {
  const history=useHistory()
  return (

 <div className='navbar'>
<div className='navbar-inner1'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItycGdolc1CyVEIiEc3PXmmBUAtt5dzzM8g&usqp=CAU'   className='navbar-img'  />
    <h3 className='navbar-heading'>Rizwan Iqbal</h3>
</div> 

<div className='navbar-inner3'>
{/* <button className='header-logout-btn' >Logout</button> */}
<Button  onClick={()=>history.push('/userSignIn')} color='success' className='btnLogout' variant='contained'>
  <Typography>Login</Typography>

</Button>

</div>
 </div>
  );
}
