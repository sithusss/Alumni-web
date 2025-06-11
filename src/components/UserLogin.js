import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";

const UserLogin = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleSignIn = () => {
        loginWithRedirect()
    };

    const handleSignUp = () => {
        setShow(true)
    };

    return (
        <>
            <div className="user-login">
                <button onClick={handleSignUp}>SIGN UP</button>
                {!isAuthenticated && <button onClick={handleSignIn}>SIGN IN</button>}
                {isAuthenticated && <button onClick={() => logout({ returnTo: window.location.origin })}>SIGN OUT</button>}
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>SIGN IN/ SIGN UP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Under Development
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UserLogin