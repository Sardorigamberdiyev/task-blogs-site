import { useState } from 'react';
import { Navbar as NavbarBootstrap, Container, Nav, Button, Dropdown } from 'react-bootstrap';
import { INavbarProps } from "./navbar.props";
import { useAuth } from '../hooks/use-auth';
import { Role } from '../../libs/enums/role.enum';
import { useNavigate } from 'react-router-dom';
import SignInModal from '../sign-in-modal';
import SignUpModal from '../sign-up-modal';
import ProfileModal from '../profile-modal';

export function Navbar(props: INavbarProps) {
    const { isAuth, user, signOut } = useAuth();
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);

    const navigate = useNavigate();

    return (
        <div>
            <SignInModal 
            show={showSignInModal}
            handleClose={() => setShowSignInModal(false)} />
            <SignUpModal
            show={showSignUpModal}
            handleClose={() => setShowSignUpModal(false)} />
            <ProfileModal
            show={showProfileModal}
            handleClose={() => setShowProfileModal(false)} />
            <NavbarBootstrap 
            expand="lg" 
            className="bg-body-tertiary">
                <Container>
                    <NavbarBootstrap.Brand 
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate('/')}>
                        BLOG
                    </NavbarBootstrap.Brand>
                    <NavbarBootstrap.Toggle />
                    <NavbarBootstrap.Collapse>
                        <Nav className="me-auto">
                            {
                                user?.role === Role.ADMIN && (
                                   <Nav.Link onClick={() => navigate('/users')}>Users</Nav.Link>
                                )
                            }
                        </Nav>
                        { isAuth ? (
                            <Dropdown>
                                <Dropdown.Toggle>{user?.username}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setShowProfileModal(true)}>Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={signOut}>Sign out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                                <div className="d-flex align-items-center">
                                    <Button 
                                    type="button"
                                    variant="outline-primary"
                                    onClick={() => setShowSignInModal(true)}>Sign In</Button>
                                    <Button 
                                    type="button"
                                    variant="primary"
                                    className="ms-1"
                                    onClick={() => setShowSignUpModal(true)}>Sgin Up</Button>
                                </div>
                            )
                        }
                    </NavbarBootstrap.Collapse>
                </Container>
            </NavbarBootstrap>
        </div>
    )
}