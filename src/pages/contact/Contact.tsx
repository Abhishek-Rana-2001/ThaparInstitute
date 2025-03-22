import { useState } from "react";
import AnimatedHeading from "../../components/AnimatedHeading";
import { Loader } from "../../components/Loader";
import { FadeUp } from "../../components/FadeUp";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [isMapLoading, setIsMapLoading] = useState(true);

  const handleLoading = () => {
    setIsMapLoading(false);
  };
  return (
    <div className="p-8 max-w-[1400px] mx-auto flex md:flex-row flex-col gap-5 justify-between h-full">
      <div className="flex-1 content-center">
        <AnimatedHeading className="text-start px-0" spanClass="px-0" >Let's Get In Touch</AnimatedHeading>
        <FadeUp>
            <div className="flex flex-col gap-2 py-6 justify-center">
              <h2 className="text-xl font-semibold">
              Let us help you build your skills and become job ready{" "}
              </h2>
              <div className="flex gap-2">
                <span className="flex gap-2 items-center"><Phone size={20}/> Call us at :</span>
                <a
                  href="tel:+919815849739"
                  className="flex gap-2 items-center text-sky-500 underline"
                >
                  +919815849739
                </a>
              </div>
              <div className="flex gap-2">
                <span className="flex gap-2 items-center"> <Mail size={25} /> Mail us at :</span>
                <a
                  href="mailto:thaparinstitute02@gmail.com"
                  className="flex gap-2 items-center text-sky-500 underline"
                >
            
                  Thaparinstitute02@gmail.com
                </a>
              </div>
              <p>Let us help you build your skills and become job ready</p>
            </div>
        </FadeUp>
      </div>

      <div className="flex justify-center item-center flex-1 content-center">
        {isMapLoading && <Loader />}
        <div className="md:h-full h-[300px] w-full my-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.9503058333535!2d75.8588528!3d30.943952399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a853219f3e61d%3A0x3e857423c745b1d0!2sThapar%20Institute%20%7C%20Best%20Computer%20Institute%20in%20Ludhiana!5e0!3m2!1sen!2sin!4v1741436244304!5m2!1sen!2sin"
            style={{ border: "0" }}
            loading="lazy"
            className="rounded-lg w-full h-full object-cover"
            onLoad={handleLoading}
          ></iframe>
        </div>
      </div>
      {/* <a
          href="https://wa.me/9815849739"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Share Button
        </a> */}
    </div>
  );
};

export default Contact;
