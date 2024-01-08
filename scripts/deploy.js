const Web3Utils = require("../deployments/utils");
const { ethers, network } = require("hardhat");
const { getContract, deployContract, delay } = new Web3Utils();
const LZ_CHAINS = require("../db/lzChain");

const sourceChain = "goerli";
const getChainInfo = (nw) => {
    return LZ_CHAINS[nw];
};

(async () => {
    const [owner, signer] = await ethers.getSigners();
    const USDT = await deployContract("USDT", ["USDT", "USDT"]);
    const shop = await deployContract("Shop", [USDT.address]);
    // await USDT.approve(shop.address, 100000000);
    // shop.sell(100000).then(console.log);
})().catch((err) => {
    console.log(err);
});
