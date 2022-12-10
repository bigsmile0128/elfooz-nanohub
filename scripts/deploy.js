const { ethers } = require("hardhat");

const BASE_URI =
    "https://bafybeib2lf2by3agslyyfohm2v435fi47ri3waoewkhnjjzdkjk4lmca5i.ipfs.nftstorage.link/";

// The deployment script
const main = async () => {
    // Getting the first signer as the deployer
    const [deployer] = await ethers.getSigners();
    // Saving the info to be logged in the table (deployer address)
    var deployerLog = { Label: "Deploying Address", Info: deployer.address };
    // Saving the info to be logged in the table (deployer address)
    var deployerBalanceLog = {
        Label: "Deployer ETH Balance",
        Info: (await deployer.getBalance()).toString(),
    };

    // Creating the instance and contract info for the NEWELF
    const ELFOOZ_address = "0xc0130b8a1e00dca6f3f7aa8112c99d301b4361d4"; // OLD ELFOOZ Address
    let NEWELFContract, NEWELFInstance;
    NEWELFContract = await ethers.getContractFactory("NEWELF");
    NEWELFInstance = await NEWELFContract.deploy(BASE_URI);
    await NEWELFInstance.deployed;
    var NEWELFLog = {
        Label: "Deployed NEWELF Address",
        Info: NEWELFInstance.address,
    };

    // Creating the instance and contract info for the NANOHUB
    let NANOHUBContract, NANOHUBInstance;
    NANOHUBContract = await ethers.getContractFactory("NANOHUB");
    NANOHUBInstance = await NANOHUBContract.deploy(
        ELFOOZ_address,
        NEWELFInstance.address
    );
    await NANOHUBInstance.deployed();

    // Saving the info to be logged in the table (deployer address)
    var NANOHUBLog = {
        Label: "Deployed NANOHUB Address",
        Info: NANOHUBInstance.address,
    };

    console.table([deployerLog, deployerBalanceLog, NEWELFLog, NANOHUBLog]);
};
// Runs the deployment script, catching any errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
