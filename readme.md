# DEFI Web Application
This defi(decentralized finance) web application is developed using solidity, react, hardhat, css, js, html. This applications aims to perform some functions on the user account in the blockchain. This applications allows you to add token , subtract token and get the owner name for the contract.

## Introduction
This application is composed of mainly three main functions having several tasks. The first function is addToken which is used to add token to account, the second function is subtractToken which is used to subtract token from user account, and third function is getOwnerData which is used to get name of owner of the contract.

## Features
 1. Add tokens: Users can add tokens to their account by calling the addTokens() function and update the balance.
 2. Subtract tokens: Users can subtract tokens from their account by calling the subtractTokens() function and update the balance.
 3. Get owner's name: The getOwnerData() function allows anyone to retrieve the name of the contract owner.

## Installation
  If you want to download this project then you have to clone this repository by using this command:

  `git clone https://github.com/rishi2806/metacrafter_ETH_Avax_module-2`
  
## Execution
   After cloning the repository, move to root directory of project and run the application by using these steps:

   1. Install project dependencies.
      
      `npm install`

   2. Start a local blockchain.
      
      `npm hardhat node`

   3. Deploy the RishiContract.
    
      `npx hardhat run scripts/deploy.js --network localhost`

   4. Move to frontend directory by using this coomand.
    
      `cd ./frontend`

   5. Install project dependencies for frontend.
    
      `npm install`

   6. Now start react server by using this coomand.
    
      `npm start`

## Access
After successful execution of all the steps, your application is render on your browser at -

`http://localhost:3000`
   
## License
This code is licensed under the MIT License. See the LICENSE file for more details.
