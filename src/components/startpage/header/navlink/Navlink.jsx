import React from 'react'
import '../navlink/Navlink.css'
import {Link} from 'react-router-dom'
import Routes from './../../../../routes'


function Navlink(){
    return(<nav class="nav">
   <Link className="nav_link" to={Routes.Login.path}>{Routes.Login.text}</Link>
    <Link className="nav_link" to={Routes.SignUp.path}>{Routes.SignUp.text}</Link>
    </nav>)
}

export default Navlink;
