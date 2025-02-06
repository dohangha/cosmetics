
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'
import logo from '../images/my-logo2.png'

function Navbar ()  {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick=()=> setClick(!click)
    const closeMobileMenu=()=> setClick(false)

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize', showButton)
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                <img src={logo} alt="logo" width="100px"/>                
                {/* HADO  <i class="fa fa-rss" aria-hidden="true"></i> */}
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to= '/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to= '/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className='nav-item'>
                    <Link to= '/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                </li>
                <li className='nav-item'>
                    <Link to= '/about' className='nav-links' onClick={closeMobileMenu}>About Us</Link>
                </li>
                <li className='nav-item'>
                    <Link to= '/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Shop Now</Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SHOP NOW</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar