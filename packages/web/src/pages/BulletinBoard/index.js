import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Bulletin from '../../components/Bulletin';
import { BULLETIN_FETCH_REQUESTED } from './saga';

import './style.css';

const BulletinBoard = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: BULLETIN_FETCH_REQUESTED })
    }, [])

    const bulletins = useSelector((state) => state.bulletinReducer.bulletins) || [];

    return (
        <div className='bb-bulletin-board container-fluid'>
            {
                bulletins.map((b, i) => <Bulletin key={i} title={b.title} content={b.content} />)
            }
        </div>
    )
}

export default BulletinBoard;