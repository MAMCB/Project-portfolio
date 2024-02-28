import Link from "next/link";
import { DarkThemeToggle, Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand
        as={Link}
        
        href="/"
      >
        <img
          src="https://avatars.githubusercontent.com/u/96302464?v=4"
          className="mr-3 h-6 sm:h-9 rounded-full w-6 sm:w-9"
          alt="Personal photo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
          Hi I'm Miguel
        </span>
      </Navbar.Brand>
      <DarkThemeToggle  />
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about">
          About me
        </Navbar.Link>
        <Navbar.Link href="/projects">Projects</Navbar.Link>
        <Navbar.Link href="/resume">Resume</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
