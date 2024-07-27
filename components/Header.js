import Link from "next/link";
import headerStyles from "../styles/Header.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiMenu2Fill } from "react-icons/ri";

function Header() {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = !active ? "auto" : "hidden";
  }, [active]);

  function ToggleNav() {
    setActive(!active);
  }

  function closeNavbar() {
    setActive(false);
  }

  return (
    <header className={headerStyles.headerContainer}>
      <div className={headerStyles.logoContainer}>
        <RiMenu2Fill className={headerStyles.menuIcon} onClick={ToggleNav} />
        <Link href="/" className={headerStyles.logo}>
          Foody<span className={headerStyles.logoDot}>.</span>
        </Link>
      </div>

      <nav
        className={`${headerStyles.navbar}  ${
          active ? `${headerStyles.openNavbar}` : ""
        }`}
      >
        <button onClick={ToggleNav} className={headerStyles.closeMenu}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>

        <Link
          onClick={closeNavbar}
          href="/"
          className={pathname === "/" ? `${headerStyles.active}` : ""}
        >
          Home
        </Link>
        <Link
          onClick={closeNavbar}
          href="/restaurants"
          className={
            pathname.startsWith("/restaurants") ? `${headerStyles.active}` : ""
          }
        >
          Restaurants
        </Link>
        <Link
          onClick={closeNavbar}
          href="/about-us"
          className={
            pathname.startsWith("/about-us") ? `${headerStyles.active}` : ""
          }
        >
          About us
        </Link>
        <Link
          onClick={closeNavbar}
          href="/howitworks"
          className={
            pathname.startsWith("/howitworks") ? `${headerStyles.active}` : ""
          }
        >
          How it works
        </Link>
        <Link
          onClick={closeNavbar}
          href="/faqs"
          className={
            pathname.startsWith("/faqs") ? `${headerStyles.active}` : ""
          }
        >
          FAQs
        </Link>
      </nav>

      <div className={headerStyles.inputContainer}>
        <div>
          <input type="text" placeholder="Search" />
        </div>

        <div className={headerStyles.languageIcon}>
          <button>
            <img
              src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
              alt="UK Flag"
            />
          </button>
        </div>

        <div className={headerStyles.buttonContainer}>
          <Link href="/login">Sign up</Link>
        </div>
      </div>

      {/* Overlay */}
      {active ? <div class={headerStyles.overlay}></div> : ""}
    </header>
  );
}

export default Header;
