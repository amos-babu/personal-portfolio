import languages from "../data/languages.json";
import tools from "../data/frameworks.json";

export const Technologies = () => {
  return (
    <div className="grid grid-cols-1 mx-5 mt-2">
      <div>
        <p className="mt-20 mb-5 font-mono text-xl text-center">
          <span className="text-2xl font-bold">Languages</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        {languages.map((language) => (
          <div key={language.id}>
            {" "}
            <img
              src={language.path}
              alt={language.name}
              className="w-12 h-12"
            />
          </div>
        ))}
      </div>
      <div>
        <p className="mt-20 mb-5 font-mono text-xl text-center">
          <span className="text-2xl font-bold">Frameworks and Tools</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        {tools.map((tool) => (
          <div key={tool.id}>
            {" "}
            <img src={tool.path} alt={tool.name} className="h-30 w-30" />
          </div>
        ))}
      </div>
    </div>
  );
};
