import React,{useState} from "react";
import { Typography,Modal, Button, Card } from "@material-ui/core";
import img1 from "../../images/rr.png";


const Allusers = () => {

    const [openProfile,setOpenProfile]=useState(false)

  const data = [
    {
      name: "Rizwan Iqbal",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Rizwan Iqbal",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Rizwan Iqbal",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Rizwan Iqbal",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Rizwan Iqbal",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
  ];

  return (
      <>
    <div style={{overflowY:'scroll',height:650}}>
      <Typography className='heading'>All Users</Typography>
      {data.map((val, ind) => (
        <Card className='userCards'>
          <div className="innerCard">
            <img
              src={img1}
              width="50px"
              hieght="50px"
              className="allUsersImages"
            />
            <Typography  className='userDataText'>{val.name}</Typography>
          </div>
          <Button onClick={()=>setOpenProfile(true)}>
            <Typography className='userDataText2'>View</Typography>
          </Button>
        </Card>
      ))}


    </div>
      {/* <Modal open={openProfile}>
            <Button onClick={()=>setOpenProfile(false)}>X</Button>
          <Card  className='profileCard'> 
          <img src={img1}  className='profileCardImg'   width='100px'  hieght='100px'      />
          <Typography>Name: Rizwan Iqbl Khan</Typography>
          <Typography>Email: rizwaniqbalkhan92@gmail.com</Typography>
          <Typography>Mobile:03030303030</Typography>
          </Card>
      </Modal> */}
  </>
  );
};

export default Allusers;
