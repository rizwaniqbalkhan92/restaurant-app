import React from "react";
import "./UserSignIn.scss";
import { Card, TextField, Typography, Button } from "@material-ui/core";
import {useHistory}  from 'react-router-dom'
const UserSignUp = () => {
  const history=useHistory()
  return (
    <div>
      <div className="userSignIn">
        <Card className="signInDiv">
        <div className='divMov2'>
          <Typography className='heading4'>Hello!</Typography>
          <Typography className='heading45'>Sign Up</Typography>
          {/* <Typography className='headin5'>User Sign In</Typography> */}
          <TextField
            variant="outlined"
            className="inputs"
            placeholder="Enter User name"
          />
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

          <Button  onClick={()=>history.push('/createProfileUser')} variant="contained" className="signInBtn">
            <Typography>Sign Up</Typography>
          </Button>
          <div>
              <Button onClick={()=>history.push('/adminSignIn')}>Join as Admin</Button>
              <Button onClick={()=>history.push('/kitchenSignIn')}>Join as Kitchen Manager</Button>
          </div>
          </div>
              <Button onClick={()=>history.push('/userSignIn')} className='btnLast'>Already have an account. Sign In</Button>
        </Card>
      </div>
    </div>
  );
};

export default UserSignUp;
