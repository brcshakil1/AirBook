import ComContainer from "../../../components/shared/ComContainer/ComContainer";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import offer1 from "../../../assets/middleRow/offer-1.png";
import offer2 from "../../../assets/middleRow/offer-2.png";
import offer3 from "../../../assets/middleRow/offer-3.png";

const Offer = () => {
  return (
    <div id="offer">
      <ComContainer>
        <SectionTitle title="Deals And Offers" />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* card-1 */}
            <div className="flex items-center justify-between gap-5 bg-white rounded-[10px] shadow-lg">
              <img src={offer1} alt="offer" />
              <div className="px-2">
                <p className="text-sm pb-2">With Bkash Payment Only</p>
                <h3 className="text-primary font-semibold uppercase">
                  up to 14% discount on the base fare of domestic flights
                </h3>
              </div>
            </div>
            {/* card-2 */}
            <div className="hidden lg:flex items-center justify-between gap-5 bg-white rounded-[10px] shadow-lg">
              <img src={offer2} alt="offer" />
              <div className="px-2">
                <p className="text-sm pb-2">With Bkash Payment Only</p>
                <h3 className="text-primary font-semibold uppercase">
                  up to 14% discount on the base fare of domestic flights
                </h3>
              </div>
            </div>
            {/* card-3 */}
            <div className="hidden md:flex items-center justify-between gap-5 bg-white rounded-[10px] shadow-lg ">
              <img src={offer3} alt="offer" />
              <div className="px-2">
                <p className="text-sm pb-2 ">With Bkash Payment Only</p>
                <h3 className="text-primary font-semibold uppercase">
                  up to 14% discount on the base fare of domestic flights
                </h3>
              </div>
            </div>
          </div>
          {/* dots */}
          <div className="flex justify-center items-center gap-1 mt-5">
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full cursor-pointer"></div>
            <div className="w-3 h-3 bg-accent rounded-full cursor-pointer"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full cursor-pointer"></div>
          </div>
        </div>
      </ComContainer>
    </div>
  );
};

export default Offer;
