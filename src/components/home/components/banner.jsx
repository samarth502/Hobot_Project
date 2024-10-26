import suitcase from "../../../assets/Home/suitcase.png";
import locationImage from "../../../assets/Home/location.png";

const Banner = () => {
  return (
    <div
      className="relative  w-full h-[560px] bg-cover bg-center "
      style={{
        backgroundImage: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, rgba(7, 47, 87, 0) 94.58%), 
                               linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45)),
                               url('https://s3-alpha-sig.figma.com/img/4df9/f396/c8b4ef806609efd227c6672c5dba3716?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fCwspYXMqn2UcUFo5eMJMMez119scu6j8TMOXFkimY5vJ6WCyNYSy2Pf~EKJdyYMjQ0G7Un1y5TJfsY9N6F-wBdGTW0fuLB9Ygr2gW52EyPh6ePx-3Z6T3wp9F6~lPxyXD~JkLExyCWOYjBa1pqVSFxY-02ODatZm38KBY0XWfLHOxqXg6sh8RU1D5Vf3AtW-qWilbXMi7J4PfLjahSS1FlrUdvr3KnlAyVF0YNeerxzbpSe6-~xdJbmsF37-BSLHSDJ0RNjfs6zCfpQZQuoKXVm8C1L5k0c53QZgXH2mm295vJc-oy15a0sRXg4Ep2NN0prP3MuUMlqChP5jfZT-Q__')`,
      }}
    >
      <div className="absolute w-full top-[22%] md:top-[20%] flex flex-col items-center  text-white ">
        <div className="flex flex-col justify-center items-center  text-[22px] lg:text-[55px] font-poppins font-extrabold ">
          Are You a Supplier ?
          <p className="font-extralight text-center">
            Explore Matching Opportunities.
          </p>
        </div>

        <SearchBtn />
        <button className="px-5 py-2  lg:text-[18px] text-[20px] rounded-full font-poppins mt-8 ">
          <p>
            Are you a Buyer ?
            <a href="/" className="text-white text-[18px] border-b-2">
              {" click here if you are looking to past a Requirments "}
            </a>
          </p>
        </button>
      </div>
    </div>
  );
};

const SearchBtn = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 p-4 w-full ">
      {/* First Input Box */}
      <div className="relative md:w-[400px] w-[300px] max-w-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <img
            src={suitcase}
            alt="Service Icon"
            className="h-5 w-5 text-gray-500"
          />
        </span>
        <input
          type="text"
          className="block h-[55px] w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-50 text-black"
          placeholder="Search your required services here"
          //   aria-label="Search your services"
        />
      </div>

      {/* Second Input Box */}
      <div className="relative md:w-[400px] w-[300px] max-w-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <img
            src={locationImage}
            alt="Location Icon"
            className="h-5 w-5 text-gray-500"
          />
        </span>
        <input
          type="text"
          className="block h-[55px] w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-50 text-black"
          placeholder="Enter your location"
          aria-label="Enter location"
        />
      </div>

      {/* Search Button */}
      <button className="w-[117px] h-[55px] lg:w-auto px-6 py-2 text-white bg-[#00732F] hover:bg-green-700 rounded-lg">
        Search
      </button>
    </div>
  );
};

export default Banner;
