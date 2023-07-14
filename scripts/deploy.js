const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploying the contract
  const RishiContract = await ethers.getContractFactory("RishiContract");
  const contract = await RishiContract.deploy(RishiContract);
  await contract.waitForDeployment();

  console.log("Contract deployed to:", contract.target);
  console.log("Owner name:", await contract.getOwnerData());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
