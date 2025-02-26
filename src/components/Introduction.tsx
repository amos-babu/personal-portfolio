import Profile from "../assets/profile.jpg";

export const Introduction = () => {
  const handleScroll = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="grid grid-cols-1 px-4 justify-items-center mt-9 sm:px-6 md:px-10 lg:px-16">
      <div className="mt-4 transition duration-300 ease-in-out delay-150 border-4 rounded-lg sm:w-1/2 md:w-1/4 hover:-translate-y-1 hover:scale-110">
        <img className="rounded-lg" src={Profile} alt="Profile picture" />
      </div>
      <div className="w-3/4 mt-6 space-y-4 text-center sm:mt-8 md:mt-10">
        <p className="font-mono font-thin text-white text-8xl font-dancing-script">
          {" "}
          Hi! I'm <span className="font-bold tracking-wide">Amos Babu</span>!
        </p>
        <p className="pt-5 font-mono text-xl font-thin text-white">
          {" "}
          <span className="font-bold tracking-wide">
            Full-stack Web Developer
          </span>
          , <span className="font-bold tracking-wide">Music </span>
          and <span className="font-bold tracking-wide">Arts</span> Enthusiast .
        </p>
      </div>
      <div
        onClick={handleScroll}
        className="mt-10 mb-20 cursor-pointer justify-items-center animate-bounce"
        aria-label="Scroll to the next section"
      >
        <p className="font-mono text-xl font-semibold">Find out more</p>
        <div className="grid w-8 h-8 mt-4 bg-white rounded-full ">
          <svg
            className="self-center w-6 h-6 text-black justify-self-center dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
