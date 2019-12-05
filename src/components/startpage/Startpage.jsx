import React from 'react';
import Header from './header/Header'
import Intro from './intro/Intro';
import Virtualbookcase from './virtualbookcase/Virtualbookcase';
import Footer from '../../common/components/footer/Footer';


function Startpage(){
    return(
     <div>
    <Header/>
    <Intro/>
    <Virtualbookcase/>
   <Footer/>
    </div>
    )
}

export default Startpage;