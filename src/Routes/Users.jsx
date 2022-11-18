import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

// import { useParams } from 'react-router-dom';

function Users() {
    const [loading, setLoading]=useState(true)
    const [data, setData]=useState([])
    const[state]=useContext(AuthContext)
    // const params=useParams()
    const [isAuth]=useContext(AuthContext)
    console.log("isAuth",isAuth)
    useEffect(() => {
        setLoading(true)
        // const {id}=params
        axios({
            url:`https://reqres.in/api/users`,
            method:"GET"
        })
        .then((res)=>{
            setLoading(false);
            setData(res.data);
        })
        .catch((err)=>{
            setLoading(false)
            
        });
        // fetch("https://reqres.in/api/users").then((res)=>{res.json().then((res)=>{setData(res)})})
    }, []);
    // if(!isAuth){
    //     return <Navigate to='/login'/>
    // }
    
  return (
    <div style={{marginTop:"2rem"}}>
        {isAuth.token && <h3>Token: {isAuth.token}</h3>}
      {loading && <div>Loading</div>}
      <div  className="datacontiner">
      {data?.data?.map((item)=>(
    <div style={{marginBottom:"2rem"}} key={item.id}>
    <div>Name:{item.first_name}</div>
    <div>Email:{item.email}</div>
    <Link to={`/users/${item.id}`}><button style={{backgroundColor:"blue", color:"white",marginTop:"1rem"}}>See More</button></Link>
    </div>
))}
      </div>

    </div>
  )
}

export default Users;
