require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const archivedDeploymentPath = "./deployments/archive";

let privateKey = process.env.PRIVATE_KEY;

let real_accounts = [privateKey];
let local_accounts = [
    "0x496525ccb6e4b91a73dd5b07522d91be894d133f76f086a188b405aca92bd2a9",
];
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    networks: {
        ganache: {
            url: `http://127.0.0.1:8545`,
            chainId: 1337,
            accounts: local_accounts,
            // gas: 2000000000,
            gasPrice: 8000000000000,
            gasLimit: 210000000000000000n,
        },
        sepolia: {
            url: "https://eth-sepolia.public.blastapi.io",
            chainId: 11155111,
            accounts: real_accounts,
        },
        goerli: {
            url: "https://eth-goerli.public.blastapi.io",
            chainId: 5,
            accounts: real_accounts,
        },
    },

    mocha: {},
    solidity: {
        compilers: [
            {
                version: "0.8.20",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1300,
                    },
                },
            },
        ],
    },
    abiExporter: {
        path: "./build/contracts",
        runOnCompile: true,
        clear: true,
        flat: true,
        except: [],
        spacing: 2,
        pretty: true,
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        owner: {
            default: 0,
        },
    },
    external: {
        contracts: [
            {
                artifacts: [archivedDeploymentPath],
            },
        ],
    },
};
