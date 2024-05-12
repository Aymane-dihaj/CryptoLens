import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';

function Footer() {
  return (
    <div className='footer'>
        <p>Designed & Developed, and Deployed by Aymane Dihaj</p>
        <div className="contact">
            <a href="https://github.com/Aymane-dihaj" target='_blank'><GitHubIcon className='contact-icon'/></a>
            <a href="https://www.instagram.com/nozel.jsx" target='_blank'><InstagramIcon className='contact-icon'/></a>
            <a href='https://www.linkedin.com/in/aymane-dihaj-66692b29b/' target='_blank'><LinkedInIcon className='contact-icon'/></a>
        </div>
        <p>© cryptoLens - All rights reserved</p>
    </div>
  )
}

// linked in profile url: https://www.linkedin.com/in/aymane-dihaj-66692b29b/

export default Footer
