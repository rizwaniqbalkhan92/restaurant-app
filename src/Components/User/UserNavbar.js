import React from "react";
import { Card, Typography, Button } from "@material-ui/core";
import img1 from "../../images/rr.png";
import "./UserNav.scss";

const UserNavbar = () => {
  return (
    <Card className="navbar3">
      <div className="card1">
        <Typography className="text">
          This is onooj sdsfskfskjvsvbskjvksjvbsjkvskjvsjvs
          vsvbskvskvsvjsvsjkvbskjvbskvjs vskjvbsvkjsbvjskvbsjkvbskjvbskj
          vsjvbsvjsbvjsvbsjvbsjvbsjvsbv
        </Typography>
      </div>

      <div className="iconsMain">
        <div className="icons">
          <img src={img1} width="50px" height="50px" className="iconsimg" />
          <img src={img1} width="50px" height="50px" className="iconsimg" />
          <img src={img1} width="50px" height="50px" className="iconsimg" />
          <img src={img1} width="50px" height="50px" className="iconsimg" />
        </div>
      </div>
      <div className="card1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.6056293694432!2d67.1131933144793!3d24.94550134798854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338a24e592ea7%3A0x396c11bf227c8d35!2sUBIT%20-%20Umaer%20Basha%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2s!4v1637087758333!5m2!1sen!2s"
          width="449"
          height="250"
          loading="lazy"
        ></iframe>
      </div>
      {/* <div className='cardnav'>
                   <Typography>This is onooj
                   sdsfskfskjvsvbskjvksjvbsjkvskjvsjvs
                   vsvbskvskvsvjsvsjkvbskjvbskvjs
                   vskjvbsvkjsbvjskvbsjkvbskjvbskj
                   vsjvbsvjsbvjsvbsjvbsjvbsjvsbv
                   </Typography>
               </div> */}
      {/* <div className='cardnav'>
               <div className='iconsMain'>
             <img  src={img1}  width='30px'  height='30px' className='icons'  />
             <img  src={img1}  width='30px'  height='30px' className='icons'  />
             <img  src={img1}  width='30px'  height='30px' className='icons'  />
               
               
               </div>
               </div>
               <div className='cardnav'>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.6056293694432!2d67.1131933144793!3d24.94550134798854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338a24e592ea7%3A0x396c11bf227c8d35!2sUBIT%20-%20Umaer%20Basha%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2s!4v1637087758333!5m2!1sen!2s" width="300" height="250"  loading="lazy"></iframe>
               </div> */}
    </Card>
  );
};

export default UserNavbar;
