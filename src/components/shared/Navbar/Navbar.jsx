import logoPart1 from "../../../assets/logo/logo-part1.png";
import logoPart2 from "../../../assets/logo/logo-part2.png";
import { AiOutlineMenu } from "react-icons/ai";

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
    <div className="flex justify-between items-center bg-white fixed w-[98%] left-1/2 -translate-x-1/2 py-5 px-10 bg-opacity-70">
      {/* logo */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logoPart1} alt="" />
          <img src={logoPart2} alt="" />
        </div>
        <AiOutlineMenu className="text-2xl block md:hidden cursor-pointer" />
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
  );
};

export default Navbar;
