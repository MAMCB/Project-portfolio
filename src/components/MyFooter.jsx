import React from 'react'
import { Footer } from 'flowbite-react'

const MyFooter = () => {
  return (
    <Footer container>
      <Footer.Copyright
        href="https://www.freepik.com/free-vector/creative-geometric-design-space_4159942.htm#query=portfolio%20background&position=10&from_view=keyword&track=ais&uuid=2db72275-57c2-46ab-a44f-790db72bd57c"
        by="Image by rawpixel.com on Freepik"
        
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default MyFooter