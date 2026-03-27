const Subscribe = () => {
  return (
    <div className="max-w-6xl mx-auto -mb-32 md:40 lg:-mb-52 relative z-10 px-4 mt-20">
      <div className="p-3 md:p-6 rounded-2xl bg-linear-to-r from-white/40 via-white/20 to-[white/40] backdrop-blur-md">
  <div className="bg-linear-to-r from-[#ffffff] to-[#fdf1d6]  rounded-2xl pt-10 pb-10 md:pt-20 md:pb-20 lg:pt-28 lg:pb-28 text-center">
    
    <h2 className="text-xl md:text-2xl lg:text-[32px] font-bold mb-2">
      Subscribe to our Newsletter
    </h2>
    <p className="md:text-lg lg:text-xl text-gray-600 ml-2 mr-2 mb-6">
      Get the latest updates and news right in your inbox!
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 rounded-lg border border-gray-300 w-70 md:w-80"
      />
      <button className="btn bg-linear-to-r from-[#f9d17d] to-[#fb9c87] px-6 py-2 rounded-lg font-bold">
        Subscribe
      </button>
    </div>

  </div>
</div>
</div>
  );
};

export default Subscribe;