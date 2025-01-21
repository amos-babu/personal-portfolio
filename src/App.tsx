import Profile from "./assets/profile.jpg";

export default function App() {
  const handleScroll = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="container grid mx-auto justify-items-center">
        <div className="grid justify-items-center mt-9">
          <div className="w-1/4 h-full mt-4 transition duration-300 ease-in-out delay-150 rounded-full hover:-translate-y-1 hover:scale-110">
            <img className="rounded-full" src={Profile} alt="Profile picture" />
          </div>
          <div className="w-3/4 mt-4 text-center">
            <p className="font-mono text-xl font-thin text-white">
              {" "}
              Hi! I'm <span className="font-bold tracking-wide">Amos Babu</span>
              !
            </p>
            <p className="pt-5 font-mono text-xl font-thin text-white">
              {" "}
              <span className="font-bold tracking-wide">
                Full-stack Web Developer
              </span>{" "}
              and have a taste for art and music.
            </p>
          </div>
          <div
            onClick={handleScroll}
            className="mt-10 cursor-pointer justify-items-center animate-bounce"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19V5m0 14-4-4m4 4 4-4"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          id="target-section"
          className="flex items-center justify-center h-64 mt-20 "
        >
          <div>
            <p className="font-mono text-xl font-light leading-loose tracking-wide text-center">
              I am a passionate web developer with a strong foundation in
              Javascript, Php, and Python. I thrive on problem-solving and
              constantly seek to learn new web development techniques and tools
              to improve my skills. Whether it's building scalable applications,
              enhancing user interfaces, or optimizing backends, I love bringing
              ideas to life through code. When I'm not coding, you can find me
              exploring my creative side through art and music two hobbies that
              help.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
