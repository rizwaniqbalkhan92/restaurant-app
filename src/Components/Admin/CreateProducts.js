import React from 'react'
import {Typography,TextField,Button, Card}  from '@material-ui/core'
import './CreateProducts.scss'
import img1  from '../../images/rr.png'



const CreateProducts = () => {


// const onHandleChange=()=>{

// }

    return (
        <div>
        <Typography className='heading'>Create Products</Typography>
            <Card className='mainCard'>
            <div className='inputMain'>
            <div className='inputs'>
                <img  src={img1} width='100px' height='100px'  />
                <input type='file' />
            </div>
            <div className='inputs'>
                <img  src={img1} width='100px' height='100px'  />
                <input type='file' />
            </div>
            <div className='inputs'>
                <img  src={img1} width='100px' height='100px'  />
                <input type='file' />
            </div>
            </div>
            <div className='inputFields'>
                
                <TextField fullWidth variant='outlined' placeholder='Enter a Product Name'  />
                <TextField fullWidth variant='outlined' placeholder='Enter a Description Name'  />
                <TextField fullWidth variant='outlined' type='number' placeholder='Enter aPrice'  />
                <TextField fullWidth variant='outlined' placeholder='Cooking Time (Approx)'  />
                <TextField fullWidth variant='outlined' placeholder='Delivery Time (Approx)'  />
                <Button variant='contained' className='btn'>
                    <Typography>Create</Typography>
                </Button>
            </div>
            </Card>
        </div>
    )
}

export default CreateProducts

