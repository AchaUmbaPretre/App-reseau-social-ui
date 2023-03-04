import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './login.scss'

const Login = () => {

  const { login }= useContext(AuthContext)

  const handLogin = () =>{
    login()
  }
  return (
    <>
        <div className="login">
          <div className="login-container">
            <div className="login-left">
              <h1 className="login-h1">BONJOUR</h1>
              <p className="login-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam possimus numquam est debitis! Velit,
                asperiores sint illum necessitatibus at tenetur! Aspernatur, vel. Veritatis nesciunt deleniti, quidem laudantium vel iure?
              </p>
              <Link to={'/register'}>
                <span>Tu n'as pas de compte ?</span>
              </Link>
              <a href="" className="login-btn">Register</a>
            </div>
            <div className="login-right">
              <h1>Login</h1>
              <form >
                <input type="text" placeholder='username' />
                <input type="text" placeholder='password'/>
                <button onClick={handLogin}>Envoyer</button>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login