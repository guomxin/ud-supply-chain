const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "f93d42eddcc6461fb2de277abe40ee8a";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 8545,
    //   network_id: "*" // Match any network id
    // },

    rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       
        gas: 4500000,        
        gasPrice: 10000000000
    },
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};