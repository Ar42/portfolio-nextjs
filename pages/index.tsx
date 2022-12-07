import { useState } from "react";

import { CrossIcon, HamBurgerMenu } from "../components/Icons/icons";
import Blog from "../features/blog";
import Contact from "../features/contact";

import History from "../features/history";
import HomeComponent from "../features/home";
import LeftBar from "../features/leftBar";

const MENU: { [key: string]: string } = {
  HOME: "Home",
  HISTORY: "History",
  CONTACT: "Contact",
  BLOG: "Blog",
};

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState<string>(MENU.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleSelectMenu = (menu: string) => {
    setSelectedMenu(menu);
    setIsMenuOpen(false);
  };

  const handleModalOpenClose = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="lg:flex flex-row-reverse gap-x-4 p-4">
      <div className="lg:w-9/12 relative mb-6 lg:mb-0">
        {selectedMenu === MENU.HOME ? (
          <HomeComponent />
        ) : selectedMenu === MENU.HISTORY ? (
          <History />
        ) : selectedMenu === MENU.CONTACT ? (
          <Contact />
        ) : (
          <Blog />
        )}

        <div className="absolute right-0 top-0">
          {!isMenuOpen ? (
            <button onClick={handleModalOpenClose}>
              <HamBurgerMenu />
            </button>
          ) : (
            <menu className="w-64 shadow-lg bg-white absolute right-0 top-0 py-4 rounded-md">
              <button
                onClick={handleModalOpenClose}
                className="absolute right-1 top-1"
              >
                <CrossIcon />
              </button>
              <ul>
                <li
                  className="border-b border-gray-200 pb-1 px-4 cursor-pointer"
                  onClick={() => {
                    handleSelectMenu(MENU.HOME);
                  }}
                >
                  {MENU.HOME}
                </li>
                <li
                  className="border-b border-gray-200 pb-1 px-4 cursor-pointer"
                  onClick={() => {
                    handleSelectMenu(MENU.HISTORY);
                  }}
                >
                  {MENU.HISTORY}
                </li>
                <li
                  className="border-b border-gray-200 pb-1 px-4 cursor-pointer"
                  onClick={() => {
                    handleSelectMenu(MENU.CONTACT);
                  }}
                >
                  {MENU.CONTACT}
                </li>
                <li
                  className="px-4 cursor-pointer"
                  onClick={() => {
                    handleSelectMenu(MENU.BLOG);
                  }}
                >
                  {MENU.BLOG}
                </li>
              </ul>
            </menu>
          )}
        </div>
      </div>

      <div className="lg:w-3/12">
        <LeftBar />
      </div>
    </div>
  );
}
