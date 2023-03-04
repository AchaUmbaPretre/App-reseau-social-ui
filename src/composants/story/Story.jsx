import React from 'react'
import './story.scss'
import acha from '../../assets/acha.jpg'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'


const Story = () => {
    const {currentUser} =  useContext(AuthContext)

  return (
    <>
        <div className="story">
            <div className="story-rows">
                <img src={acha} alt="aaaa" className="story-img" />
                <button className="boule"><i className="fas fa-plus"></i></button >
                <span>{currentUser.nom}</span>
            </div>
            <div className="story-rows">
                <img src={acha} alt="aaaa" className="story-img" />
                <span>Acha umba</span>
            </div>
            <div className="story-rows">
                <img src={acha} alt="aaaa" className="story-img" />
                <span>Acha umba</span>
            </div>
            <div className="story-rows">
                <img src={acha} alt="aaaa" className="story-img" />
                <span>Acha umba</span>
            </div>
            <div className="story-rows">
                <img src={acha} alt="aaaa" className="story-img" />
                <span>Acha umba</span>
            </div>
         
        </div>
    </>
  )
}

export default Story