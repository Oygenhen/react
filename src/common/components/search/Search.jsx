import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { searchBooks } from '../../../helpers/books';
import './Search.css'

class Search extends Component {
  state = {
    searchResult: [],
    error: null,
  };

  search = async (e) => {
    const { value } = e.target;

    try {
      this.setState({ error: null });
      const result = await searchBooks({ query: value});
      this.setState({ searchresult: result });
    } catch (error) {
      this.setState({ error });
    }
  };


  render () {
    return (
      <>
        <div className="searchLine">
          <Input
            type="search"
            name="search"
            placeholder="Искать здесь..."
            onChange={this.search}
          />
        </div>
        <div className="result">
          {this.state.error}
          {(this.state.searchResult || this.state.searchResult.length === 0)
            ? 'Нет результатов поиска'
            : this.state.searchResult.map(result => <p>{result}</p>)
          }
        </div>
      </>
    );
  }
}

export default Search;
