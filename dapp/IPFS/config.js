var txDefaultOrig =
{
  gasLimit: 3141592,
  gasPrice: 18000000000,
  ethereumNode: "http://my.ethchain.dnp.dappnode.eth:8545",
  connectionChecker:{
    method : "OPTIONS",
    url : "http://my.ethchain.dnp.dappnode.eth",
    checkInterval: 5000
  },
  ethGasStation: "",
  wallet: "injected",
  defaultChainID: null,
  // Mainnet
  walletFactoryAddress: "0x6e95c8e8557abc08b46f3c347ba06f8dc012763f",
  tokens: [
    {
      'address': '0xb9e7f8568e08d5659f5d29c4997173d84cdf2607',
      'name': 'SwarmCity',
      'symbol': 'SWT',
      'decimals': 18
    },
    {
      'address': '0x960b236A07cf122663c4303350609A66A7B288C0',
      'name': 'Aragon Network',
      'symbol': 'ANT',
      'decimals': 18
    },
    {
      'address': '0x543ff227f64aa17ea132bf9886cab5db55dcaddf',
      'name': 'Status Network',
      'symbol': 'SNT',
      'decimals': 18
    },
    {
      'address': '0x6810e776880c02933d47db1b9fc05908e5386b96',
      'name': 'Gnosis',
      'symbol': 'GNO',
      'decimals': 18
    },
    {
      'address': '0xa74476443119A942dE498590Fe1f2454d7D4aC0d',
      'name': 'Golem',
      'symbol': 'GNT',
      'decimals': 18
    },
    {
      'address': '0xc66ea802717bfb9833400264dd12c2bceaa34a6d',
      'name': 'Maker',
      'symbol': 'MKR',
      'decimals': 18
    },
    {
      'address': '0x0abdace70d3790235af448c88547603b945604ea',
      'name': 'District0x',
      'symbol': 'DNT',
      'decimals': 18
    }
  ]
};

if (isElectron) {
  txDefaultOrig.wallet = "remotenode";
}

var txDefault = {
  ethereumNodes : [
    {
      url : "http://my.ethchain.dnp.dappnode.eth:8545",
      name: "DAppNode Mainnet"
    },
    {
      url : "http://my.ropsten.dnp.dappnode.eth:8545",
      name: "DAppNode Ropsten"
    },
    {
      url : "http://my.kovan.dnp.dappnode.eth:8545",
      name: "DAppNode Kovan"
    },
    {
      url : "http://my.rinkeby.dnp.dappnode.eth:8545",
      name: "DAppNode Rinkeby"
    },
  ],
  walletFactoryAddresses: {
    'mainnet': {
      name: 'Mainnet',
      address: txDefaultOrig.walletFactoryAddress
    },
    'ropsten': {
      name: 'Ropsten',
      address: '0x5cb85db3e237cac78cbb3fd63e84488cac5bd3dd'
    },
    'kovan': {
      name: 'Kovan',
      address: '0x2c992817e0152a65937527b774c7a99a84603045'
    },
    'rinkeby': {
      name: 'Rinkeby',
      address: '0x19ba60816abca236baa096105df09260a4791418'
    },
    'privatenet': {
      name: 'Privatenet',
      address: '0xd79426bcee5b46fde413ededeb38364b3e666097'
    }
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
