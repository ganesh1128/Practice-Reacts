import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

function RoutesApp() {
  return (
  <Router>
   <Header />
      <div>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='about' element={<About/>}></Route>
        </Routes>
     </div>
  </Router>
   
  )
}

const Home = () => {
    return <h1>This is <span style={{color:"Red"}}>Home</span> page</h1>
}

const Profile = () =>{
    return <h1>This is <span style={{color:"green"}}>Profile</span> page</h1>
}

const About = () => {
    return <h1>This is <span style={{color:"blue"}}>About</span> page</h1>
}

const Header = () => {
    return (
        <>
         <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/profile'>Profile</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        </>
    )

}

export default RoutesApp