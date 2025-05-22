import socials from "../data/contacts.json";
export default function Intro() {
  return (
    <div className="mx-2">
      <p className="text-gray-500 text-xl font-semibold font-[dancingScript]">
        Hi I am
      </p>
      <p className="text-gray-400 text-3xl font-semibold font-sans my-3">
        Martin
      </p>
      <div className="my-6">
        <p className="text-6xl leading-[1.5] font-bold font-sans bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
          Electrical Engineer
        </p>
      </div>
      <div className="flex gap-6 my-6">
        {socials.map((social) => (
          <a
            target="_blank"
            key={social.id}
            href={social.link}
            className="grid w-10 h-10 bg-white/8 hover:bg-gray-600 rounded-full"
          >
            <img
              src={social.path}
              alt={social.alt}
              className="self-center w-6 h-6 justify-self-center"
            />
          </a>
        ))}
      </div>
      <div className="flex flex-wrap gap-10">
        <button
          type="button"
          className="cursor-pointer font-[moonWalk] bg-orange-600 rounded-md font-medium hover:bg-orange-700 text-white"
        >
          <span className="mx-15 my-10">Hire Me</span>
        </button>
        <button
          type="button"
          className="cursor-pointer font-[moonWalk] border-2 border-gray-600 rounded-md font-medium hover:bg-gray-600 text-white"
        >
          <span className="mx-10 my-5">Download CV</span>
        </button>
      </div>
      <div className="flex hover:cursor-pointer justify-center lg:justify-start flex-wrap my-10 lg:divide-y-0 md:divide-y-0 md:divide-x-4 divide-y-4 lg:divide-x-4">
        <div className="bg-white/8 flex rounded-t-lg lg:rounded-l-lg border-gray-600 flex-col justify-center">
          <div className="my-4 mx-5">
            <p className="text-orange-600 font-bold mx-3 text-base">10+</p>
            <p className="text-gray-400 font-bold text-lg tracking-wide mx-3">
              Experience
            </p>
          </div>
        </div>
        <div className="bg-white/8 flex flex-col border-gray-600 justify-center">
          <div className="my-4 mx-5">
            <p className="text-orange-600 font-bold mx-3 text-base">20+</p>
            <p className="text-gray-400 font-bold text-lg tracking-wide mx-3">
              Projects Done
            </p>
          </div>
        </div>
        <div className="bg-white/8 flex flex-col rounded-b-lg lg:rounded-r-lg justify-center">
          <div className="my-4 mx-5">
            <p className="text-orange-600 font-bold mx-3 text-base">80+</p>
            <p className="text-gray-400 font-bold text-lg tracking-wide mx-3">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
