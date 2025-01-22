import LinkedIn from "./assets/socials/linkedin.svg";
import Github from "./assets/socials/github.svg";
import BlueSky from "./assets/socials/bluesky.svg";

export const GetInTouch = () => {
  return (
    <div className="grid grid-cols-1 mx-5 text-center">
      <div>
        <p className="font-mono text-2xl font-bold">
          Would you like to work with me?
        </p>
      </div>
      <div>
        {" "}
        <p className="mt-5 font-mono text-xl text-center">Get in touch!</p>
      </div>
      <div className="flex justify-center gap-10 mt-4">
        <a href="https://www.linkedin.com/in/amos-babu-275597202/">
          <img src={LinkedIn} alt="LinkedIn Logo" className="w-12 h-12" />
        </a>
        <a
          href="https://github.com/amos-babu"
          className="grid bg-white rounded-md h-14 w-14"
        >
          <img
            src={Github}
            alt="Github Logo"
            className="self-center w-12 h-12 justify-self-center"
          />
        </a>
        <a href="https://amos-babu.bsky.social">
          <img src={BlueSky} alt="BlueSky Logo" className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
};
