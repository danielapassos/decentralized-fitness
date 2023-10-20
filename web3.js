import Web3 from 'web3';

let web3;

if (window.ethereum) {
    window.ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(window.ethereum);
} else {
    // Handle non-dapp browsers
    console.log('Non-ethereum browser detected. Please instal MetaMask!');
}

export default web3;
