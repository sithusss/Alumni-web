import React from 'react'
import HeaderNavbar from './HeaderNavbar';
import rjtLogo from './../assets/img/rjt-logo.png'
import UserLogin from './UserLogin';
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="header">
            <div className="login-wrapper">
                <UserLogin />
                {isAuthenticated && (
                    <div className="auth-user-info">
                        <div className="user-name">
                            <span>Welcome </span>
                            <h2>{user.given_name}</h2>
                        </div>
                        <img src={user.picture} alt={user.name} />
                    </div>
                )}
            </div>
            <div className="container">
                <div className="row">
                    <div className="nav-wrapper">
                        <div className="row">
                            <div className="col">
                                <img src={rjtLogo} alt="University Logo" className="logo-brand" />
                                <h1 className="pt-1 text-white customHeading">Applied Sciences Alumni</h1>
                                <h5 className="pt-1 text-white text-uppercase">Rajarata University of Sri Lanka</h5>
                            </div>
                        </div>
                        <div className="row">
                            <HeaderNavbar />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header