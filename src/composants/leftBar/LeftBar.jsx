import React, { useContext } from 'react'
import './leftBar.scss'
import image3 from '../../assets/image3.jpg'
import acha from '../../assets/acha.jpg'
import premiere from '../../assets/1.png'
import deuxieme from '../../assets/2.png'
import trois from '../../assets/3.png'
import quatre from '../../assets/4.png'
import cinq from '../../assets/5.png'
import six from '../../assets/6.png'
import sept from '../../assets/7.png'
import huit from '../../assets/8.png'
import neuf from '../../assets/9.png'
import dix from '../../assets/10.png'
import onze from '../../assets/11.png'
import douze from '../../assets/12.png'
import treize from '../../assets/13.png'
import { AuthContext } from '../../context/authContext'

const LeftBar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <>
        <div className="leftBar">
            <div className="left-container">
              <div className="left-menu">
                <div className="left-user">
                  <img src={acha} alt="" className="left-user-img" />
                  <span>{currentUser.nom}</span>
                </div>
                <div className="left-items">
                  <img src={premiere} alt="" className="left-item-img" />
                  <span>Friends</span>
                </div>
                <div className="left-items">
                  <img src={deuxieme} alt="" className="left-item-img" />
                  <span>Groupe</span>
                </div>
                <div className="left-items">
                  <img src={trois} alt="" className="left-item-img" />
                  <span>Marketplace</span>
                </div>
                <div className="left-items">
                  <img src={quatre} alt="" className="left-item-img" />
                  <span>Watch</span>
                </div>
                <div className="left-items">
                  <img src={cinq} alt="" className="left-item-img" />
                  <span>Memoire</span>
                </div>
              </div>

              <hr className='left-hr' />
              <div className="left-menu">
                <span className="left-title">Your shortcuts</span>
                <div className="left-items">
                  <img src={six} alt="" className="left-item-img" />
                  <span>Events</span>
                </div>
                <div className="left-items">
                  <img src={sept} alt="" className="left-item-img" />
                  <span>Gaming</span>
                </div>
                <div className="left-items">
                  <img src={huit} alt="" className="left-item-img" />
                  <span>Gallery</span>
                </div>
                <div className="left-items">
                  <img src={neuf} alt="" className="left-item-img" />
                  <span>Videos</span>
                </div>
                <div className="left-items">
                  <img src={dix} alt="" className="left-item-img" />
                  <span>Messages</span>
                </div>
              </div>
              <hr className='left-hr' />
              <div className="left-menu">
                <span className="left-title">Others</span>
                <div className="left-items">
                  <img src={treize} alt="" className="left-item-img" />
                  <span>Fundraiser</span>
                </div>
                <div className="left-items">
                  <img src={onze} alt="" className="left-item-img" />
                  <span>Tutoriels</span>
                </div>
                <div className="left-items">
                  <img src={douze} alt="" className="left-item-img" />
                  <span>Courses</span>
                </div>
              </div>

            </div>
        </div>
    </>
  )
}

export default LeftBar