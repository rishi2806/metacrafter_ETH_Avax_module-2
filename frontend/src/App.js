import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import RishiContract from "./contracts/RishiContract.sol/RishiContract.json";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with the deployed contract address
const contractABI = RishiContract.abi;

function App() {
  const [ownerName, setOwnerName] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getContractData();
  }, []);

  async function getContractData() {
    try {
      const provider = new ethers.providers.JsonRpcProvider();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );

      const name = await contract.getOwnerData();

      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();
      const userBalance = await contract.balances(userAddress);
      console.log(userAddress);
      setOwnerName(name);
      setBalance(userBalance.toNumber());
    } catch (error) {
      console.error("Oops! Error occurred in retrieving contract data:", error);
    }
  }

  async function addTokens() {
    try {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        // Assuming you want to add 10 tokens
        await contract.addTokens(10);
        console.log("Your tokens are added successfully!");
        getContractData(); // Refresh the contract data
      } else {
        console.error("Please install MetaMask to add tokens.");
      }
    } catch (error) {
      console.error("Oops! Error occurred in adding tokens:", error);
    }
  }

  async function subtractTokens() {
    try {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        // Assuming you want to subtract 5 tokens
        await contract.subtractTokens(5);
        console.log("Your tokens are subtracted successfully!");
        getContractData(); // Refresh the contract data
      } else {
        console.error("Please install MetaMask to subtract tokens.");
      }
    } catch (error) {
      console.error("Oops! Error occurred in subtracting tokens:", error);
    }
  }

  return (
    <div>
      <h1>Contract Owner: {ownerName}</h1>
      <h2>Account Balance: {balance}</h2>
      <button onClick={addTokens}>Add Tokens</button>
      <button onClick={subtractTokens}>Subtract Tokens</button>
    </div>
  );
}

export default App;