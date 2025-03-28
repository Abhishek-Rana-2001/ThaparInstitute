
const StaticPin = () => {
  return (
    <a
      href="https://wa.me/9815849739"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 max-w-32 text-center flex flex-col gap-2 items-center p-4 rounded-full bg-black/70"
    >
      <img src="/icons/whatsapp.svg" className="w-10 h-10 object-cover" alt="" />
      <span className="text-sm underline text-sky-400">Contact on Whatsapp</span>
    </a>
  );
};

export default StaticPin;
