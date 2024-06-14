import { Button, Modal } from "react-bootstrap";
import { IDangerModalProps } from "./danger-modal.props";

export default function DangerModal({ show, handleClose, handleDanger }: IDangerModalProps) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>No</Button>
                <Button variant="danger" onClick={handleDanger}>Yes</Button>
            </Modal.Footer>
      </Modal>
    )
}