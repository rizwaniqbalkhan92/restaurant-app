import React from "react";
import "../User/UserSignIn.scss";
import { Card, TextField, Typography, Button } from "@material-ui/core";

const KitchenSignUp = () => {
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
              <Button className='btnj'>Join as Admin</Button>
              <Button className='btnj'>Join as User</Button>
          </div>
          </div>
              <Button className='btnLast4'>Already have an account. Sign Up</Button>
        </Card>
      </div>
    </div>
  );
};

export default KitchenSignUp;
