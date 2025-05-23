// src/components/VideoBanner.jsx
const VideoBanner = () => {
    return (
        <>
            <div className="w-full bg-[#FFD347] flex justify-evenly">
                <div className="flex justify-center items-center">
                    <img src="images/handShake.png" alt="" />
                    <span className="text-xl mr-3">Dealers & <br />
                        Distributor
                    </span>
                    <span className="text-4xl text-red-600">350 +</span>
                </div>
                <div className="flex justify-center items-center">
                    <img src="images/handShake.png" alt="" />
                    <span className="text-xl mr-3">Numbers of Packet <br />
                    Sold Per Month
                    </span>
                    <span className="text-4xl text-red-600">6.5 Cr</span>
                </div>
                <div className="flex justify-center items-center">
                    <img src="images/handShake.png" alt="" />
                    <span className="text-xl mr-3">Production in <br />
                    Tons Per Day
                    </span>
                    <span className="text-4xl text-red-600">100</span>
                </div>
            </div>
            <div className="w-full bg-[#FFD347] flex justify-center items-center mb-44">
                <div className=" overflow-hidden shadow-lg">
                    <video
                        src="videos/homeVideo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    ></video>
                </div>
            </div>
        </>
    );
};

export default VideoBanner;
