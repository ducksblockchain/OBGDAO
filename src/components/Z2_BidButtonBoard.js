import React from 'react';
import Web3 from 'web3';
import { useState, useEffect } from 'react';


function saveData(account, bid) {
  localStorage.setItem(account, bid);
}

function saveMultiData() {
  localStorage.setItem('mom', 1);
  localStorage.setItem('dad', 3);
  localStorage.setItem('joe', 0.5);

}

function getData(account) {
  let data = localStorage.getItem(account);
}

function clearData() {
  localStorage.clear();
}

function forEachKey() {
  for (var i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
  }
}

var george = [];

function setup() {
  for (var i = 0; i < localStorage.length; i++) {
    george[i] = {
      name: localStorage.key(i),
      bidValue: localStorage.getItem(localStorage.key(i)),
    }
  };
}


const BidButtonBoard = (props) => {
  const [value, setValue] = useState();
  const [name, setName] = useState();
  const [players, setPlayer] = useState();
  const [money, setBids] = useState();

  const lizards =[{name: "lego", value: 1}, {name: "beldo", value: 9}]

  const getOurData = () => {
    var playerList = [];
    var bidList = [];
    for (var i = 0; i < localStorage.length; i++) {
      playerList.push(localStorage.key(i));
    };
    setPlayer(playerList);
    for (var i = 0; i < localStorage.length; i++) {
      bidList.push(localStorage.getItem(localStorage.key(i)));
    };
    setBids(bidList);
    playerList.map((player, index) => {
      console.log(player)
    })
  }


  useEffect(() => {
    setup();
    console.log(george);
  });

  const sidebar = (
    <ul>
      {george.sort((a, b) => a.bidValue < b.bidValue ? 1 : -1).map((lizard, index) =>
        <li key={index}>{lizard.name} - {lizard.bidValue}</li>
      )}
    </ul>
  )

  return(
    <div className="bidbuttonboard text-center">
      <h2>Button Board</h2>
      <p>{sidebar}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />



      <button onClick={(event) => {
        const score = value;
        const account = props.account
        saveData(account, score);
        saveMultiData();
      }}>Submit</button>
      <button onClick={(event) => {
        setup();
        console.log(money);
      }}>Check</button>
      <button onClick={(event) => {
        let bids = [];
        for (var i = 0; i < localStorage.length; i++) {
          bids.push(localStorage.getItem(localStorage.key(i)));
        };
        console.log(bids.sort(function(a, b){return a-b}).reverse());
      }}>Getum</button>
    </div>
  );
}

export default BidButtonBoard;
