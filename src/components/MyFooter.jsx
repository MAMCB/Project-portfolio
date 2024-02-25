import React from 'react'
import { Footer } from 'flowbite-react'
import github from "../../public/github-mark.png";
import linkedin from "../../public/LI-In-Bug.png";

const MyFooter = () => {
  return (
    <Footer container>
      <Footer.LinkGroup>
        <Footer.Link href="https://github.com/MAMCB" target="_blank">
          <img
            className="w-10 dark:bg-white rounded-full "
            src={github}
            alt="github logo"
          />
        </Footer.Link>
        <Footer.Link href="https://www.linkedin.com/in/borges-miguel/" target='_blank'>
          <img className="w-10" src={linkedin} alt="linkedin logo" />
        </Footer.Link>
      </Footer.LinkGroup>

      <Footer.LinkGroup>
        <Footer.Link href="/about">About</Footer.Link>

        <Footer.Link href="/contacts">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default MyFooter