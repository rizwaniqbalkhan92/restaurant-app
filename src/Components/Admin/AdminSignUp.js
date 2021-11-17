import React from "react";
import "../User/UserSignIn.scss";
import { Card, TextField, Typography, Button } from "@material-ui/core";

const AdminSignUp = () => {
  return (
    <div>
      <div className="userSignIn">
        <Card className="signInDivAdmin">
        <div className='divMov2'>
          <Typography className='heading4'>Admin</Typography>
          <Typography className='heading45'>Sign Up</Typography>
          {/* <Typography className='headin5'>User Sign In</Typography> */}

          <TextField
            variant="outlined"
            className="inputs"
            placeholder="Enetr Email "
          />
          <TextField
            variant="outlined"
            className="inputs"
            placeholder="Enetr User Name "
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
              <Button className='btnj'>Join as User</Button>
              <Button className='btnj'>Join as Kitchen Manager</Button>
          </div>
          </div>
              <Button className='btnLast3'>I'm new. Sign In</Button>
        </Card>
      </div>
    </div>
  );
};

export default AdminSignUp;
