import React, { Component } from 'react';
import Footer from '../../common/components/footer/Footer';
import BookHeader from './bookHeader/BookHeader';
import BookProfile from './bookProfile/BookProfile';


class BooksPage extends Component {
  render () {
  
    return (
      <div>
        <BookHeader/>
        <BookProfile/>
        <Footer/>
      </div>
    );
  }
}

export default BooksPage;
