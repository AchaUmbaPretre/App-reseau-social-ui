import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './register.scss'
import axios from 'axios'

const Register = () => {

  const [inputs, setInputs] = useState({});

  const handChange = (e) =>{
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  }
  const [error, setError] = useState(false);

  const handSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/api/auth/register",inputs)
    }
    catch(error){
      setError(error.response.data)
    }
  }

  return (
    <>
        <div className="register">
          <div className="register-container">
            <div className="register-container">
              <div className="register-left">
                <h1 className="register-h1">POLICE SOCIAL</h1>
                <p className="register-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam possimus numquam est debitis! Velit,
                  asperiores sint illum necessitatibus at tenetur! Aspernatur, vel. Veritatis nesciunt deleniti, quidem laudantium vel iure?
                </p>
                <Link to={'/login'}>
                  <span>Avez-vous un compte ?</span>
                </Link>
                <Link href="" className="register-btn">Register</Link>
              </div>
              <div className="register-right">
                <h1>Register</h1>
                <form >
                  <input type="text" placeholder='username' name='username' onChange={handChange} />
                  <input type="email" placeholder='email' name='email' onChange={handChange}/>
                  <input type="password" placeholder='password' name='password' onChange={handChange}/>
                  <input type="text" placeholder='name' name='name' onChange={handChange}/>
                  <button onClick={handSubmit} >Envoyer</button>
                  { error && <span className="error">{error}</span>} 
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Register