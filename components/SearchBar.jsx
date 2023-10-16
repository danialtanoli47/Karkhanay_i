/*SearchBar Component */

import Link from "next/link";
import Image from "next/image";

const SearchBar = () => {
  return (
    <section className="w-full md:px-2.5 lg:px-4 flex-center flex-col">
      <>
        {/**Search bar Nav (tier2) */}
        <nav className="z-20 flex shadow-lime-500 shadow-md w-full fixed top-0 bg-lime-300 pt-16 ">
          <div className="flex w-full mx-3">
            <form action="" className="  flex flex-auto">
              <div className="flex flex-auto  items-center relative">
                <Image
                  src="/assets/icons/search.svg"
                  alt="dropdown"
                  width={25}
                  height={25}
                  className="absolute ml-1  "
                />
                <input
                  type="text"
                  name="search"
                  placeholder="Search products & services."
                  aria-label="Search bar"
                  className="w-full  text-md mt-2 pl-8 pr-10 py-1 mb-2 placeholder-gray-400 text-gray-800 rounded-sm border-none ring-1 ring-gray-200 focus:outline-none focus:ring focus:ring-lime-400  "
                ></input>
              </div>
              <div className="pl-2   ">
                <button
                  className="relative top-2 rounded-sm flex bg-white text-gray-700 px-1  ring-1 ring-gray-200 focus:outline-none focus:ring hover:ring focus:ring-lime-400 "
                  onClick={(e) => {
                    e.preventDefault(); // Disable default action
                    // Add your custom logic here
                  }}
                >
                  <Image
                    src="/assets/icons/chevron-down-solid.svg"
                    alt="dropdown"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </form>
          </div>
        </nav>
      </>
    </section>
  );
};

export default SearchBar;
