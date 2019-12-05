import React from 'react';
import './Header.css'
import '../../../common/styles/Container.css'
import Navlink from './navlink/Navlink';



function Header(){
    return(
        <header className="header">
        <div className="container">
            <div className="header_inner">
                <div className="header_logo">bookBar</div>
               <Navlink/>
            </div>
        </div>
    </header>
    )
}
export default Header;