import React from "react"
import logoImage from '../assets/img/logo.svg'
const menu = [
    {
        title: 'Products',
        link: '/'
    },
    {
        title: 'Products',
        link: '/'
    },
    {
        title: 'Products',
        link: '/'
    }
]
const Header = () => {
    return (
    <div>
        <div className="logo">
            <img src={logoImage} alt="" />
        </div>
        <div className="menu-wrapper">
        <ul>
            {menu.map((item, idx) => (
                <li><a href={item.link}>{item.title}</a></li>) 
            )}
            
                
            </ul>
        </div>
    </div>
    )
}

export default Header