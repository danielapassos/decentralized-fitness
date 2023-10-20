import web3 from './web3';
import FitnessContract from './YourContract.json';  // Import ABI

const contractAddress = '0x...';  // Contract address
const contractInstance = new web3.eth.Contract(YourContract.abi, contractAddress);

export default contractInstance;
