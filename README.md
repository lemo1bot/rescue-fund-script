

Simple Step-by-Step Guide for Users

1. Ensure Node.js Is Installed

Download and install Node.js from nodejs.org if you haven't already.

Verify installation by running:

node -v
npm -v


2. Clone the Repository

Open your terminal.

Run:

git clone https://github.com/lemo1bot/rescue-fund-script.git

This will create a folder named rescue-fund-script on your machine.


3. Navigate to the Repository Directory

Change into the directory:

cd rescue-fund-script


4. Install Dependencies

Run the following command to install the required Node.js packages:

npm install

This installs packages like web3, dotenv, and readline (make sure your package.json is configured properly).


5. Run the Script

Start the script by running:

node rescue.js


6. Follow the Prompts

The script will display a welcome message:

===== RESCUE FUNDS FROM HACKED WALLET =====
CREATED BY: LEMON
FOLLOW ME ON TWITTER: @ROSLA_AHEMED
===========================================

It will then ask for:

Private Key: The private key of the wallet you want to rescue funds from.

Token Contract Address: The ERC-20 token’s contract address (for example, USDT’s address).

Wallet Address: The wallet address where the tokens are located.

Recipient Wallet Address: The address where you want to send the tokens.

Amount of Tokens: Enter the amount (in the token's smallest units).



7. Verify the Transaction

After you provide all the required information, the script will process the transaction.

If successful, it will display a transaction receipt or transaction hash.

You can verify the transaction on Etherscan using the transaction hash.

