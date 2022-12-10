import FooterMark from "../svg/FooterMark";
import FooterTitle from "../svg/FooterTitle";
import HeaderLogo from "../svg/HeaderLogo";
import HeaderTitle from "../svg/HeaderTitle";

const Default = ({ connect }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-row items-center justify-between w-full px-10 py-4 lXs:px-20 lXs:py-10">
                <div className="z-80" style={{ opacity: 1 }}>
                    <HeaderLogo />
                </div>
                <div className="ml-10 z-80" style={{ opacity: 1 }}>
                    <HeaderTitle />
                </div>
            </div>
            <div className="absolute flex flex-col items-center justify-center w-10/12 min-h-screen p-10 mx-auto my-auto">
                <div className="flex flex-col" style={{ opacity: 1 }}>
                    <picture>
                        <source srcset="images/frames.webp" type="image/webp" />
                        <img
                            src="images/frames.webp"
                            alt="0N1 enclave"
                            className="max-w-full"
                            data-xblocker="passed"
                            style={{ visibility: "visible" }}
                        />
                    </picture>
                    <button
                        className="w-auto mt-4 text-xl font-semibold text-left uppercase border-b-2 cursor-pointer text-jasper btn-scale border-jasper"
                        onClick={() => connect()}
                    >
                        &gt; Connect to the enclave
                    </button>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full px-10 mt-auto lXs:px-20 lXs:py-10">
                <div className="z-80" style={{ opacity: 1 }}>
                    <FooterMark />
                </div>
                <div className="ml-4 z-80" style={{ opacity: 1 }}>
                    <FooterTitle />
                </div>
            </div>
        </div>
    );
};

export default Default;
