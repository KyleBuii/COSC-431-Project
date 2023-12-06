import React, { Component } from "react";
import Navbar from "../Navigation/navigation";
import MyABI from "../MusicContract.json";
import { ethers } from "ethers";
import { providers } from "ethers";

const contractAddress = "0x1F74fF79Da22af819de55fEcBddc4eEDbb35eC10";

class Create extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentAccount: "",
    };
  }

  checkIfWalletConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("You don't have a wallet");
      } else {
        console.log("You have a wallet");
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        this.setState({ currentAccount: account });
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Need an ethereum wallet to connect to");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected with: ", accounts[0]);
      this.setState({ currentAccount: accounts[0] });
    } catch (error) {
      console.log(error);
      alert("Wallet could not be connected");
    }
  };

  componentDidMount() {
    this.checkIfWalletConnected();
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <title>The Harmonic Vault</title>
        <link rel="stylesheet" href="learn.css" />

        <style>
          {`
            body {
              width: 100%;
              height: 100vh;
              margin: 0;
              padding: 0;
              background-color: #291763;
              background-image: linear-gradient(315deg, #291763 0%, #291763 74%);
              user-select: none;
              font-family: 'Poppins', sans-serif;
              color: #fffefe;
            }

            header {
              text-align: center;
              padding: 20px;
              background-color: #291763;
              margin-top: 300px;
              line-height: 1.6;
              color: #918c8c;
            }

            main {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }

            h1, h2 {
              color: #fffefe;
            }

            p {
              line-height: 1.6;
              color: #918c8c;
            }

            button {
              border: none;
              background: #f1faff78;
              padding: 12px 30px;
              border-radius: 30px;
              color: white;
              font-weight: bold;
              font-size: 15px;
              transition: .4s;
              
            }

            button:hover {
              transform: scale(1.3);
              cursor: pointer;
            }
          `}
        </style>

        <header>Current Account: {this.state.currentAccount}
        <br></br><br></br><button >Create</button>
</header>
        

        {/* Your other components or UI elements go here */}
      </div>
    );
  }
}

export default Create;