import React, { Component } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import logo from '../logo.png';
import './App.css';
import Web3 from 'web3';
import ConnectButton from './ConnectButton.js';
import Navbar from './4_NavBar.js';
import PitchSummary from './1_PitchSummary.js';
import PitchPage from './2_PitchPage.js';
import GovernanceGuide from './3_GovernanceGuide.js';
import Auction from './Auction.js';
import UONFTMuseum from '../abis/UONFTMuseum.json';
import OBGGovernance from '../abis/OBGGovernance.json';
import DAO from './DAO.js';
import {ethers} from 'ethers';

class App extends Component {

  async componentWillMount() {
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    if (window.ethereum) {
      const web3 = new Web3(window.web3.currentProvider);
      //Load account
      const accounts = await web3.eth.getAccounts()
      this.setState({ account: accounts[0] })
      const networkId = await web3.eth.net.getId()
      const networkData = UONFTMuseum.networks[networkId]
      if(networkData) {
        const uonftmuseum = new web3.eth.Contract(UONFTMuseum.abi, networkData.address)
        this.setState({ uonftmuseum })
        const obggovernance = new web3.eth.Contract(OBGGovernance.abi, networkData.address)
        this.setState({ obggovernance })
        const token = await uonftmuseum.methods.token.call()
        this.setState({ token })
        //let users = await uonftmuseum.methods.users(accounts[0]).call()
        //this.setState({ users })
      } else {
        window.alert("not here")
      }
    } else {
      window.alert("not connected")
    }
  }

  async isUnlocked() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    let unlocked;

    try {
        const accounts = await provider.listAccounts();

        unlocked = accounts.length > 0;
    } catch (e) {
        unlocked = false;
    }

    return unlocked;
  }

  getTokens = () => {
    this.state.uonftmuseum.methods.giveTokens()
    .send({ from: this.state.account })
    .on('transactionHash', (hash) => {
      console.log('success');
    })
  }

  memberSignup = () => {
    this.state.uonftmuseum.methods.memberSignup(this.state.account)
    .send({ from: this.state.account })
    .on('transactionHash', (hash) => {
      console.log('success');
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      done: 70,
      totalSupply: 100,
      value: 30
    }
  }

  render() {
    return (
      <div>
            <main role="main" className="text-center">
              <BrowserRouter>
                <nav>
                  <div className="flex mt-4">
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/auction" className="mr-4">
                      Auction
                    </Link>
                    <Link to="/pitchsummary" className="mr-4">Pitch Summary</Link>
                  </div>
                </nav>
                <Routes>
                  <Route path="/" element ={<DAO value={this.state.value} totalSupply={this.state.totalSupply} updateAccount={this.updateAccount} />} />
                  <Route path="/auction" element={<Auction account={this.state.account} />} />
                  <Route path="/pitchsummary" element={<PitchSummary value={this.state.value} />} />
                  <Route path="/pitchpage" element={<PitchPage memberSignup={this.memberSignup} getTokens={this.getTokens} users={this.state.users} account={this.state.account} />} />
                </Routes>
              </BrowserRouter>
            </main>
      </div>
    );
  }
}

export default App;
