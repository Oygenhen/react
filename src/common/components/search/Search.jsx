import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { searchBooks } from '../../../helpers/books';

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
        <div>
          <Input
            type="search"
            name="search"
            onChange={this.search}
          />
        </div>
        <div>
          {this.state.error}
          {(this.state.searchResult || this.state.searchResult.length === 0)
            ? 'No results'
            : this.state.searchResult.map(result => <p>{result}</p>)
          }
        </div>
      </>
    );
  }
}

export default Search;
