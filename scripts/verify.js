require("@nomiclabs/hardhat-etherscan");
const hre = require("hardhat");

const BASE_URI =
    "https://bafybeib2lf2by3agslyyfohm2v435fi47ri3waoewkhnjjzdkjk4lmca5i.ipfs.nftstorage.link/";
const ELFOOZ_Address = "0xc0130b8A1e00dca6f3f7AA8112C99d301b4361d4";
const NEWELF_Address = "0xc5E8548b690180352f84a53919FccAac933ceC7e";
const NANOHUB_Address = "0x2251A16d1b6C6Df09D17A1ba97F4219783d6AF0d";

async function main() {
    await hre.run("verify:verify", {
        address: NEWELF_Address, // Deployed NEWELF contract address
        constructorArguments: [BASE_URI],
    });
    await hre.run("verify:verify", {
        address: NANOHUB_Address, // Deployed NANOHUB contract address
        constructorArguments: [ELFOOZ_Address, NEWELF_Address],
    });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
