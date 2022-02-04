import React, { Component } from 'react';
import './App.css';
import TimeDisplay from './Z1_TimeDisplay.js';
import BidButtonBoard from './Z2_BidButtonBoard.js';
import ArtDisplay from './Z3_ArtDisplay.js';
import VideoDisplay from './Z4_VideoDisplay.js';
import MintLink from './Z5_MintLink.js';
import { useState } from 'react';

class Auction extends Component {

  render() {
    return (
      <div className="auction text-center">
        <h1>Auction House</h1>
        <TimeDisplay />
        <BidButtonBoard account={this.props.account} />
        <ArtDisplay />
        <VideoDisplay embedId="5qap5aO4i9A" />
        <MintLink />
      </div>
    );
  }
}

export default Auction;
