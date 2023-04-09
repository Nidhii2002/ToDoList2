// const HDWalletProvider = require("@truffle/hdwallet-provider");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const INFURA_API_KEY =
  "https://sepolia.infura.io/v3/394b3698f64d4f4e9ce8e48f6b1f09fb";
const MNEMONIC =
  "digital cheese cruel axis hello earn supreme name cross version price struggle";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    sepolia: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
      network_id: "11155111",
      gas: 4465030,
    },
  },
};
