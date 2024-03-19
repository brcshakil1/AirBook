import featuredImg1 from "../../../assets/firstRow/featured-1.png";
import featuredImg2 from "../../../assets/firstRow/featured-2.png";
import featuredImg3 from "../../../assets/firstRow/featured-3.png";
import ComContainer from "../../../components/shared/ComContainer/ComContainer";
import ViewBtn from "./ViewBtn/ViewBtn";

const Featured = () => {
  return (
    <div id="blog">
      <ComContainer>
        <h2 className="md:text-3xl text-2xl font-semibold mb-8">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* card-1 */}
          <div className=" p-2 rounded-lg shadow-lg bg-white">
            <img src={featuredImg1} alt="featured-1" className="w-full" />
            <p className="text-base md:text-lg font-bold my-4">
              Stopover opportunity in İstanbul with Turkish Airlines
            </p>
            <ViewBtn />
          </div>
          <div className=" p-2 rounded-lg shadow-lg bg-white ">
            <img src={featuredImg2} alt="featured-1" className="w-full" />
            <p className="text-base md:text-lg font-bold my-4">
              Discover the timeless city with Touristanbul of Turkish Airlines
            </p>
            <ViewBtn />
          </div>
          <div className=" p-2 rounded-lg shadow-lg bg-white">
            <img src={featuredImg3} alt="featured-1" className="w-full" />
            <p className="text-base md:text-lg font-bold my-4">
              the best of Abu Dhabi with exclusive Etihad Airways!
            </p>
            <ViewBtn />
          </div>
        </div>
      </ComContainer>
    </div>
  );
};

export default Featured;
