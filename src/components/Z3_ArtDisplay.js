import React from 'react';
import Web3 from 'web3';
import { useState } from 'react';


const ArtDisplay = () => {
  const [picture, setPicture] = useState(1);

  const baseURI = 'QmV7cZogR3caa8GBXWHj36yRFg46gR6wEZ7oVViEV3TnH9';
  var auctionNumber = 0;

  function nextPic() {
    var next = picture + 1;
    setPicture(next);
  }

  function redo() {
    setPicture(1);
  }

  return(
    <div className="artdisplay text-center">
      <h2>Art Display</h2>
      <div style={{ border: '2px solid red' }}>
        <img src={'https://gateway.pinata.cloud/ipfs/' + baseURI + `/${picture}.JPG`} />
        <button onClick={(event) => {
          nextPic();
        }}>Next</button>
        <button onClick={(event) => {
          redo();
        }}>Re-set</button>
      </div>
    </div>
  );
}

export default ArtDisplay;
