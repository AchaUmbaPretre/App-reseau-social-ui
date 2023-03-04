import React from 'react'
import './rightBar.scss'
import image3 from '../../assets/image3.jpg'
import acha from '../../assets/acha.jpg'


const RightBar = () => {
  return (
    <>
        <div className="rightBar">
          <div className="right-rows">
            <span>Suggestions For you</span>
            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <span>Acha Umba</span>
              </div>
              <div className="right-row-right">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>

            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <span>Acha Umba</span>
              </div>
              <div className="right-row-right">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
          </div>

          <div className="right-rows">
            <span>Lastest Activities</span>
            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <p><span>Acha Umba</span>changed their cover picture</p>
              </div>
              <div className="right-row-right">
                <span>1 min agon</span>
              </div>
            </div>
            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <p><span>Acha Umba</span>changed their cover picture</p>
              </div>
              <div className="right-row-right">
                <span>1 min agon</span>
              </div>
            </div>
            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <p><span>Acha Umba</span>changed their cover picture</p>
              </div>
              <div className="right-row-right">
                <span>1 min agon</span>
              </div>
            </div>
            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <p><span>Acha Umba</span>changed their cover picture</p>
              </div>
              <div className="right-row-right">
                <span>1 min agon</span>
              </div>
            </div> 
          </div>

          <div className="right-rows">
            <span>Online Friends</span>
            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <span>Acha Umba</span>
                <span className="enligne"></span>
              </div>
            </div>
            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <span>Acha Umba</span>
                <span className="enligne"></span>
              </div>
            </div>
            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <span>Acha Umba</span>
                <span className="enligne"></span>
              </div>
            </div>
            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <span>Acha Umba</span>
                <span className="enligne"></span>
              </div>
            </div>
            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <span>Acha Umba</span>
                <span className="enligne"></span>
              </div>
            </div>
            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <span>Acha Umba</span>
                <span className="enligne"></span>
              </div>
            </div>
            <div className="right-row">
              <div className="right-row-left">
                <img src={acha} alt="" />
                <span>Acha Umba</span>
                <span className="enligne"></span>
              </div>
            </div>
            <div className="right-row">
              <div className="right-row-left">
                <img src={image3} alt="" />
                <span>Acha Umba</span>
                <span className="enligne"></span>
              </div>
            </div>
          
            
          </div>
        </div>
    </>
  )
}

export default RightBar