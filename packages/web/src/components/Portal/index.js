import React from 'react';
import * as ReactDOM from 'react-dom';

import './style.css';

const Portal = ({ children }) => {
    return ReactDOM.createPortal(
        <div id="bb-portal">
            {children}
        </div>,
        document.getElementById('modal-root')
    )
}

export default Portal;