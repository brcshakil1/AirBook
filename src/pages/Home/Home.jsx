import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Offer from "./Offer/Offer";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="pt-20">
        <Featured />
      </div>
      <div className="pt-20">
        <Offer />
      </div>
    </div>
  );
};

export default Home;
