import Profile from "./assets/profile.jpg";

export default function App() {
  return (
    <>
      <nav className="bg-gray-800 border-gray-900 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-center gap-4 p-4 mx-auto max-4-screen-xl">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold text-custom-green whitespace-nowrap">
              Amos Babu
            </span>
          </a>
        </div>
      </nav>
      <nav className="bg-gray-800 border-gray-900 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-center gap-4 p-4 mx-auto max-4-screen-xl">
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 text-sm border border-gray-300 rounded-lg text-lime-500 ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded bg-custom-green text-custom-green md:bg-transparent md:ext-green-600 md:p-0 md:dark:text-green-600"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded text-custom-green hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:ext-green-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded text-custom-green hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container flex flex-col items-center gap-10 mx-auto md:flex-row">
        <div className="box-border w-1/4 h-full mt-4 border-4 rounded-full">
          <img className="rounded-full" src={Profile} alt="Profile picture" />
        </div>
        <div className="w-3/4">
          <h3 className="text-xl text-custom-green">
            Full Stack Developer @ Rugged Software | Technical Content Creator
          </h3>
          <span className="block pt-5 text-custom-green">
            Passionate full-stack developer with experience in React
            (TypeScript), Laravel, Livewire and Python. I enjoy creating smooth
            user experiences and clean code.
          </span>
        </div>
      </div>
    </>
  );
}
