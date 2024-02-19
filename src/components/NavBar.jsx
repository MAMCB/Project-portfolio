import Link from "next/link";
import { Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://www.linkedin.com/in/borges-miguel/">
        <img
          src="https://avatars.githubusercontent.com/u/96302464?v=4"
          className="mr-3 h-6 sm:h-9"
          alt="Personal photo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about">
          About
        </Navbar.Link>
        <Navbar.Link href="/projects">Projects</Navbar.Link>
        <Navbar.Link href="/resume">Resume</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
