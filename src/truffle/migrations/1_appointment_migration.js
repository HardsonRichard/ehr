const AppointmentContract = artifacts.require("AppointmentContract");

module.exports = function (deployer) {
  deployer.deploy(AppointmentContract);
};


