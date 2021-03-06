import React, { Component } from 'react';
import QuoteButton from './QuoteButton.jsx'
import FavoriteButton from './FavoriteButton.jsx';
import DisplayFavorite from './DisplayFavorite.jsx';

const Container = props => (
      <div  className='container'>
        <h1 className='h1'>if it looks good, it is good.</h1>
        <div className='quote-box'>
          <div className='quote-text'>{props.quote.text}</div>
          <div className='quote-text author'> - {props.quote.author}</div>
        </div>
        <div className='button-div'>
        <QuoteButton
          fetchQuoteClick = {props.fetchQuoteClick}
        />
        <FavoriteButton
          favoriteQuoteClick = {props.favoriteQuoteClick}
          text = {props.quote.text}
          author = {props.quote.author}
        />
        <DisplayFavorite
          getFavoriteClick = {props.getFavoriteClick}
        />
        </div>
      </div>
    )



export default Container;