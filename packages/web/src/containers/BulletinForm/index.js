import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Portal from 'components/Portal';

import './style.css';

const BulletinForm = ({ initFormData, onClose, onSave }) => {
    const [formData, setFormData] = useState(initFormData || {});

    const handleFieldChange = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value })
    }

    return (
        <Portal>
            <div className="modal" id="bb-bulletin-modal" role="dialog">
                <div className="modal-dialog" role="document" id="bb-bulletin-modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="bb-bulletin-form-title">Add new bulletin</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="bb-bulletin-form-title">Title</label>
                                    <input type="text" className="form-control" id="title" defaultValue={formData.title} onChange={(e) => handleFieldChange(e.target.id, e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bb-bulletin-form-content">Content</label>
                                    <textarea type="text" className="form-control" id="content" defaultValue={formData.content} rows={3} onChange={(e) => handleFieldChange(e.target.id, e.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => onSave(formData)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

BulletinForm.propTypes = {
    initFormData: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
}

export default BulletinForm;