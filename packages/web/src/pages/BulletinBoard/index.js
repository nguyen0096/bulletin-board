import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Bulletin from 'components/Bulletin';
import BulletinForm from 'containers/BulletinForm';
import { BULLETIN_DELETE_REQUESTED, BULLETIN_FETCH_REQUESTED, BULLETIN_PATCH_REQUESTED, BULLETIN_POST_REQUESTED } from './saga';

import './style.css';
import { setFormOpen } from './reducer';

const BulletinBoard = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: BULLETIN_FETCH_REQUESTED })
    }, [])

    const handleSaveForm = (formData) => {
        if (formData.id) {
            dispatch({ type: BULLETIN_PATCH_REQUESTED, formData })
        } else {
            dispatch({ type: BULLETIN_POST_REQUESTED, formData })
        }
    }

    const handleDeleteBulletin = (bulletinId) => {
        dispatch({ type: BULLETIN_DELETE_REQUESTED, bulletinId })
    }

    const bulletins = useSelector((state) => state.bulletinReducer.bulletins) || [];
    const isOpen = useSelector((state) => state.bulletinReducer.isFormOpen);
    const isEdit = useSelector((state) => state.bulletinReducer.isFormEdit);
    const editId = useSelector((state) => state.bulletinReducer.editId);
    const initFormData = isEdit && editId ? bulletins.find(b => b.id == editId) : null;

    return (
        <>
            {isOpen && <BulletinForm initFormData={initFormData} onClose={() => dispatch(setFormOpen(false))} onSave={handleSaveForm} />}
            <div className='bb-bulletin-board container-fluid'>
                {bulletins.map((b, i) =>
                    <Bulletin key={i} title={b.title}
                        content={b.content}
                        onDelete={() => handleDeleteBulletin(b.id)}
                        onEdit={() => dispatch(setFormOpen({ isOpen: true, isEdit: true, editId: b.id }))}
                    />)}
            </div>
        </>
    )
}

export default BulletinBoard;