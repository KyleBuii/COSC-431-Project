require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/rTkl63ljcVxvGQVsnkl8IjuARQapoXjz",
      accounts: ["b8441dbfbaaf17dfb8b63e569a71a2d961825def0314b14fad780b00a8957726"] ,
    },
  },
  // ... other configurations
};
