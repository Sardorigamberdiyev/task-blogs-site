import { Form } from "react-bootstrap";
import { useAuth } from "../hooks/use-auth";
import { IProfileModalProps } from "./profile-modal.props";
import Modal from "../modal";

export default function ProfileModal(props: IProfileModalProps) {
    const { user } = useAuth();

    return (
        <Modal title="Profile" {...props}>
            <Form> 
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    value={user?.fullName}
                    disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    type="text"
                    value={user?.username}
                    disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Control 
                    type="text"
                    value={user?.role}
                    disabled />
                </Form.Group>
            </Form>
        </Modal>
    )
}