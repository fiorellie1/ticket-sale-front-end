const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, bytecode } = require('./compile');
const provider = new HDWalletProvider(
'<enter seed phrase here>',
// remember to change this to your own phrase!
'<enter endpoint link here>'
// remember to change this to your own endpoint!
);
const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const numTickets = 100;
    const ticketPrice = web3.utils.toWei('1', 'ether');

    inbox = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments: [numTickets,ticketPrice] })
    .send({ from: accounts[0], gasPrice: 8000000000, gas: 4700000});
    console.log('Contract deployed to', inbox.options.address);
    provider.engine.stop();
};
deploy();
