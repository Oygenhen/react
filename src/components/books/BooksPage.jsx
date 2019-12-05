import React, { Component } from 'react';
import Search from '../../common/components/search/Search'
import { logout } from '../../helpers/auth';

class BooksPage extends Component {
  render () {
    const name = localStorage.getItem('name');
    return (
      <div>
        <button onClick={logout}>Выйти</button>
        <div>{`Привет, ${name}!`}</div>
        <Search />
      </div>
    );
  }
}

export default BooksPage;
