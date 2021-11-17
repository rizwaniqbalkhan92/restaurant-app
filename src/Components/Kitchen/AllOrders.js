import React,{useState} from "react";
import { Typography,Modal, Button, Card } from "@material-ui/core";
import img1 from "../../images/rr.png";
import './Kitchen.scss'



const AllOrders = () => {

    const [openProfile,setOpenProfile]=useState(false)

  const data = [
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },
    {
      name: "Pizza Paratha",
      key: 1,
      images: { img1: img1, img2: img1, img3: img1 },
    },

  ];

  return (
      <>
    <div style={{overflowY:'scroll'}}>
      <Typography className='heading'>All Orders</Typography>
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

<Modal open={openProfile}>
<Card className='btnStatus'>
<h2>Food Status</h2>
<div className='foodStatus'>
  <Button  onClick={()=>setOpenProfile(false)} variant='contained' className='btnNotAvail'>
    <Typography>Not Available</Typography>
  </Button>
  <Button  onClick={()=>setOpenProfile(false)}  variant='contained' className='btnMaking'>
    <Typography>Making</Typography>
  </Button>
</div>
</Card>
</Modal>
  </>
  );
};

export default AllOrders;
