// react-bootstrap
import { Modal } from "react-bootstrap";
// components
import LoadingScreen from "../../components/LoadingScreen";
// hooks
import useDrinks from "../../hooks/useDrinks";
//
import ModalBody from "./ModalDrink/ModalBody";

// ----------------------------------------------------------------------

const ModalDrink = () => {
  const { recipe, modal, loading, handleModalClick } = useDrinks();

  const modalBodyContent = loading ? (
    <LoadingScreen />
  ) : (
    <ModalBody recipe={recipe} />
  );

  return (
    <Modal size="lg" centered show={modal} onHide={handleModalClick}>
      <Modal.Body className="show-grid p-4">{modalBodyContent}</Modal.Body>
    </Modal>
  );
};

export default ModalDrink;
