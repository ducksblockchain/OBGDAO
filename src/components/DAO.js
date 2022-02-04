import React from 'react';
import ConnectButton from './ConnectButton.js';
import Navbar from './4_NavBar.js';
import PitchSummary from './1_PitchSummary.js';
import PitchPage from './2_PitchPage.js';
import GovernanceGuide from './3_GovernanceGuide.js';
import Auction from './Auction.js';
import logo from '../logo.png';

function Dao(props) {
  return(
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mr-auto ml-auto">
                <img src={logo} style={{ width: '50%' }} className="App-logo" alt="logo" />
              <div className='connectbutton'>
                <ConnectButton
                 updateAccount={props.updateAccount} />
              </div>
              <div className='pitchsumwidget'>
                <PitchSummary value={props.value} />
              </div>
              <div className='govguidewidget'>
                <GovernanceGuide />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dao;
