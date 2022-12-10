import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { initOnboard } from "../utils/onboard";
import { useConnectWallet, useSetChain, useWallets } from "@web3-onboard/react";
import Default from "./Default";
import Main from "./Main";

const Home = () => {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
    const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();
    const connectedWallets = useWallets();
    const navigate = useNavigate();

    const [onboard, setOnboard] = useState(null);

    useEffect(() => {
        setOnboard(initOnboard);
    }, []);

    useEffect(() => {
        if (!connectedWallets.length) return;

        const connectedWalletsLabelArray = connectedWallets.map(
            ({ label }) => label
        );
        window.localStorage.setItem(
            "connectedWallets",
            JSON.stringify(connectedWalletsLabelArray)
        );
    }, [connectedWallets]);

    useEffect(() => {
        if (!onboard) return;

        const previouslyConnectedWallets = JSON.parse(
            window.localStorage.getItem("connectedWallets")
        );

        if (previouslyConnectedWallets?.length) {
            async function setWalletFromLocalStorage() {
                await connect({
                    autoSelect: {
                        label: previouslyConnectedWallets[0],
                        disableModals: true,
                    },
                });
            }

            setWalletFromLocalStorage();
        }
    }, [onboard, connect]);

    useEffect(() => {
        if (connectedChain && connectedChain.id !== "0x5") {
            setChain({ chainId: "0x5" });
        }
    }, [connectedChain]);

    return connectedWallets.length > 0 && connectedChain.id == "0x5" ? (
        <Main />
    ) : (
        <Default connect={connect} />
    );
};

export default Home;
