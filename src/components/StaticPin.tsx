import { FaWhatsapp } from "react-icons/fa";

const StaticPin = () => {
  return (
    <a
      href="https://wa.me/9815849739"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 max-w-32 text-center flex flex-col gap-2 items-center p-4 rounded-full bg-black/70"
    >
      <FaWhatsapp color="#25c761" size={40} />
      <span className="text-sm underline text-sky-400">Contact on Whatsapp</span>
    </a>
  );
};

export default StaticPin;
