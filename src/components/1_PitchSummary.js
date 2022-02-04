import React from 'react';
import Web3 from 'web3';
import './App.css';
import {Link} from 'react-router-dom';

const PitchSummary = (props) => {
  return(
    <div className="container-fluid text-center">
      <div className="grid-pitch col-lg-12 text-center justify-content-center">
      {/*Start of first pitch*/}
        <div>
          <div className="pitch1">
            <div className="p-4 leading-6">
              <h1 className="pitchHeader">Pitch #1</h1>
              <div className="pitchImage">
                <img src={'https://moonbeam.network/wp-content/uploads/2021/06/sushiswap-new-500.png'} />
              </div>
              <progress value={props.value} max={100} />
              <div className="vote">
                <Link to="/pitchpage">
                  <button>Vote</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End of first pitch*/}
        {/*Start of second pitch*/}
        <div>
          <div className="pitch2 border-t border-b md:border">
            <div className="p-4 leading-6">
              <h1 className="pitchHeader">Pitch #1</h1>
              <div className="pitchImage">
                <img src={'https://moonbeam.network/wp-content/uploads/2021/06/sushiswap-new-500.png'} id="pitchimg" className="pitchimg" />
              </div>
              <progress value={50} max={100} />
              <div className="vote">
                <button className="voteButton">Vote</button>
              </div>
            </div>
          </div>
        </div>
        {/*End of second pitch*/}
        {/*Start of third pitch*/}
        <div>
          <div className="pitch3">
            <div className="p-4 leading-6">
              <h1 className="pitchHeader">Pitch #1</h1>
              <div className="pitchImage">
                <img src={'https://moonbeam.network/wp-content/uploads/2021/06/sushiswap-new-500.png'} id="pitchimg" className="pitchimg" />
              </div>
              <progress value={30} max={100} />
              <div className="vote">
                <button className="voteButton">Vote</button>
              </div>
            </div>
          </div>
        </div>
        {/*End of third pitch*/}
      </div>
    </div>
  );
}

export default PitchSummary;
