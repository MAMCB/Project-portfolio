import { Button, Modal } from "flowbite-react";


const SkillLevelModal =({skillLevel,openModal,setOpenModal}) => {


  return (
    <>
      
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{skillLevel.name} of 10</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {skillLevel.description}
            </p>
           
          </div>
        </Modal.Body>
        <Modal.Footer>
          
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SkillLevelModal;
