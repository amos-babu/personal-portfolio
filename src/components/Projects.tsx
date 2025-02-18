import projects from "../data/project.json";

const Projects = () => {
  return (
    <div className="mx-5 mt-20">
      <div className="mb-10 font-mono text-2xl font-bold text-center">
        Projects
      </div>

      <div className="flex flex-col flex-wrap justify-center gap-20 mb-10 md:flex-row">
        {projects.map((project) => (
          <div
            key={project.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded-t-lg"
                src={project.screenshotUrl}
                alt=""
              />
            </a>
            <div className="p-5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.desciption}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Github Repo
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
