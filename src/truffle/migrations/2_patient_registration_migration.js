const PatientRegistrationContract = artifacts.require("PatientRegistrationContract");

module.exports = function (deployer) {
  deployer.deploy(PatientRegistrationContract);
};


