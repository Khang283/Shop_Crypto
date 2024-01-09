# Set up requirement
- Create a .env file in root folder

- Create a private key variable with your wallet private key
`
    PRIVATE_KEY=<YOUR WALLET PRIVATE KEY>
`

- Install dependencies
`
    npm install
`

# Mint USDT

- Go to scripts/deploy.js.
- Change receiver to the address you want to send.
- (Optional) Change the amount you want to send.
- Run command
`
    npx hardhat run scripts/deploy.js --network sepolia
`
- Import USDT token using address in sepolia.json into your Metamask account on Sepolia testnet

