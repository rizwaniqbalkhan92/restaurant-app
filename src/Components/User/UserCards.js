import React,{useState} from "react";
import { Paper,Modal, Card, Typography, Button, TextField } from "@material-ui/core";
import "./userCards.scss";
import img1 from "../../images/img2.jpg";
import img2 from "../../images/img3.jpg";
import img3 from "../../images/img1.jpg";
// import { TRUE } from "node-sass";

const UserCards = () => {
const [open,setOpen]=useState(false)
const [open2,setOpen2]=useState(false)
const [image1,setImageBig]=useState(img1)

  const data = [
    // {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
    {foodName: "Pizza", price: "300", des: "6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread",  images: {img1: img1, img2: img2, img3: img3,},  },
  ];
const onModalTwoOpen=()=>{
    setOpen(false)
    setOpen2(true)
}
  return (
    <Paper className="cardSections">
    {
        data.map((val,ind)=>(
            <Card className="card">
        <img className="cardImg" src={val.images.img1} />
        <div className="cardText">
          <Typography className="food-name">{val.foodName}</Typography>
          <Typography className="food-price">{`Rs.${val.price}`}</Typography>
        </div>
        <Typography className="food-des">
          6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread
        </Typography>
        <Button onClick={()=>setOpen(true)} variant="contained" className="btnAddToCard">
          <Typography>Add to Cart</Typography>
        </Button>
      </Card>
        ))
    }
 
   <Modal open={open}>
     <Card  className='modal' >
      
                <div className='modalPart1'>
                <img src={image1}  className='modalImg1'  />
                
                <div>
                <img src={img1} onClick={()=>setImageBig(img1)}  className='modalSmallImg1'   />
                <img src={img2}   onClick={()=>setImageBig(img2)} className='modalSmallImg1'   />
                <img src={img3}  onClick={()=>setImageBig(img3)}  className='modalSmallImg1'  /> 
                
                </div>

                </div>
            <div className='modalPart2'>
            {/* <Button className='modalCancel'  onClick={()=>setOpen(false)}>             <Typography>
                 X
             </Typography>         </Button>  */}
   
   
   
    <Typography className='pdeal'>PREMIUM DEAL 2</Typography>
    <Typography className='des'> 6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread 6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread 6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread 6 Pcs Wings, 2 Dips, 24 Pcs SpicyGarlic Bread</Typography>
    <Typography className='timeCooking'>{`Cooking Time : 30 Minutes`}</Typography>
    <Typography className='timeDelivery'>{`Delivery Time : 30 Minutes`}</Typography>
    <Typography className='price'>{`Rs.300 Pkr`}</Typography>
    <div className='btns'>
    <Button variant='contained' className='btnCancel'  onClick={()=>setOpen(false)}>
        <Typography>Cancel</Typography>
    </Button>
    <Button className='btnCheck'  onClick={onModalTwoOpen} variant='contained'>
        <Typography >Check Out</Typography>
    </Button>
         </div>
            </div>

{/* <div>
    <Button onClick={()=>setOpen(false)}>
        <Typography>Cancel</Typography>
    </Button>
    <Button>
        <Typography onCLick={()=>setOpen(false)}>Check Out</Typography>
    </Button>
</div> */}
     </Card>  
   </Modal>
   <Modal open={open2}>
    <Card className='modalCard2'>
    
    <Button onClick={()=>setOpen2(false)}>
        <Typography>X</Typography>
    </Button>
    <Typography className='pd'>Payment Details</Typography>
    <div className='modalInputs'>
    <TextField placeholder='Enter Name' fullWidth  variant='outlined' className='input1' />
    <TextField placeholder='Enter Name' fullWidth  variant='outlined' className='input1' />
    <TextField placeholder='Enter Name' fullWidth  variant='outlined' className='input1' />
    <TextField placeholder='Enter Name' fullWidth  variant='outlined' className='input1' />
    <TextField placeholder='Enter Name' fullWidth  variant='outlined' className='input1' />
    <TextField placeholder='Enter Name' fullWidth  variant='outlined' className='input1' />
      
      <Button variant='contained'  className='btnDone'  onClick={()=>{
              setOpen2(false)
          }}>
          <Typography className='btnDoneText' >Done</Typography>
      </Button>
        </div>
        
    </Card>
   </Modal>
    </Paper>
  );
};

export default UserCards;
