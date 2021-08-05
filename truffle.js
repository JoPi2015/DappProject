// const HDWalletProvider = require('truffle-hdwallet-provider');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraKey = "5e34747ee5624b1fa891fc5afbf5727c";

// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const mnemonic="other voyage wrist gain have quantum stereo bulk away manual borrow gossip";

module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        // gasPrice: 10000000000
    },
    rinkeby2: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "7701b592e8d14a1ca5b628c0f861ab42", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }

};