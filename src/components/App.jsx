import css from './StyleContainer.module.css'
import React from 'react';
import { Component } from 'react';
import { Searchbar } from './SearchBar/Searchbar';


export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    currentSearch: '',
    pageNr: 1,
    modalOpen: false,
    modalImg: '',
    modalAlt: '',
  };


  render() {
    return (
      <div className = {css.container}>
       <Searchbar onSubmit={this.handleSubmit} />
      </div>
    )
  }
}








