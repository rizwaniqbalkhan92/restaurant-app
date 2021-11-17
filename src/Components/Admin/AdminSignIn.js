import React from "react";
import "../User/UserSignIn.scss";
import { Card, TextField, Typography, Button } from "@material-ui/core";
import {useHistory}  from 'react-router-dom'
const AdminSignIn = () => {
const history=useHistory()
  return (
    <div>
      <div className="userSignIn">
        <Card className="signInDivAdmin">
        <div className='divMov2'>
          <Typography className='heading4'>Admin</Typography>
          <Typography className='heading45'>Sign In</Typography>
          {/* <Typography className='headin5'>User Sign In</Typography> */}

          <TextField
            variant="outlined"
            className="inputs"
            placeholder="Enetr Email "
          />

          <TextField
            variant="outlined"
            className="inputs"
            placeholder="Enetr Password "
          /><br/>
          {/* <TextField placeholder='Password' variant='contained' className='inputs' /> */}

          <Button onClick={()=>history.push('/admin/dashboard')} variant="contained" className="signInBtn">
            <Typography>Sign In</Typography>
          </Button>
          <div>
              <Button onClick={()=>history.push('/userSignIn')} className='btnj'>Join as User</Button>
              <Button className='btnj' onClick={()=>history.push('/kitchenSignIn')}>Join as Kitchen Manager</Button>
          </div>
          </div>
              <Button className='btnLast2' onClick={()=>history.push('/adminSignUp')}>I'm new. Sign Up</Button>
        </Card>
      </div>
    </div>
  );                               
};

export default AdminSignIn;
