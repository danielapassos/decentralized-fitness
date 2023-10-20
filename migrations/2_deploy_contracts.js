const FitnessContract = artifacts.require("FitnessContract");

module.exports = function (deployer) {
  deployer.deploy(FitnessContract);
};
