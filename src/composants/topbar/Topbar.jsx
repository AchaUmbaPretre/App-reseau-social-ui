import React, { useContext } from 'react'
import './topbar.scss'
import acha from '../../assets/acha.jpg'
import {Link} from 'react-router-dom'
import { DarkContext } from '../../context/ModeContext'
import { AuthContext } from '../../context/authContext'


const Topbar = () => {

  const {toggle, darkMode} = useContext(DarkContext)

  const {currentUser} = useContext(AuthContext)

  return (
    <>
        <div className="topbar">
            <div className="topleft">
              <Link to={''} >
                <span className="top-title">Acha Social</span>
              </Link>
              <i className="fas fa-house"></i>
              <i className={`fa-regular ${darkMode ? "fa-sun": "fa-moon" }`} onClick={toggle}></i>
              <i className="fa fa-border-none"></i>
              <div className="topbar-row-icons">
                <i className="fas fa-search"></i>
                <input type="search" className="topbar-search" placeholder='search' />
              </div>
            </div>
            <div className="top-right">
              <i className="fa-regular fa-user"></i>
              <i className="fa-regular fa-envelope"></i>
              <i className="fa-regular fa-bell"></i>
              <div className="top-right-icons">
                <img src={acha} alt="" className="top-right-img" />
                <span className="top-name">{currentUser.nom}</span>
              </div>
            </div>
        </div>
    </>
  )
}

export default Topbar