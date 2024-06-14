import { Form } from "react-bootstrap";
import { useState } from "react";
import { ISignUpModalProps } from "./sign-up-modal.props";
import { Role } from "../../libs/enums/role.enum";
import { useAuth } from "../hooks/use-auth";
import Modal from "../modal";

export default function SignUpModal(props: ISignUpModalProps) {
    const { signUp } = useAuth()
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [role, setRole] = useState<Role>(Role.GUEST);

    const handleSignUp = () => {
        signUp({ fullName, username, password, role })
    }

    return (
        <Modal 
        {...props} 
        handleSave={handleSignUp}
        title="Sign Up">
            <Form>
                <Form.Group className="mb-3" controlId="signup.fullName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="fullName"
                    placeholder="first and last name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="signup.role">
                    <Form.Label>Select role</Form.Label>
                    <div className="d-flex">
                        <Form.Check
                        type="radio"
                        id="guest"
                        label="Guest"
                        name="role"
                        checked={Role.GUEST === role}
                        onChange={() => setRole(Role.GUEST)} />
                        <Form.Check
                        className="mx-3"
                        type="radio"
                        id="author"
                        label="Poster"
                        name="role"
                        checked={Role.AUTHOR === role}
                        onChange={() => setRole(Role.AUTHOR)} />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="signup.username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="signup.password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="signup.passwordConfirm">
                    <Form.Label>Re-enter password</Form.Label>
                    <Form.Control 
                    type="password"
                    name="password-confirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)} />
                </Form.Group>
            </Form>
        </Modal>
    )
}