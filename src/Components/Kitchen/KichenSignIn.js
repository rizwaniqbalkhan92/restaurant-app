import React from "react";
import "../User/UserSignIn.scss";
import { Card, TextField, Typography, Button } from "@material-ui/core";
import  {useHistory}   from 'react-router-dom' 
const KitchenSignIn = () => {
  const history=useHistory()

  
  return (
    <div>
      <div className="userSignIn">
        <Card className="signInDivKitchen">
        <div className='divMov2'>
          <Typography className='heading4'>Kitchen</Typography>
          <Typography className='heading45'>Sign In</Typography>
          {/* <Typography className='headin5'>User Sign In</Typography> */}

          <TextField
            variant="outlined"
            className="inputs"
            placeholder="EnterEmail "
          />

          <TextField
            variant="outlined"
            className="inputs"
            placeholder="Enetr Password "
          /><br/>
          {/* <TextField placeholder='Password' variant='contained' className='inputs' /> */}

          <Button onClick={()=>history.push('/kitchen/createProfile')} variant="contained" className="signInBtn">
            <Typography>Sign In</Typography>
          </Button>
          <div>
              <Button onClick={()=>history.push('/userSignIn')} className='btnj'>Join as Admin</Button>
              <Button className='btnj'>Join as User</Button>
          </div>
          </div>
              <Button onClick={()=>history.push('/kitchenSignUp')} className='btnLast2'>I'm new. Sign Up</Button>
        </Card>
      </div>
    </div>
  );
};

export default KitchenSignIn;
