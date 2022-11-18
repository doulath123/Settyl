import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Users() {
    const [loading, setLoading]=useState(true)
    const [data, setData]=useState([])
    const params=useParams()
    
    useEffect(() => {
        setLoading(true)
        const { id }=params
        
        axios({
            url:`https://reqres.in/api/users/${id}`,
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
    }, [params.id]);
    
  return (
    <div>
      {loading && <div>Loading</div>}
      <div style={{marginTop:"1rem"}} key={data?.data?.id}>
          <img src={data?.data?.avatar} style={{borderRadius:"1rem"}}/>
    <div style={{color:'blue'}}>Name: {data?.data?.first_name} {data?.data?.last_name}</div>
    <div style={{color:'violet'}}>Email: {data?.data?.email}</div>
    {/* <Link to={`/users/${data?.data?.id}`}>See More</Link> */}
{/* {data?.data?.map((item)=>(
    <div style={{marginBottom:"1rem"}} key={item.id}>
    <div>Name:{item.first_name}</div>
    <div>Email:{item.email}</div>
    <Link to={`/users/${item.id}`}>See More</Link>
    </div>
))} */}
</div>
    </div>
  )
}

export default Users;
