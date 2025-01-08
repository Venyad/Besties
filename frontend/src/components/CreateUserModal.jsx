import { Button, useDisclosure } from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";
const CreateUserModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return(
  <>
    <Button>
      <BiAddToQueue size={20} />
    </Button>
    <Modal
    isOpen={isOpen}
    onClose = {onClose}

    >
    <ModalOverlay/>
    <ModalContent>
      <ModalHeader>My new BFF </ModalHeader>
    </ModalContent>
    </Modal>
  </>)
}

export default CreateUserModal
