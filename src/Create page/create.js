import { Component } from "react";


class Create extends Component{

constructor(props) {
  super(props);
  this.state = {
    data: null,
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

    // pulls array of accounts, RPC method
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

componentDidMount() {
  this.checkIfWalletConnected();
}

render() {

  return (
    <div>
      <p>Current Account: {this.state.currentAccount}</p>
      {}
    </div>
  );
}
}
export default Create;