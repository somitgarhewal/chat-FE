import React from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";

const DeleteModal = ({
  open,
  toggle,
  onSubmit,
  submitButtonName,
}) => {
  return (
    < Modal isOpen={open} toggle={toggle} className="submission-modal" >
      <ModalHeader toggle={toggle} className="modal-header">
        Are you sure want to Delete this?
    </ModalHeader>
      <ModalFooter>
        <div className="display-flex">
          <Button className="mx-2" color="danger" onClick={() => onSubmit()}>
            {submitButtonName}
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
        </Button>
        </div>
      </ModalFooter>
    </Modal >
  )
}

export default DeleteModal;
