import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Menu from "./Menu";
import SearchIcon from "./SearchIcon";
import CartIcon from "./CartIcon";
import BurgerIcon from "./BurgerIcon";
import CloseIcon from "./CloseIcon";

const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="h-full flex items-center">
      <div className="flex flex-row w-full justify-between items-center">
        <span>
          <Logo />
        </span>
        <ul className="flex flex-row justify-evenly items-center">
          {!menuOpen && (
            <>
              <li className="py-2 inline-block">
                <span className="flex">
                  <Link href="/Cart">
                    <CartIcon />
                  </Link>
                </span>
              </li>
              <li className="py-2 inline-block">
                <span className="flex mx-1rem cursor-pointer">
                  <SearchIcon />
                </span>
              </li>
            </>
          )}
          <li className="py-2 inline-block">
            <span className="flex cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? <CloseIcon /> : <BurgerIcon />}
            </span>
          </li>
        </ul>
      </div>
      {menuOpen && (
        <>
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: "0",
              right: "0",
              bottom: "0",
              height: `calc(100vh-60px)}`,
              background: `#f9f9f9`,
              padding: "1rem",
              zIndex: "100",
            }}
          >
            <Menu />
          </div>
        </>
      )}
    </nav>
  );
};

export default Mobile;
