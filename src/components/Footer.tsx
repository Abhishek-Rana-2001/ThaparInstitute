import { NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="mt-10 w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] py-10">
      {/* Social Media Handler */}
      <div className=" flex flex-col justify-center items-center gap-5">
        <h3 className="md:text-2xl">Follow Us On Socials</h3>
        <div className="flex gap-4">
          <a href="">
          <img src="/icons/facebook.svg" className="w-10 h-10 object-cover" alt="" />
          </a>
          <a href="https://www.instagram.com/samyakludhiana?igsh=MWtjMnFocnNwNGR4dg==" target="_blank">
          <img src="/icons/instagram.svg" className="w-10 h-10 object-cover" alt="" />
          </a>
          <a href="https://youtube.com/@samyakludhiana?si=1lx3_lxQf1BBl6Xz" target="_blank">
          <img src="/icons/youtube.svg" className="w-10 h-10 object-cover" alt="" />
          </a>
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
        <MapPin size={25} />
          {/* <FaLocationDot size={30} /> */}
          <p className="text-lg">
            S-28, basant vihar colony noorwala road, ludhiana
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
