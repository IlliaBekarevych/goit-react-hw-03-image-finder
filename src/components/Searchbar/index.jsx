import React, { Component } from 'react';
import i from './index.module.css';
import { MdOutlineImageSearch } from 'react-icons/md';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchName: '',
  };

  hendelInputValue = event => {
    this.setState({ searchName: event.target.value.toLowerCase() });
  };

  hendelSubmit = e => {
    e.preventDefault();
    if (this.state.searchName.trim() === '') {
      Notiflix.Notify.warning('Please specify your query!');
      return;
    }
    this.props.onSubmit(this.state.searchName);

    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className={i.Searchbar}>
        <form className={i.SearchForm} onSubmit={this.hendelSubmit}>
          <button type="submit" className={i.SearchForm_button}>
            <MdOutlineImageSearch style={{ width: 30, height: 30 }} />
          </button>

          <input
            className={i.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchName"
            value={this.state.searchName}
            onChange={this.hendelInputValue}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
