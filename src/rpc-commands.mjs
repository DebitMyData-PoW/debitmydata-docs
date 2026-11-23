// Written by scripts/rpc-reference.mjs from DebitMyData Core 1.3.5's help: the RPC reference's groups and commands, for the sidebar.
export const rpcVersion = "1.3.5";

export const rpcCategories = [
  {
    "label": "Blockchain",
    "commands": [
      "dumptxoutset",
      "getbestblockhash",
      "getblock",
      "getblockchaininfo",
      "getblockcount",
      "getblockfilter",
      "getblockfrompeer",
      "getblockhash",
      "getblockheader",
      "getblockstats",
      "getchainstates",
      "getchaintips",
      "getchaintxstats",
      "getdeploymentinfo",
      "getdescriptoractivity",
      "getdifficulty",
      "getdifficultyalgorithm",
      "getmempoolancestors",
      "getmempoolcluster",
      "getmempooldescendants",
      "getmempoolentry",
      "getmempoolinfo",
      "getrawmempool",
      "gettxout",
      "gettxoutproof",
      "gettxoutsetinfo",
      "gettxspendingprevout",
      "importmempool",
      "loadtxoutset",
      "preciousblock",
      "pruneblockchain",
      "savemempool",
      "scanblocks",
      "scantxoutset",
      "verifychain",
      "verifytxoutproof",
      "waitforblock",
      "waitforblockheight",
      "waitfornewblock"
    ]
  },
  {
    "label": "Control",
    "commands": [
      "getmemoryinfo",
      "getrpcinfo",
      "help",
      "logging",
      "stop",
      "uptime"
    ]
  },
  {
    "label": "Mining",
    "commands": [
      "getblocktemplate",
      "getmininginfo",
      "getnetworkhashps",
      "getprioritisedtransactions",
      "prioritisetransaction",
      "submitblock",
      "submitheader"
    ]
  },
  {
    "label": "Network",
    "commands": [
      "addnode",
      "clearbanned",
      "disconnectnode",
      "getaddednodeinfo",
      "getaddrmaninfo",
      "getconnectioncount",
      "getnettotals",
      "getnetworkinfo",
      "getnodeaddresses",
      "getpeerinfo",
      "listbanned",
      "ping",
      "setban",
      "setnetworkactive"
    ]
  },
  {
    "label": "Raw transactions",
    "commands": [
      "abortprivatebroadcast",
      "analyzepsbt",
      "combinepsbt",
      "combinerawtransaction",
      "converttopsbt",
      "createpsbt",
      "createrawtransaction",
      "decodepsbt",
      "decoderawtransaction",
      "decodescript",
      "descriptorprocesspsbt",
      "finalizepsbt",
      "fundrawtransaction",
      "getprivatebroadcastinfo",
      "getrawtransaction",
      "joinpsbts",
      "sendrawtransaction",
      "signrawtransactionwithkey",
      "submitpackage",
      "testmempoolaccept",
      "utxoupdatepsbt"
    ]
  },
  {
    "label": "Signer",
    "commands": [
      "enumeratesigners"
    ]
  },
  {
    "label": "Utility",
    "commands": [
      "createmultisig",
      "deriveaddresses",
      "estimatesmartfee",
      "getdescriptorinfo",
      "getindexinfo",
      "signmessagewithprivkey",
      "validateaddress",
      "verifymessage"
    ]
  },
  {
    "label": "Wallet",
    "commands": [
      "abandonforkedtransactions",
      "abandontransaction",
      "abortrescan",
      "backupwallet",
      "bumpfee",
      "createwallet",
      "createwalletdescriptor",
      "encryptwallet",
      "getaddressesbylabel",
      "getaddressinfo",
      "getbalance",
      "getbalances",
      "gethdkeys",
      "getnewaddress",
      "getrawchangeaddress",
      "getreceivedbyaddress",
      "getreceivedbylabel",
      "gettransaction",
      "getwalletinfo",
      "importdescriptors",
      "importprunedfunds",
      "keypoolrefill",
      "listaddressgroupings",
      "listdescriptors",
      "listlabels",
      "listlockunspent",
      "listreceivedbyaddress",
      "listreceivedbylabel",
      "listsinceblock",
      "listtransactions",
      "listunspent",
      "listwalletdir",
      "listwallets",
      "loadwallet",
      "lockunspent",
      "migratewallet",
      "psbtbumpfee",
      "removeprunedfunds",
      "rescanblockchain",
      "restorewallet",
      "send",
      "sendall",
      "sendmany",
      "sendtoaddress",
      "setlabel",
      "setwalletflag",
      "signmessage",
      "signrawtransactionwithwallet",
      "simulaterawtransaction",
      "unloadwallet",
      "walletcreatefundedpsbt",
      "walletdisplayaddress",
      "walletlock",
      "walletpassphrase",
      "walletpassphrasechange",
      "walletprocesspsbt"
    ]
  },
  {
    "label": "ZMQ",
    "commands": [
      "getzmqnotifications"
    ]
  }
];
