import Profile from "./assets/profile.jpg";

export default function App() {
  return (
    <>
      <div className="container grid mx-auto justify-items-center">
        <div className="grid justify-items-center mt-9">
          <div className="w-1/4 h-full mt-4 transition duration-300 ease-in-out delay-150 rounded-full hover:-translate-y-1 hover:scale-110">
            <img className="rounded-full" src={Profile} alt="Profile picture" />
          </div>
          <div className="w-3/4 mt-4 text-center">
            <p className="font-mono text-xl text-white">Hi! I'm Amos Babu!</p>
            <p className="pt-5 font-mono text-white">
              Passionate full-stack developer with experience in Javascript,
              React TypeScript, Laravel, Livewire and Python. I enjoy creating
              smooth user experiences and clean code.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
