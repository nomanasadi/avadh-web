const VideoBanner = () => {
  return (
    <>
      {/* Stats Section */}
      <div className="w-full bg-[#FFD347] flex flex-wrap justify-center md:justify-evenly items-center  md:px-4 py-6 mt-16 md:mt-52 h-60 md:h-32">
        <div className="flex items-center gap-3 min-w-[280px] justify-center">
          <img src="images/handShake.png" alt="Dealers" className="w-10 h-10 sm:w-12 sm:h-12" />
          <span className="text-base sm:text-xl mr-2">
            Dealers & <br /> Distributor
          </span>
          <span className="text-2xl sm:text-4xl text-red-600 font-bold">350 +</span>
        </div>
        <div className="flex items-center gap-3 min-w-[280px] justify-center">
          <img src="images/handShake.png" alt="Packets" className="w-10 h-10 sm:w-12 sm:h-12" />
          <span className="text-base sm:text-xl mr-2">
            Numbers of Packet <br /> Sold Per Month
          </span>
          <span className="text-2xl sm:text-4xl text-red-600 font-bold">6.5 Cr</span>
        </div>
        <div className="flex items-center gap-3 min-w-[280px] justify-center">
          <img src="images/handShake.png" alt="Production" className="w-10 h-10 sm:w-12 sm:h-12" />
          <span className="text-base sm:text-xl mr-2">
            Production in <br /> Tons Per Day
          </span>
          <span className="text-2xl sm:text-4xl text-red-600 font-bold">100</span>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full  flex justify-center items-center mb-20">
        <div className=" h-96 w-full aspect-video overflow-hidden shadow-lg rounded-lg">
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
