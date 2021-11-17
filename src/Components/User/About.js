import React from 'react'
import img from '../../images/food.jpg'
import { Card, Typography } from '@material-ui/core'
import './About.scss'

const About = () => {
    return (

        <div>
            <Card className='about'>
                <Typography className='headingAbout'>ABOUT US</Typography>
            <div className='texts'>
                <Typography className='textAbout'>
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    
                </Typography>
</div>
                <img src={img}  className='aboutImg' />
                <Typography className='textAbout'>
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    iweorpriworiwriwor  i iwoiowri wirowirw wirowiwop wriowirwo woriwoirw wirwoirwop
                    
                </Typography>


            </Card>
        </div>
    )
}

export default About
