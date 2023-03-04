import React from 'react'
import {Link} from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <>
        <div className="register">
          <div className="register-container">
            <div className="register-container">
              <div className="register-left">
                <h1 className="register-h1">POLICE SOCIAL.</h1>
                <p className="register-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam possimus numquam est debitis! Velit,
                  asperiores sint illum necessitatibus at tenetur! Aspernatur, vel. Veritatis nesciunt deleniti, quidem laudantium vel iure?
                </p>
                <Link to={'/login'}>
                  <span>Avez-vous un compte ?</span>
                </Link>
                <a href="" className="register-btn">Register</a>
              </div>
              <div className="register-right">
                <h1>Register</h1>
                <form >
                  <input type="text" placeholder='username' />
                  <input type="text" placeholder='password'/>
                  <input type="text" placeholder='password'/>
                  <input type="text" placeholder='password'/>
                  <button>Envoyer</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Register