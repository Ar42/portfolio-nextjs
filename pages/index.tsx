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
    <>
      <div className="flex-row-reverse p-4 text-white bg-black lg:flex gap-x-4">
        <div className="relative mb-6 lg:w-9/12 lg:mb-0">
          {selectedMenu === MENU.HOME ? (
            <HomeComponent />
          ) : selectedMenu === MENU.HISTORY ? (
            <History />
          ) : selectedMenu === MENU.CONTACT ? (
            <Contact />
          ) : (
            <Blog />
          )}

          <div className="absolute right-0 z-10 -top-3">
            {!isMenuOpen ? (
              <button onClick={handleModalOpenClose}>
                <HamBurgerMenu />
              </button>
            ) : (
              <menu className="absolute top-0 right-0 w-64 py-4 bg-black rounded-md">
                <button
                  onClick={handleModalOpenClose}
                  className="absolute right-1 top-1"
                >
                  <CrossIcon />
                </button>
                <ul>
                  <li
                    className="px-4 py-3 border-b border-gray-200 cursor-pointer"
                    onClick={() => {
                      handleSelectMenu(MENU.HOME);
                    }}
                  >
                    {MENU.HOME}
                  </li>
                  <li
                    className="px-4 py-3 border-b border-gray-200 cursor-pointer"
                    onClick={() => {
                      handleSelectMenu(MENU.HISTORY);
                    }}
                  >
                    {MENU.HISTORY}
                  </li>
                  <li
                    className="px-4 py-3 border-b border-gray-200 cursor-pointer"
                    onClick={() => {
                      handleSelectMenu(MENU.CONTACT);
                    }}
                  >
                    {MENU.CONTACT}
                  </li>
                  <li
                    className="px-4 pt-3 cursor-pointer"
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

      <footer className="p-2 text-white bg-black bg-opacity-90 p2-3">
        <p className="text-sm text-center">© 2022 Copyright : Abid Hasan</p>
      </footer>
    </>
  );
}
