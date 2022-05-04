import React from 'react';
import { useDispatch } from 'react-redux';

import { setFormOpen } from 'pages/BulletinBoard/reducer';

const NavBar = () => {
    const dispatch = useDispatch();

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Bulletin board</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <form className="container-fluid justify-content-start">
                            <button className="btn btn-sm btn-outline-primary" type="button" onClick={() => dispatch(setFormOpen({ isOpen: true }))}> Add new bulletin</button>
                        </form>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavBar;