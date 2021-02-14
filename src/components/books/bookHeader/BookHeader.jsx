import React from 'react';
import './BookHeader.css'
import '../../../common/styles/Container.css';
import { logout } from '../../../helpers/auth';

function BookHeader () {
  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
        <div className="header_logo">bookBar</div>
        <div className="button">
        <button className="logout_submit" onClick={logout}>Выйти</button>
        </div>
        </div>
      </div>
    </header>
  );
}

export default BookHeader;