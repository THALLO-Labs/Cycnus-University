const contractAddress = "0xcb86df2f2421f1ea05c1b00bde9465f2b03a20b4";
const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "uad",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uu",
				"type": "string"
			}
		],
		"name": "connect",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "uad",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "uu",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "connectCyc",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isConnected",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userList",
		"outputs": [
			{
				"internalType": "address",
				"name": "uad",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uu",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const upcontractAddress = "0xbbaeC697BdB118245a96d30c1aC7eD5cFE099E61";
const upcontractAbi =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "urlhash",
				"type": "string"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newFeeAdd",
				"type": "address"
			}
		],
		"name": "newFeeAdd",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_feeAdd",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "urlhash",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Allprice",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "buyVideo",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "urlhash",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "uper",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "vurl",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "up",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "urlhash",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "uper",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "vurl",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "upVideo",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "hashToVideo",
		"outputs": [
			{
				"internalType": "address",
				"name": "uper",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "vurl",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "isViewShip",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];