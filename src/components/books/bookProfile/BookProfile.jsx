import React from 'react';
import '../../../common/styles/Container.css';
import './BookProfile.css'
import Search from '../../../common/components/search/Search';
import OutputLists from './outputList/OutputLists';

function BookProfile () {
    const name = localStorage.getItem('name');
  return (
    <div className="profile">
      <div className="container">
        <div className="profile_inner">
          <h1 className="profile_title">{`Привет, ${name}!`}</h1>
          <Search/>
        </div>
        <OutputLists/>
      </div>
    </div>
  );
}

export default BookProfile;