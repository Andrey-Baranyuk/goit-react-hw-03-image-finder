import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import { IoSearch } from 'react-icons/io5';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchQuery = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.error('The input field is empty!');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className={styles.SearchBar} onSubmit={this.handleSubmit}>
        <form className={styles.SearchForm}>
          <button type="submit" className={styles['SearchForm-button']}>
            <span className={styles['SearchForm-button-label']}>Search</span>
            <IoSearch color="#fff" size="25" />
          </button>

          <input
            className={styles['SearchForm-input']}
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleSearchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
