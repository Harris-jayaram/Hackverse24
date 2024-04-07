require("@nomicfoundation/hardhat-web3");
require("dotenv").config();

const privateKeys = process.env.PRIVATE_KEYS || "";
const goerliUrl = process.env.GOERLI_URL || "https://goerli.infura.io/v3/484100af5a444bf890223a65b03109ae";
const mumbaiUrl = process.env.MUMBAI_URL || "https://polygon-mumbai.infura.io/v3/484100af5a444bf890223a65b03109ae";
const xdcUrl = process.env.XDC_URL || "https://rpc.apothem.network";

module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {},
    goerli: {
      url: goerliUrl,
      accounts: privateKeys.split(","),
    },
    mumbai: {
      url: mumbaiUrl,
      accounts: privateKeys.split(","),
    },
    xdc: {
      url: xdcUrl,
      accounts: privateKeys.split(","),
    },
    // Include CoinEx Smart Chain if you have the necessary configuration
    // coinex: {
    //   url: "URL_OF_YOUR_COINEX_NODE",
    //   accounts: privateKeys.split(","),
  // },
  },
};
