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
import OBGGovernance from '../abis/OBGGovernance.json';
import DAO from './DAO.js';

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
      const networkData = OBGGovernance.networks[networkId]
      if(networkData) {
        const obggovernance = new web3.eth.Contract(OBGGovernance.abi, networkData.address)
        this.setState({ obggovernance })
      } else {
        window.alert("not here")
      }
    } else {
      window.alert("not connected")
    }
  }

  checkBalance = () => {
    this.state.obggovernance.methods.totalSupply().send({ from: this.state.account })
    .on('transactionHash', (hash) => {
      console.log('clicked')
    })
  }

  updateAccount = (address) => {
    this.setState({ account: address });
  }

  constructor(props) {
    super(props)
    this.state = {
      account: ''
    }
  }

  render() {
    return (
      <div>
            <main role="main" className="col-lg-12 text-center">
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
                  <Route path="/" element ={<DAO updateAccount={this.updateAccount}/>} />
                  <Route path="/auction" element={<Auction />} />
                  <Route path="/pitchsummary" element={<PitchSummary />} />
                </Routes>
              </BrowserRouter>
            </main>
      </div>
    );
  }
}

export default App;
