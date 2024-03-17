import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

function Navbar() {
  return (
    <header className="flex items-center justify-between w-full px-5 py-5 sm:px-10">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex justify-center flex-1 max-sm:hidden">
          {navLists.map((item, index) => (
            <a
              className="mx-2 text-sm font-medium text-white transition-all duration-300 ease-in-out sm:mx-4 hover:text-gray-300"
              key={index}
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
