import ComContainer from "../ComContainer/ComContainer";
import logoPart1 from "../../../assets/logo/logo-part1.png";
import logoPart2 from "../../../assets/logo/logo-part2.png";

const Navbar = () => {
  const linkStyle = "text-lg font-medium";
  const navLinks = (
    <>
      <a href="#blog" className={linkStyle}>
        <li>Blog</li>
      </a>
      <a href="#offer" className={linkStyle}>
        <li>Offer</li>
      </a>
      <a href="#airline" className={linkStyle}>
        <li>Airline</li>
      </a>
      <a href="#about" className={linkStyle}>
        <li>About</li>
      </a>
    </>
  );
  return (
    <div className="py-5 border mx-5">
      <ComContainer>
        <div className="flex justify-between items-center ">
          {/* logo */}
          <div className="flex items-center gap-2">
            <img src={logoPart1} alt="" />
            <img src={logoPart2} alt="" />
          </div>

          {/* links */}
          <ul className="flex items-center gap-5">{navLinks}</ul>

          {/* signIn signUp btn */}
          <button
            className="bg-primary w-32 text-xl font-medium py-2 rounded-[10px] text-white
          "
          >
            Sign in
          </button>
        </div>
      </ComContainer>
    </div>
  );
};

export default Navbar;
