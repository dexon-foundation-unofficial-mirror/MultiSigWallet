module.exports = {
  networks: {
    testnet: {
      host: "testnet-rpc.dexon.org",
      port: 443,
      network_id: 238,
      gas: 4000000,
      gasPrice: 24000000000, // 24 gwei
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4000000,
      gasPrice: 10000000000, // 10 gwei
    }
  }
};
