require('dotenv').config();
const Web3 = require('web3');
const readline = require('readline');

// Setup the provider using Infura
const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

// Create a readline interface for user inputs
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display your name and Twitter profile when the script starts
console.log("===== WELCOME TO THE TOKEN TRANSFER SCRIPT =====");
console.log("CREATED BY: LEMON");
console.log("FOLLOW ME ON TWITTER: @ROSLA_AHEMED");
console.log("=================================================");

// Prompt user for inputs
rl.question('Enter your private key: ', (privateKey) => {
    rl.question('Enter the token contract address: ', (tokenContractAddress) => {
        rl.question('Enter your wallet address: ', (fromAddress) => {
            rl.question('Enter the recipient wallet address: ', (toAddress) => {
                rl.question('Enter the amount of tokens to transfer: ', (amountToSend) => {
                    // Here you can add the token transfer logic...
                    
                    // Close the readline interface after getting the inputs
                    rl.close();
                });
            });
        });
    });
});
