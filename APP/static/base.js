if (typeof web3 !== 'undefined') {
    console.log('MetaMask is installed!');
    web3 = new Web3(web3.currentProvider);
    ethereum.request({ method: 'eth_requestAccounts' });
} else {
    web3 = new Web3(new web3.providers.HttpProvider('http://127.0.0.1:7545'));
}

const app = {
    "TAI": {
        "abi": [{
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [{
                    "name": "",
                    "type": "string"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x06fdde03"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [{
                    "name": "",
                    "type": "uint8"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x313ce567"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "_totalSupply",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x3eaaf86b"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "number_of_bidders",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x5d31015f"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "bid_status",
                "outputs": [{
                    "name": "",
                    "type": "uint8"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x67117412"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [{
                    "name": "",
                    "type": "string"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x95d89b41"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "name": "items",
                "outputs": [{
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "high_bid",
                        "type": "uint256"
                    },
                    {
                        "name": "high_bidder",
                        "type": "address"
                    },
                    {
                        "name": "high_bidder_id",
                        "type": "uint256"
                    },
                    {
                        "name": "bid_count",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0xbfb231d2"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "number_of_items",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0xca342e17"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "name": "bidders",
                "outputs": [{
                        "name": "bidder_id",
                        "type": "uint256"
                    },
                    {
                        "name": "bidder_address",
                        "type": "address"
                    },
                    {
                        "name": "wallet_amount",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0xcff29dfd"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "auctionOwner",
                "outputs": [{
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0xd3924aaf"
            },
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor",
                "signature": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [{
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "tokens",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event",
                "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
            },
            {
                "anonymous": false,
                "inputs": [{
                        "indexed": true,
                        "name": "tokenOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "tokens",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event",
                "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "bidder_register",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function",
                "signature": "0x77163a6f"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "item_name",
                    "type": "string"
                }],
                "name": "list_item",
                "outputs": [{
                    "name": "",
                    "type": "string"
                }],
                "payable": true,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0xebd0b8e0"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getAllItemNames",
                "outputs": [{
                    "name": "",
                    "type": "string"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0xa9389348"
            },
            {
                "constant": true,
                "inputs": [{
                        "name": "a",
                        "type": "string"
                    },
                    {
                        "name": "b",
                        "type": "string"
                    }
                ],
                "name": "compareStrings",
                "outputs": [{
                    "name": "",
                    "type": "bool"
                }],
                "payable": false,
                "stateMutability": "pure",
                "type": "function",
                "signature": "0xbed34bba"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "item_to_bid",
                        "type": "string"
                    },
                    {
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "make_bid",
                "outputs": [{
                    "name": "",
                    "type": "string"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0x47df8f0e"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "endBid",
                "outputs": [{
                    "name": "",
                    "type": "string"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0x8bae720b"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "required_item",
                    "type": "string"
                }],
                "name": "revealWinner",
                "outputs": [{
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x4fcf1f39"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "tokenOwner",
                    "type": "address"
                }],
                "name": "viewBalance",
                "outputs": [{
                    "name": "balance",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0xc1a13d1a"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0x18160ddd"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "tokenOwner",
                    "type": "address"
                }],
                "name": "balanceOf",
                "outputs": [{
                    "name": "balance",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0x70a08231"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [{
                    "name": "success",
                    "type": "bool"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0xa9059cbb"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [{
                    "name": "success",
                    "type": "bool"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0x095ea7b3"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [{
                    "name": "success",
                    "type": "bool"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0x23b872dd"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "tokenOwner",
                        "type": "address"
                    },
                    {
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [{
                    "name": "remaining",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0xdd62ed3e"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
                        "type": "uint256"
                    },
                    {
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "approveAndCall",
                "outputs": [{
                    "name": "success",
                    "type": "bool"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0xcae9ca51"
            }
        ],
        "address": "0xA3f3867C776C98A4346Ad7FFCF59cC8d7612AbCF",
        "instance": ""
    }
}
async function setDefaultAddress() {
    await web3.eth.getAccounts().then(accountAddresses => {
        web3.eth.defaultAccount = accountAddresses[0];
    });
}
async function getDefaultAddress() {
    await setDefaultAddress();
    return web3.eth.defaultAccount;
}



async function viewBal() {
    var ad = await getDefaultAddress()
    console.log(ad);
    var bal;
    await app.TAI.instance.methods
        .viewBalance(ad)
        .call({ from: web3.eth.defaultAccount })
        .then(function(res) {
            bal = res;
        });
    console.log("the bal is : ", bal);
    return (bal);
}

async function reg() {
    console.log(web3.eth.defaultAccount);
    await app.TAI.instance.methods
        .bidder_register()
        .send({ from: web3.eth.defaultAccount, value: 10000000000000000000 })
        .then(function(receipt) {
            console.log(web3.eth.defaultAccount, receipt);
        });
}

async function ListItem(item_name) {
    // let item_name = "cigar";
    let lastItem = await app.TAI.instance.methods
        .list_item(item_name)
        .send({ from: web3.eth.defaultAccount })
        .then(function(res) {
            console.log(res);
            return res
        });
    console.log("list item block", item_name);
    await getAllItemNames();
    return lastItem;
}

async function getTotalItems() {
    let items = await app.TAI.instance.methods
        .number_of_items()
        .call()
        .then(function(res) {
            console.log(res);
            return res
        });
    return items;
}

async function getItems() {
    let items = await app.TAI.instance.methods
        .items("0")
        .call()
        .then(function(res) {
            console.log(res);
            return res
        });
    return items;
}


async function makeBid(itemToBid, amount) {
    amount = amount.toString();
    await app.TAI.instance.methods.make_bid(itemToBid, amount)
        .send({ from: web3.eth.defaultAccount })
        .then(function(res) {
            console.log("make bid funcion:", res);
            return res
        })
}

async function endBid() {
    await app.TAI.instance.methods.endBid()
        .send({ from: web3.eth.defaultAccount })
        .then(function(res) {
            console.log("end bid funcion:", res);
            return res
        })
}

async function revealWinner() {
    let item_name = $("#winnerid").val();
    await app.TAI.instance.methods
        .revealWinner(item_name)
        .call({ from: web3.eth.defaultAccount })
        .then(function(res) {
            $("#winnerPrint").empty();
            console.log("reveal winner call:", res);
            $("#winnerPrint").append(res)
            return res;
        });
}

async function getAllItemNames() {
    console.log("get items log")
    let items = await app.TAI.instance.methods
        .getAllItemNames()
        .call()
        .then(function(res) {
            console.log(res);
            return res;
        });
    $("#listing").empty();
    let text = [];
    let itemsArray = items.split(",")
    for (let x in itemsArray) {
        if (itemsArray[x]) {
            text.push(x);
            $("#listing").append(itemsArray[x] + ",");
        }
    }
    return text;
}

async function main() {
    await setDefaultAddress();
    app.TAI.instance = new web3.eth.Contract(app.TAI.abi, app.TAI.address);
}
main();