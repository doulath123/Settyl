import React from 'react'
import { Route } from 'react-router-dom'
import {Routes, Link} from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Users from './Users';
import UsersPage from './UsersPage';

const Navebar=()=>{
    return (
        <nav  style={{display:"flex", gap:"2rem", justifyContent:"center"}}>
            <Link to='/'><button>Home</button></Link>
            <Link to='/about'><button>About</button></Link>
            <Link to='/contact'><button>Contact</button></Link>
            <Link to='/users'><button>Users</button></Link>
        </nav>
    )
}
function AllRoutes() {
  return (
      <>
      <Navebar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/users' element={<PrivateRoute><Users/></PrivateRoute>}>
            {/* <Route path="/:id" element={<h1>doulath</h1>}/> */}
        </Route>
        <Route path="users/:id" element={<PrivateRoute><UsersPage/></PrivateRoute>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes;