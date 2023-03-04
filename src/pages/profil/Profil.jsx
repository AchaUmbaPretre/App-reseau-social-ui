import React from 'react'
import './profil.scss'
import acha from '../../assets/acha.jpg'
import Posts from '../../composants/posts/Posts'

const Profil = () => {
  return (
    <>
      <div className="profil">
        <img src={acha} alt="" className="profil-img" />
        <div className="profil-top">
          <div className="profil-top-row">
            <img src={acha} alt="" />
            <span>ndambi</span>
          </div>
          <div className="profil-center">
            <div className="profil-icons">
                <i className="fab fa-facebook face"></i>
                <i className="fab fa-twitter twitter"></i>
                <i className="fab fa-instagram insta"></i>
                <i className="fab fa-youtube tube"></i>
            </div>
            <div className="profil-icons">
              <div className="profil-wrapper">
                <div className="profil-icons-row">
                  <i className="fa fa-location-dot red"></i>
                  <span>USA</span>
                </div>
                <div className="profil-icons-row">
                  <i className="fa fa-globe globe"></i>
                  <span>Acha</span>
                </div>
              </div>
            </div>
            <div className="profil-icons">
              <div className="profil-right">
                <i className="fa-regular fa-envelope"></i>
                <span>...</span>
              </div>
            </div>
          </div>
          <div className="profil-follow">
            <button>follow</button>
          </div>
        </div>
        <Posts/>
      </div>
    </>
  )
}

export default Profil