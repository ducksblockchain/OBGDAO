import React, { Component } from 'react';
import './App.css';
import TimeDisplay from './Z1_TimeDisplay.js';
import BidButtonBoard from './Z2_BidButtonBoard.js';
import ArtDisplay from './Z3_ArtDisplay.js';
import VideoDisplay from './Z4_VideoDisplay.js';
import MintLink from './Z5_MintLink.js';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';

class Auction extends Component {

  render() {
    return (
      <div className="auction text-center">
        <h1>Auction House</h1>
        <div className="mainDiv">
          <div className="contentWrapper">
            <div className="content">
              <div className="leftExhibition">
                <h2>Exhibitions</h2>
              </div>
              <div className="mainExhibitionWrapper">
                <div className="mainContent">
                  <div className="firstSet">
                    <p className="firstSetTitle">Spring 2022</p>
                    <div className="exhibitionContainerGrid">
                      <div className="exhibitionWrapper">
                        <div className="exhibitionInserted">
                          <img src={'https://moonbeam.network/wp-content/uploads/2021/06/sushiswap-new-500.png'} className="image" />
                          <div className="exhibitionInfo">
                            <div className="exhibitionDescription">
                              <p className="exhibitionName">Collection</p>
                              <p className="artistName">
                                <span>Curator</span>
                                <br />
                                <span>Your Mom</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Second-Container*/}
                      <div className="exhibitionWrapper">
                        <div className="exhibitionInserted">
                          <img src={'https://moonbeam.network/wp-content/uploads/2021/06/sushiswap-new-500.png'} className="image" />
                          <div className="exhibitionInfo">
                            <div className="exhibitionDescription">
                              <p className="exhibitionName">Collection</p>
                              <p className="artistName">
                                <span>Curator</span>
                                <br />
                                <span>Your Mom</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Third-Container*/}
                      <div className="exhibitionWrapper">
                        <div className="exhibitionInserted">
                          <img src={'https://moonbeam.network/wp-content/uploads/2021/06/sushiswap-new-500.png'} className="image" />
                          <div className="exhibitionInfo">
                            <div className="exhibitionDescription">
                              <p className="exhibitionName">Collection</p>
                              <p className="artistName">
                                <span>Curator</span>
                                <br />
                                <span>Your Mom</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Fourth-Container*/}
                      <Link className="exhibitionWrapper" to="TimeDisplay">
                        <div className="exhibitionInserted">
                          <img src={'https://moonbeam.network/wp-content/uploads/2021/06/sushiswap-new-500.png'} className="image" />
                          <div className="exhibitionInfo">
                            <div className="exhibitionDescription">
                              <p className="exhibitionName">Collection</p>
                              <p className="artistName">
                                <span>Curator</span>
                                <br />
                                <span>Your Mom</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/TimeDisplay">
          Time
        </Link>
      </div>
    );
  }
}

export default Auction;
