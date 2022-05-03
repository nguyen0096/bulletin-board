import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Bulletin = ({ title, content }) => {
    return (
        <div className="card bb-bulletin" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
            </div>
        </div>
    )
}

Bulletin.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}

export default Bulletin;