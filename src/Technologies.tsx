import Javascript from "./assets/javascript.svg";
import Php from "./assets/php.svg";
import Python from "./assets/python.svg";

export const Technologies = () => {
  return (
    <div className="flex justify-between mt-10">
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
  );
};
