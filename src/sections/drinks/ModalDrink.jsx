// react-bootstrap
import { Modal } from "react-bootstrap";
// hooks
import useDrinks from "../../hooks/useDrinks";
//
import ModalBody from "./ModalDrink/ModalBody";

// ----------------------------------------------------------------------

const ModalDrink = () => {
  const { recipe, modal, loading, handleModalClick } = useDrinks();

  return (
    <Modal size="lg" centered show={modal} onHide={handleModalClick}>
      <Modal.Body className="show-grid p-4">
        {loading ? null : <ModalBody recipe={recipe} />}
      </Modal.Body>
    </Modal>
  );
};

export default ModalDrink;
