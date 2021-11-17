import React from "react";
import "../User/UserSignIn.scss";
import { Card, TextField, Typography, Button } from "@material-ui/core";
import {useHistory}  from 'react-router-dom'


const KitchenSignUp = () => {
  const history=useHistory()
  
  return (
    <div>
      <div className="userSignIn">
        <Card className="signInDivKitchen">
        <div className='divMov2'>
          <Typography className='heading4'>Kitchen</Typography>
          <Typography className='heading45'>Sign Up</Typography>
          {/* <Typography className='headin5'>User Sign In</Typography> */}

          <TextField
            variant="outlined"
            className="inputs"
            placeholder="Enter Username "
          />
          <TextField
            variant="outlined"
            className="inputs"
            placeholder="Enter Email "
          />

          <TextField
            variant="outlined"
            className="inputs"
            placeholder="Enetr Password "
          /><br/>
          {/* <TextField placeholder='Password' variant='contained' className='inputs' /> */}

          <Button variant="contained" className="signInBtn">
            <Typography>Sign Up</Typography>
          </Button>
          <div>
              <Button onClick={()=>history.push('/adminSignIn')} className='btnj'>Join as Admin</Button>
              <Button onClick={()=>history.push('/userSignIn')} className='btnj'>Join as User</Button>
          </div>
          </div>
              <Button onClick={()=>history.push('/kitchenSignIn')} className='btnLast4'>Already have an account. Sign In</Button>
        </Card>
      </div>
    </div>
  );
};

export default KitchenSignUp;
