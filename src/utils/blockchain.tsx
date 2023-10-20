import web3 from './web3';  
import ChallengeContract from './ChallengeContract'; 

// Create a new challenge with a crypto reward
async function createChallenge(challengeDetails) {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const challengeContract = new web3.eth.Contract(ChallengeContract.abi, ChallengeContract.address);
  
  await challengeContract.methods.createChallenge(challengeDetails)
    .send({ from: accounts[0] });
}

export { createChallenge };
