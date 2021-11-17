import React from "react";
import "./CreateProfile.scss";
import img1 from "../../images/img1.jpg";
import { TextField, Card, Paper, Typography, Button } from "@material-ui/core";
import {useHistory}  from 'react-router-dom'


const CreateProfile = () => {
  const history=useHistory()
  
  return (
    <div className="createProfile">
      <Typography className="create-profile-heading">Create Profile</Typography>
      <Card className="create-profile-card">
        <div className="imgHandler">
          <img src={img1} width="80px" height="80px" />
          <input type="file" className="inpHandler" />

          {/* <TextField className='inpHandler' type='file' /> */}
        </div>
        <div className="createProfileBox">
          <div className="createProfileBoxInner">
            <TextField
              variant="outlined"
              className="textInpt"
              color="primary"
              fullWidth
              placeholder="Enter Your Name"
            />
            <TextField
              variant="outlined"
              className="textInpt"
              color="primary"
              fullWidth
              placeholder="Enter Your Name"
            />
            <TextField
              variant="outlined"
              className="textInpt"
              color="primary"
              fullWidth
              placeholder="Enter Your Name"
            />
            <TextField
              variant="outlined"
              className="textInpt"
              color="primary"
              fullWidth
              placeholder="Enter Your Name"
            />
          </div>
          <div className="createProfileBoxInner">
            <TextField
              variant="outlined"
              className="textInpt"
              color="primary"
              fullWidth
              placeholder="Enter Your Name"
            />
            <TextField
              variant="outlined"
              className="textInpt"
              color="primary"
              fullWidth
              placeholder="Enter Your Name"
            />
            <TextField
              variant="outlined"
              className="textInpt"
              color="primary"
              fullWidth
              placeholder="Enter Your Name"
            />
            <TextField
              variant="outlined"
              className="textInpt"
              color="primary"
              fullWidth
              placeholder="Enter Your Name"
            />
          </div>
        </div>
        <Button onClick={()=>history.push('/')} variant='contained' color='info'>
            <Typography>Create</Typography>
        </Button>
      </Card>
    </div>
  );
};

export default CreateProfile;
