import FitnessContract from "../build/contracts/FitnessContract.json";

const getContract = async (web3) => {
  const networkId = await web3.eth.net.getId();
  const deployedAddress = FitnessContract.networks[networkId].address;
  const contract = new web3.eth.Contract(FitnessContract.abi, deployedAddress);
  return contract;
};

export default getContract;
