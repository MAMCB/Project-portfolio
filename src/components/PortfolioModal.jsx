import { Modal,Button,Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Banner from "../../public/Banner.png"
import WBS from "../../public/WBS-Certificate.png"


const PortfolioModal = ({openModal,modalPlacement,handleClose}) => {
  return (
   
    <Modal
      size={"6xl"}
      show={openModal}
      position={modalPlacement}
      onClose={() => handleClose(false)}
    >
      <Modal.Header>Welcome to my portfolio</Modal.Header>
      <Modal.Body>
        <div className=" p-6 flex flex-wrap justify-evenly ">
          <Link to="/projects" className="modalLink rounded-2xl">
            <Card className=" w-80 h-80">
              <div className="h-40 p-0">
                <img
                  src={Banner}
                  className=" h-20 w-80"
                  alt="Projects banner"
                />
              </div>

              <h2>My projects</h2>
            </Card>
          </Link>
          <Link to="/about" className="modalLink rounded-2xl">
            <Card className="w-80 h-80">
              <img
                src="https://avatars.githubusercontent.com/u/96302464?v=4"
                className="mx-auto h-40 w-40 rounded-full"
                alt="Personal photo"
              />
              <h2>About me</h2>
            </Card>
          </Link>
          <Link to="/resume" className="modalLink rounded-2xl">
            <Card className=" w-80 h-80">
              <img
                src={WBS}
                alt="Professional certificate"
                className="mx-auto h-40 w-40"
              />
              <h2>My resume</h2>
            </Card>
          </Link>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={() => handleClose(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
   
  );
}

export default PortfolioModal