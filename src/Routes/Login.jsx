import axios from 'axios'
import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

function Login() {
    const [state, dispatch]=useContext(AuthContext)
    const loginUser=async()=>{
      axios({
        url:"https://reqres.in/api/login",
        method:"POST",
        data:{
          email:'eve.holt@reqres.in',
          password:"cityslicka"
        }
      })
      .then(res=>{
        alert("success")
        dispatch({
          type:"LOGIN_SUCCESS",
          payload:res.data.token
        })
      
      })
      .catch(err=>{
        alert("failure")
      })
    }

    
    if(state.isAuth)
    {
        return <Navigate to='/users'/>
    }
  return (
    <>
    <h1>Login</h1>
    <button onClick=
        {loginUser}
    >Ligin</button></>
  )
}

export default Login
