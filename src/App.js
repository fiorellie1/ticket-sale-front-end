import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import web3 from './web3';
import TicketContract from './ticketsale';

function App() {
  const [account, setAccount] = useState('');
  const [ticketIdInput, setTicketIdInput] = useState('');
  const [swapTicketIdInput, setSwapTicketIdInput] = useState('');
  const [acceptTicketIdInput, setAcceptTicketIdInput] = useState('');
  const [availableTickets, setAvailableTickets] = useState(0);

  useEffect(() => {
    async function loadData() {
      try {
        const accounts = await web3.eth.getAccounts();
        const availableTicketsCount = await TicketContract.methods.getAvailableTickets().call();

        setAccount(accounts[0]);
        setAvailableTickets(parseInt(availableTicketsCount));
      } catch (error) {
        console.error('error fetching data:', error);
      }
    }

    loadData();
  }, []);

  const purchaseTicket = async () => {
    try {
      await TicketContract.methods.buyTicket(ticketIdInput).send({ from: account, value: TicketContract.methods.ticketPrice().call() });
      alert('purchase successful');
      setAvailableTickets((prevCount) => prevCount - 1); // Update available tickets count
    } catch (error) {
      console.error('purchase error:', error);
      alert('purchase error');
    }
  };

  const offerSwap = async () => {
    try {
      await TicketContract.methods.offerSwap().send({ from: account });
      alert('swap offer successful');
    } catch (error) {
      console.error('swap offer error:', error);
      alert('swap offer error');
    }
  };

  const acceptOffer = async () => {
    try {
      await TicketContract.methods.acceptSwap(acceptTicketIdInput).send({ from: account });
      alert('accept swap offer successful');
    } catch (error) {
      console.error('accept swap offer error:', error);
      alert('accept swap offer error');
    }
  };

  const returnTicket = async () => {
    try {
      await TicketContract.methods.returnTicket(ticketIdInput).send({ from: account });
      alert('return success');
      setAvailableTickets((prevCount) => prevCount + 1); // Update available tickets count
    } catch (error) {
      console.error('error returning ticket:', error);
      alert('error returning ticket');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="ticket-container">
          <div className="available-tickets">
            <h2>Available Tickets: {availableTickets}</h2>
          </div>
          <div className="ticket-action">
            <h2>Purchase Ticket</h2>
            <input
              type="text"
              placeholder="Desired Ticket ID"
              value={ticketIdInput}
              onChange={(e) => setTicketIdInput(e.target.value)}
            />
            <button onClick={purchaseTicket}>Purchase</button>
          </div>
          <div className="ticket-action">
            <h2>Offer Swap</h2>
            <input
              type="text"
              placeholder="Desired Ticket ID"
              value={swapTicketIdInput}
              onChange={(e) => setSwapTicketIdInput(e.target.value)}
            />
            <button onClick={offerSwap}>Offer Swap</button>
          </div>
          <div className="ticket-action">
            <h2>Accept Offer</h2>
            <input
              type="text"
              placeholder="Accept Ticket ID"
              value={acceptTicketIdInput}
              onChange={(e) => setAcceptTicketIdInput(e.target.value)}
            />
            <button onClick={acceptOffer}>Accept Swap Offer</button>
          </div>
          <div className="ticket-action">
            <h2>Return Ticket</h2>
            <input
              type="text"
              placeholder="Return Ticket ID"
              value={ticketIdInput}
              onChange={(e) => setTicketIdInput(e.target.value)}
            />
            <button onClick={returnTicket}>Return Ticket</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
