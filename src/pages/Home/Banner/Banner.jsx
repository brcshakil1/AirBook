import bannerImg from "../../../assets/images/banner.png";
import ComContainer from "../../../components/shared/ComContainer/ComContainer";
import { GoSearch } from "react-icons/go";

const Banner = () => {
  return (
    <div
      className="min-h-[400px] md:min-h-[80vh] bg-no-repeat bg-cover border border-red-600"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <ComContainer>
        <div className="pt-36 relative">
          <h1 className="text-3xl md:text-[40px] text-white">
            Welcome to <span className="text-primary font-bold">AirBook</span>
          </h1>
          <div className="bg-white p-12 rounded-xl absolute md:static shadow-xl mt-5 md:mt-8">
            {/* trip */}
            <div className="flex justify-between items-center gap-5 flex-col md:flex-row">
              {/* radio */}
              <div className="flex justify-between items-center gap-5">
                <label className=" bg-[#EBF0F5] text-[10px] font-medium rounded-md py-2 px-4">
                  <input
                    type="radio"
                    value="oneWay"
                    // checked={tripType === 'oneWay'}
                    // onChange={handleTripTypeChange}
                    className="mr-2"
                  />
                  One Way
                </label>
                <label className=" bg-primary text-[10px] font-medium rounded-md py-2 px-4 text-white">
                  <input
                    type="radio"
                    value="roundTrip"
                    // checked={tripType === 'oneWay'}
                    // onChange={handleTripTypeChange}
                    className="mr-2"
                  />
                  Round Trip
                </label>
              </div>

              {/* select */}
              <div className="flex justify-between items-center gap-5 text-primary">
                <select
                  name=""
                  id=""
                  className="py-2 px-4 rounded-md text-[10px]"
                >
                  <option value="">1 Traveller</option>
                  <option value="">2 Holiday</option>
                  <option value="">3 Vacation</option>
                </select>
                <select
                  name=""
                  id=""
                  className="py-2 px-4 rounded-md text-[10px]"
                >
                  <option value="">Economy</option>
                  <option value="">Business</option>
                </select>
              </div>
            </div>

            {/*  */}
            <div className="flex justify-between gap-5 flex-col md:flex-row flex-wrap mt-5">
              {/* col-1 */}
              <div className="flex items-center border rounded-lg">
                <h3 className="text-sm font-semibold border-r px-3">DAC</h3>
                <div className="px-3 py-2">
                  <h3 className="text-sm font-medium">Dhaka</h3>
                  <p className="text-[12px]">Hazrat Shahjalal International</p>
                </div>
              </div>
              {/* col-2 */}
              <div className="flex items-center border rounded-lg">
                <h3 className="text-sm font-semibold border-r px-3">Cxb</h3>
                <div className="px-3 py-2">
                  <h3 className="text-sm font-medium">Cox{`’`}s Bazar</h3>
                  <p className="text-[12px]">Cox{`’`}s Bazar international</p>
                </div>
              </div>
              {/* col-3 */}
              <div className="flex items-center border rounded-lg">
                <h3 className="text-sm font-semibold border-r px-3">DAC</h3>
                <div className="px-3 py-2">
                  <h3 className="text-sm font-medium">Dhaka</h3>
                  <p className="text-[12px]">Hazrat Shahjalal Internatio</p>
                </div>
              </div>
              {/* col-4 */}
              <div className="flex items-center border rounded-lg">
                <h3 className="text-sm font-semibold border-r px-3">DAC</h3>
                <div className="px-3 py-2">
                  <h3 className="text-sm font-medium">Dhaka</h3>
                  <p className="text-[12px]">Hazrat Shahjalal Internatio</p>
                </div>
              </div>
              <button className="bg-accent  rounded-lg w-16 py-4 grid place-items-center">
                <GoSearch className="text-2xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </ComContainer>
    </div>
  );
};

export default Banner;
