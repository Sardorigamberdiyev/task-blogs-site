import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { ISignInModalProps } from './sign-in-modal.props';
import { useAuth } from '../hooks/use-auth';
import Modal from '../modal';

export default function SignInModal(props: ISignInModalProps) {
    const { signIn } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        signIn(username, password);
    }

    return (
        <Modal 
        {...props} 
        title="Sign In"
        handleSave={handleSignIn}>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.password">
                    <Form.Label>Passowrd</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
            </Form>
        </Modal>
    )
}