import { useState } from "react";
import logo from "./../assets/Images/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const menu = [
  { id: 1, name: "Home" },
  { id: 2, name: "Movies" },
  { id: 3, name: "TV" },
  { id: 4, name: "Sports" },
  { id: 5, name: "News" },
  { id: 6, name: "Hubs" },
];

function Header() {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState(1); // <-- Track selected item

  const handleMenuClick = (id: any) => {
    setActiveMenu(id);
  };

  return (
    <div className="flex justify-between items-center p-4 px-10 absolute w-full bg-gradient-to-b from-[#0e0f12] to-transparent z-10">
      <img src={logo} alt="logo" className="w-[100px]" />

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-8">
        {menu.map((item) => (
          <li
            key={item.id}
            onClick={() => handleMenuClick(item.id)}
            className={`text-[18px] font-medium cursor-pointer px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out ${
              activeMenu === item.id
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Mobile dropdown */}
      <div className="md:hidden">
        <h2
          className="text-gray-400 text-[18px] font-medium cursor-pointer hover:bg-gray-700 hover:text-white px-3 pb-2 py-1 flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out"
          onClick={() => setToggle(!toggle)}
        >
          {menu.find((item) => item.id === activeMenu)?.name || "Menu"}
          {!toggle ? (
            <IoIosArrowDown className="mt-1" />
          ) : (
            <IoIosArrowUp className="mt-1" />
          )}
        </h2>
        {toggle && (
          <ul className="absolute bg-gray-700 w-[200px] text-center mt-3 left-0 right-0 ml-auto mr-auto rounded-md px-3">
            {menu.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  handleMenuClick(item.id);
                  setToggle(false);
                }}
                className={`text-[18px] font-medium cursor-pointer px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out ${
                  activeMenu === item.id
                    ? "bg-gray-500 text-white"
                    : "text-gray-400 hover:bg-gray-500 hover:text-white"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Search and profile */}
      <div className="flex gap-10">
        <IoSearchSharp className="text-[35px] text-gray-300 hover:bg-gray-700 px-[3px] pb-[2px] py-[2px] rounded-md hover:text-white transition-all duration-500 ease-in-out" />
        <h2 className="px-[10px] text-[20px] text-gray-300 border-[2px] border-white rounded-full">
          R
        </h2>
      </div>
    </div>
  );
}

export default Header;
