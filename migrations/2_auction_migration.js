var TAIToken = artifacts.require("TAIToken");
var ERC20Interface = artifacts.require("ERC20Interface");

module.exports = function(deployer) {
    deployer.deploy(TAIToken);
};