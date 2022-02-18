import React from 'react';
import Web3 from 'web3';
import {ethers} from 'ethers';
import { useState, useRef } from "react";


const signMessage = async ({ setError, message }) => {
  try {
    console.log({ message });
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();
    console.log(signature);

    return {
      message,
      signature,
      address
    };
  } catch (err) {
    setError(err.message);
  }
};

const PitchPage = (props) => {
  const web3 = new Web3(window.web3.currentProvider);
  var Accounts = require('web3-eth-accounts');
  var accounts = props.account

  const resultBox = useRef();
  const [signatures, setSignatures] = useState([]);
  const [error, setError] = useState();

  const handleSign = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    const sig = await signMessage({
      setError,
      message: "hello world"
    });
    if (sig) {
      setSignatures([...signatures, sig]);
      console.log(data);
    }
  };


  return(
    <div className="pitchpage text-center">
      <div>
      <div className="pitch1">
        <div className="p-4 leading-6">
          <h1 className="pitchHeader">Pitch #1</h1>
          <div className="pitchImage">
            <img src={'https://moonbeam.network/wp-content/uploads/2021/06/sushiswap-new-500.png'} />
          </div>
          <progress value={20} max={100} />
          <div className="vote">
            <button onClick={(event) => {
              console.log(ethers.utils.formatEther(props.users.OBGCoins))
              console.log(web3.utils.randomHex(32).length)
              console.log(web3.utils.keccak256("Hello people").length)
            }}>Vote Yes</button>
            <button onClick={(event) => {
              web3.eth.sign(web3.utils.keccak256("Hello people"), '0x2B7fCAc98B2cb574DD055c4F7FAaa3d546c3933b')
            }}>Vote No</button>
          </div>
        </div>
      </div>
      </div>
      {/*Start of the Pitch Page*/}
      <h2>Pitch page</h2>
      <button onClick={(event) => {
        props.memberSignup()
      }}>Click me first</button>
      <button onClick={(event) => {
        props.getTokens()
      }}>Get Tokens</button>
      {/*Start of a different test functionality*/}
      <form onSubmit={handleSign}>
        <textarea
          type="text"
          name="message" />
        <button
          type="submit"
        >sign</button>
      </form>
    </div>
  );
}

export default PitchPage;
