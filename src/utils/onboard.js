import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import coinbaseModule from "@web3-onboard/coinbase";
import fortmaticModule from "@web3-onboard/fortmatic";

import ApeIcon from "../Ape";

const RPC_URL = process.env.REACT_APP_ALCHEMY_RPC_URL;

const fortmatic = fortmaticModule({
    apiKey: process.env.REACT_APP_FORTMATIC_KEY,
});

const injected = injectedModule();
const walletConnect = walletConnectModule();
const coinbaseWallet = coinbaseModule();

const initOnboard = init({
    wallets: [walletConnect, coinbaseWallet, injected, fortmatic],
    chains: [
        {
            id: "0x1",
            token: "ETH",
            label: "Ethereum Mainnet",
            rpcUrl: RPC_URL,
        },
        {
            id: "0x5",
            token: "GoerliETH",
            label: "Goerli",
            rpcUrl: RPC_URL,
        },
        // {
        //   id: '0x3',
        //   token: 'tROP',
        //   label: 'Ethereum Ropsten Testnet',
        //   rpcUrl: 'https://ropsten.infura.io/v3/ababf9851fd845d0a167825f97eeb12b'
        // },
        // {
        //   id: '0x4',
        //   token: 'rETH',
        //   label: 'Ethereum Rinkeby Testnet',
        //   rpcUrl: RPC_URL
        // }
        // {
        //   id: '0x89',
        //   token: 'MATIC',
        //   label: 'Matic Mainnet',
        //   rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
        // }
    ],
    appMetadata: {
        name: "Elfooz",
        icon: ApeIcon,
        description: "NanoHub Page",
        recommendedInjectedWallets: [
            { name: "MetaMask", url: "https://metamask.io" },
            { name: "Coinbase", url: "https://wallet.coinbase.com/" },
        ],
        agreement: {
            version: "1.0.0",
            termsUrl: "https://www.blocknative.com/terms-conditions",
            privacyUrl: "https://www.blocknative.com/privacy-policy",
        },
        gettingStartedGuide: "https://blocknative.com",
        explore: "https://blocknative.com",
    },
});

export { initOnboard };
