import React from 'react'
import Link from 'gatsby-link'

const Menu = () =>
    (
        <div style={{
            background:'f4f4f4',
            paddingTop:'10px'
        }}>
            <ul style={{
                listStyle:'none',
                justifyContent:'space-evenly',
                display:'flex'
            }}>
                <li><Link to="/">Portfolio</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/services">Pricing</Link></li>

            </ul>
            
        </div>
    )

export default Menu;