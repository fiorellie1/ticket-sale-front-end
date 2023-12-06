import web3 from "./web3";

const addresss = '0x9A908A7f55897Cc6BF1aB57000c9a52C7Ffed8F4';

const abi = [{"inputs":[{"internalType":"uint256","name":"numTickets","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"partner","type":"address"}],"name":"acceptSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ticketId","type":"uint256"}],"name":"buyTicket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"person","type":"address"}],"name":"getTicketOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"offerSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ticketId","type":"uint256"}],"name":"returnTicket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"serviceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"swapOffers","outputs":[{"internalType":"address","name":"offerer","type":"address"},{"internalType":"uint256","name":"ticketToSwap","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ticketOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ticketPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ticketStatus","outputs":[{"internalType":"enum TicketSale.TicketStatus","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTickets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

export default new web3.eth.Contract(abi, addresss);
