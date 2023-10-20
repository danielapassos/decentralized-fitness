export async function connectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Wallet connected');
      } catch (error) {
        console.error('User denied account access');
      }
    } else {
      console.log('No web3 provider detected');
    }
  }
  