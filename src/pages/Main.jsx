import { useState } from "react";

const Main = () => {
    const [tab, setTab] = useState(0);

    return (
        <div className="flex flex-col items-center justify-start min-h-screen mt-[80px]">
            <div className="flex flex-row items-center justify-between w-full px-6 py-2 bg-black">
                <svg
                    className="w-4 h-auto"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M30.432 21.4462L17.3179 34.5641L23.5809 40.8253L36.695 27.7074L30.432 21.4462Z"
                        fill="white"
                    ></path>
                    <path
                        d="M44.9928 8.91V0.0432H36.045V8.91H17.9118V0H8.96942V8.91H4.46042V54H49.545V8.91H44.9928ZM40.5162 45.144H13.5V17.9496H40.5162V45.144Z"
                        fill="white"
                    ></path>
                </svg>
                <svg
                    className="w-16 h-auto mt-1 ml-1"
                    viewBox="0 0 1456 391"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M890.26 353.56H637.72V390.4H890.26V353.56Z"
                        fill="#EF4C52"
                    ></path>
                    <path
                        d="M1172.87 353.56H920.33V390.4H1172.87V353.56Z"
                        fill="#F1E917"
                    ></path>
                    <path
                        d="M1455.48 353.56H1202.94V390.4H1455.48V353.56Z"
                        fill="#11BAB5"
                    ></path>
                    <path
                        d="M343.51 0.369995V331.43H268.55V69.39H75.53V331.43H0.52002V0.369995H343.51Z"
                        fill="white"
                    ></path>
                    <path
                        d="M643.44 165.87V0.369995H441.78V165.88H370.92V331.43H441.78V240.85H643.44V331.43H714.3V165.87H643.44ZM572.11 165.87H513.1V69.38H572.11V165.87Z"
                        fill="white"
                    ></path>
                    <path
                        d="M1084.7 0.369995V331.43H1009.73V69.39H816.71V331.43H741.7V0.369995H1084.7Z"
                        fill="white"
                    ></path>
                    <path
                        d="M1112.1 0.369995V331.42H1455.48V0.369995H1112.1ZM1380.3 262.41H1187.28V69.39H1380.3V262.41Z"
                        fill="white"
                    ></path>
                    <path
                        d="M1307.76 98.1115L1215.99 189.886L1259.81 233.705L1351.58 141.93L1307.76 98.1115Z"
                        fill="white"
                    ></path>
                </svg>
                <div className="hidden ml-auto tM:flex">
                    <p className="mx-2 font-mono text-sm font-bold text-white">
                        BALANCE
                    </p>
                    <button className="px-2 mr-2 font-mono text-sm text-white border-b-2 bg-clear border-jasper">
                        0 ELFOOZ
                    </button>
                    <button className="px-2 mr-2 font-mono text-sm text-white border-b-2 bg-clear border-azurite">
                        0 NEWELF
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full px-6 py-2 tM:hidden bg-clear">
                <p className="mx-2 font-mono text-sm font-bold text-white">
                    BALANCE
                </p>
                <div className="flex flex-row items-center justify-center w-full px-6 py-2">
                    <button className="px-2 mr-2 font-mono text-sm text-white border-b-2 bg-dark border-jasper">
                        0 ELFOOZ
                    </button>
                    <button className="px-2 mr-2 font-mono text-sm text-white border-b-2 bg-dark border-azurite">
                        0 NEWELF
                    </button>
                </div>
            </div>
            <div className="w-full mb-30 ">
                <div className="w-full p-6 bg-black tL:px-30">
                    <div className="flex flex-row items-center justify-start text-white">
                        <p
                            className="text-sm font-black tM:text-2xl lXs:text-3xl"
                            style={{ lineHeight: "inherit" }}
                        >
                            ETHEREAL CONNECTED
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-center w-full">
                        <div className="w-full h-1 bg-jasper"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full p-2 bg-black">
                        <p className="font-mono text-xs font-bold text-white uppercase">
                            <span className="text-jasper">HUB </span>ELFOOZ
                            0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D
                        </p>
                    </div>
                    <div className="bg-clear">
                        <div className="flex flex-col w-full bg-dark tL:flex-row">
                            <div
                                className={`flex flex-row items-end p-4 m-px ${
                                    tab == 0
                                        ? "bg-dark"
                                        : "opacity-50 cursor-pointer bg-clear hover:opacity-100"
                                }`}
                                onClick={() => setTab(0)}
                            >
                                <svg
                                    className="w-6 h-auto"
                                    viewBox="0 0 91 91"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        width="91"
                                        height="91"
                                        fill="white"
                                    ></rect>
                                </svg>
                                <p className="mx-4 text-xs font-semibold text-white">
                                    ELFOOZ
                                </p>
                            </div>
                            <div
                                className={`flex flex-row items-end p-4 m-px ${
                                    tab == 1
                                        ? "bg-dark"
                                        : "opacity-50 cursor-pointer bg-clear hover:opacity-100"
                                }`}
                                onClick={() => setTab(1)}
                            >
                                <svg
                                    className="w-6 h-auto"
                                    viewBox="0 0 91 91"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        width="43"
                                        height="43"
                                        fill="white"
                                    ></rect>
                                    <rect
                                        x="50.5"
                                        y="2.5"
                                        width="38"
                                        height="38"
                                        stroke="white"
                                        stroke-width="5"
                                    ></rect>
                                    <rect
                                        y="48"
                                        width="43"
                                        height="43"
                                        fill="white"
                                    ></rect>
                                    <rect
                                        x="48"
                                        y="48"
                                        width="43"
                                        height="43"
                                        fill="white"
                                    ></rect>
                                </svg>
                                <p className="mx-4 text-xs font-semibold text-white">
                                    NEWELF
                                </p>
                            </div>
                        </div>
                        {tab == 0 && (
                            <>
                                <p className="px-2 pt-2 mx-6 text-xl font-black text-white tM:text-2xl lXs:text-3xl">
                                    ELFOOZ
                                </p>
                                <div className="flex flex-col items-start px-8">
                                    <p className="font-mono text-lg text-white opacity-75">
                                        These are your ELFOOZ NFTs
                                    </p>
                                    <p className="px-2 mt-2 font-bold text-black bg-jasper">
                                        0 ELFOOZ
                                    </p>
                                </div>
                                <div className="flex flex-row flex-wrap items-center justify-center px-6 py-4 lXs:justify-start">
                                    <p className="px-3 font-mono text-xs font-bold text-white uppercase">
                                        There is nothing here ...
                                    </p>
                                </div>
                            </>
                        )}
                        {tab == 1 && (
                            <>
                                <p className="px-2 pt-2 mx-6 text-xl font-black text-white tM:text-2xl lXs:text-3xl">
                                    OWNED
                                </p>
                                <div className="flex flex-col items-start px-8">
                                    <p className="font-mono text-lg text-white opacity-75">
                                        These are your NEWELF NFTs
                                    </p>
                                    <p className="px-2 mt-2 font-bold text-black bg-azurite">
                                        0 NEWELF
                                    </p>
                                </div>
                                <div className="flex flex-row flex-wrap items-center justify-center px-6 py-4 lXs:justify-start">
                                    <p className="px-3 font-mono text-xs font-bold text-white uppercase">
                                        There is nothing here ...
                                    </p>
                                </div>
                                <p className="px-2 pt-2 mx-6 text-xl font-black text-white tM:text-2xl lXs:text-3xl">
                                    RECALL
                                </p>
                                <div className="flex flex-col items-start px-8">
                                    <p className="font-mono text-lg text-white opacity-75">
                                        These are your NEWELF NFTs available to
                                        RECALL
                                    </p>
                                    <p className="px-2 mt-2 font-bold text-black bg-azurite">
                                        0 NEWELF
                                    </p>
                                </div>
                                <div className="flex flex-row flex-wrap items-center justify-center px-6 py-4 lXs:justify-start">
                                    <p className="px-3 font-mono text-xs font-bold text-white uppercase">
                                        There is nothing here ...
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
