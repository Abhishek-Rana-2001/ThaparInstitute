import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
      <div className="mt-10 w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] py-10">
        {/* Social Media Handler */}
        <div className=" flex flex-col justify-center items-center gap-5">
          <h3 className="md:text-2xl">Follow Us On Socials</h3>
          <div className="flex gap-4">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
        <div className=" flex flex-col items-center gap-5 justify-center">
          <h3 className="md:text-2xl">Links</h3>
          <div className="flex flex-col gap-3 items-center">
            <NavLink to={"/courses"}>Courses</NavLink>
            <NavLink to={"/courses"}>Certifications</NavLink>
            <NavLink to={"/courses"}>Courses</NavLink>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-5 justify-center">
          <h3 className="md:text-2xl">Address</h3>
          <div className="flex items-center gap-4">
            <FaLocationDot size={30} />
            <p className="text-lg">S-28, basant vihar colony noorwala road, ludhiana</p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
