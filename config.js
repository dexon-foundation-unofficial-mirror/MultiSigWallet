var txDefaultOrig =
{
  websites: {
    "wallet": "https://wallet.gnosis.pm",
    "gnosis": "https://gnosis.pm",
    "ethGasStation": "https://safe-relay.gnosis.pm/api/v1/gas-station/"
  },
  gasLimit: 3141592,
  gasPrice: 18000000000,
  ethereumNode: "https://mainnet-rpc.dexon.org:443",
  connectionChecker: {
    method : "OPTIONS",
    url : "https://www.google.com",
    checkInterval: 5000
  },
  accountsChecker: {
    checkInterval: 5000
  },
  transactionChecker: {
    checkInterval: 15000
  },
  wallet: "injected",
  defaultChainID: null,
  // Mainnet
  walletFactoryAddress: "0x3F9bfd3bCE63B9A5575F455d4a2C8e6a18160543",
  tokens: [
    {
      'address': '0x6810e776880c02933d47db1b9fc05908e5386b96',
      'name': 'Gnosis',
      'symbol': 'GNO',
      'decimals': 18
    },
  ]
};

if (isElectron) {
  txDefaultOrig.wallet = "remotenode";
}

var txDefault = {
  ethereumNodes : [
    {
      url : "https://mainnet-rpc.dexon.org:443",
      name: "Remote Mainnet"
    },
    {
      url : "https://testnet-rpc.dexon.org:443",
      name: "Remote Testnet"
    },
    {
      url : "https://taipei-rpc.dexon.org:443",
      name: "Remote Taipei"
    },
    {
      url : "http://localhost:8545",
      name: "Local node"
    }
  ],
  walletFactoryAddresses: {
    'mainnet': {
      name: 'Mainnet',
      address: txDefaultOrig.walletFactoryAddress
    },
    'testnet': {
      name: 'Testnet',
      address: '0xd5df676467920173691ed666faf862cdfa534c1c'
    },
    'privatenet': {
      name: 'Privatenet',
      address: '0x5cb85db3e237cac78cbb3fd63e84488cac5bd3dd'
    },
  }
};

var oldWalletFactoryAddresses = [
  ("0x12ff9a987c648c5608b2c2a76f58de74a3bf1987").toLowerCase(),
  ("0xed5a90efa30637606ddaf4f4b3d42bb49d79bd4e").toLowerCase(),
  ("0xa0dbdadcbcc540be9bf4e9a812035eb1289dad73").toLowerCase()
];

/**
* Update the default wallet factory address in local storage
*/
function checkWalletFactoryAddress() {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));

  if (userConfig && oldWalletFactoryAddresses.indexOf(userConfig.walletFactoryAddress.toLowerCase()) >= 0) {
    userConfig.walletFactoryAddress = txDefaultOrig.walletFactoryAddress;
    localStorage.setItem("userConfig", JSON.stringify(userConfig));
  }
}

/**
* Reload configuration
*/
function loadConfiguration () {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));
  Object.assign(txDefault, txDefaultOrig, userConfig);
}

checkWalletFactoryAddress();
loadConfiguration();
