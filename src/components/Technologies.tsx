import Javascript from "../assets/javascript.svg";
import Php from "../assets/php.svg";
import Python from "../assets/python.svg";
import Laravel from "../assets/laravel.svg";
import Livewire from "../assets/livewire.svg";
import Mysql from "../assets/mysql.svg";
import React from "../assets/react.svg";
import Tailwind from "../assets/tailwind-css.svg";
import Typescript from "../assets/typescript.svg";
import Vite from "../assets/vitejs.svg";

export const Technologies = () => {
  return (
    <div className="grid grid-cols-1 mx-5 mt-10">
      <div>
        <p className="mt-20 mb-5 font-mono text-xl text-center">
          <span className="text-2xl font-bold">Languages</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        <div>
          {" "}
          <img src={Javascript} alt="JavaScript Logo" className="w-12 h-12" />
        </div>
        <div>
          {" "}
          <img src={Php} alt="Php Logo" className="w-12 h-12" />
        </div>
        <div>
          {" "}
          <img src={Python} alt="Python Logo" className="w-12 h-12" />
        </div>
      </div>
      <div>
        <p className="mt-20 mb-5 font-mono text-xl text-center">
          <span className="text-2xl font-bold">Frameworks</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        <div>
          {" "}
          <img src={Laravel} alt="Laravel Logo" className="h-30 w-30" />
        </div>
        <div>
          {" "}
          <img src={Livewire} alt="Livewire Logo" className="w-30 h-30" />
        </div>
        <div>
          {" "}
          <img src={Mysql} alt="Mysql Logo" className="w-30 h-30" />
        </div>
        <div>
          {" "}
          <img src={React} alt="React Logo" className="w-30 h-30" />
        </div>
        <div>
          {" "}
          <img src={Tailwind} alt="Tailwind Logo" className="w-30 h-30" />
        </div>
        <div>
          {" "}
          <img src={Typescript} alt="Typescript Logo" className="w-30 h-30" />
        </div>
        <div>
          {" "}
          <img src={Vite} alt="Vite Logo" className="w-30 h-30" />
        </div>
      </div>
    </div>
  );
};
