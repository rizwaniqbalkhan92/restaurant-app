import React from "react";
import "./UserSignIn.scss";
import { Card, TextField, Typography, Button } from "@material-ui/core";
import {useHistory}  from 'react-router-dom'

const UserSignIn = () => {
  const history=useHistory()
  return (
    <div>
      <div className="userSignIn">
        <Card className="signInDiv">
        <div className='divMov'>
          <Typography className='heading4'>Hello!</Typography>
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

          <Button  onClick={()=>history.push('/')} variant="contained" className="signInBtn">
            <Typography>Sign In</Typography>
          </Button>
          <div>
              <Button  onClick={()=>history.push('/adminSignIn')}>Join as Admin</Button>
              <Button  onClick={()=>history.push('/kitchenSignIn')}>Join as Kitchen Manager</Button>
          </div>
          </div>
              <Button  onClick={()=>history.push('/userSignUp')} className='btnLast'>I'm new user. Sign Up</Button>
        </Card>
      </div>
    </div>
  );
};

export default UserSignIn;
