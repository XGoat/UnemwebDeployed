import React from 'react'
import './HeaderBlock.css'
import './header.css'
import UnemLogo from './images/Logo2.png'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function HeaderBlock({IsMenuOpen, setIsMenuOpen}) {
  return (
    <div className='HeaderBlock'>
        <div className='.HeaderBlock_info'>
            <div className='HeaderBlock_infoText'>
           
            </div>  
        </div>
        <div className='HeaderBlock_actions'>
            </div>
            <div className = 'header'>
          <div className='header_logo'> 
          <Link to='/'>
            <img 
            className='header_logoImg'
            src={UnemLogo}
            alt='Unem logo'
            /> 
          </Link>
          </div>
            <div className="header_links">
            <Link to='/'>Nature</Link>
            <Link to='/'>Technology</Link>
            <Link to='/'>Gaming</Link>
            <Link to='/'>LandScapes</Link>
            <Link to='/'>Unems Plan</Link>
            </div>
              <div className='header_right'>
              <Link to='/' className={IsMenuOpen && 'header_link--hidden'}>
              Shop
              </Link>
              <Link to='/login' className={IsMenuOpen && 'header_link--hidden'}>Unem Account</Link>
              </div>
                <div className="header_menu" 
                      onClick={() => setIsMenuOpen(!IsMenuOpen)}
                  >
                      {IsMenuOpen ? <CloseIcon /> : <MenuIcon />}
                 </div>
      </div>

    </div>
  )
}

export default HeaderBlock