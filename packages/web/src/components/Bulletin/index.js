import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Bulletin = ({ title, content, onDelete, onEdit }) => {
    return (
        <div className="card bb-bulletin" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title ">{title}</h5>
                <p className="card-text">{content}</p>
                <button className="btn btn-primary" onClick={onEdit}>Edit</button>
                <button className="btn btn-danger" onClick={onDelete}>Delete</button>
            </div>
        </div>
    )
}

Bulletin.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
}

export default Bulletin;