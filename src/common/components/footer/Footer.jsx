import React from 'react'
import './Footer.css'
import '../../styles/Container.css'
let Footer=()=>{
return(
<footer className="footer">
<div className="container">
    <div className="footer_inner">
        <div className="footer_col">
                <div className="footer_logo">bookBar</div>
                 <div className="footer_text">Твой книжный трекер</div>
        </div>
    </div>
</div>
</footer>
)
}

export default Footer;