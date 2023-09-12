import React from 'react'
import facebook from '../images/fb logo.png'
import twitter from '../images/twitter logo.png'
import instagram from '../images/instagram logo.png'
import gmail from '../images/gmail logo.png'

export default function Footer() {
  return (
    <div class="social-media"
      style={{
        display: 'flex',
        justifyContent: 'center'

      }}
    >
            <img
              src={facebook} 
              alt = "facebook logo"
              style = {{
                width: '25px',
                height: '25%',
              }} 
            />
            <img 
              src= {twitter} 
              alt= "twitter logo"
              style = {{
                width: '25px',
                height: '25%',
              }} 
            />
            <img 
              src = {instagram}
              alt ="instagram logo"
              style = {{
                width: '24px',
                height: '24px',
              }} 
            />
            <img 
            src= {gmail}
            alt="gmail logo"
            style = {{
              width: '49px',
              height: '25%',
            }} 
          />
    </div>
  )
}
