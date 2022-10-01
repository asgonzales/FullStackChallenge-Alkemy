import style from './EditOrDelete.module.css';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import RegisterOper from '../RegisterOper/RegisterOper';
import { useDispatch } from 'react-redux';
import { deleteOperation } from '../../redux/actions';
import DeleteOper from '../DeleteOper/DeleteOper';




export default function EditOrDelete ({handlePortal, loadOper}) {
    const dispatch = useDispatch()

    const [editPortal, setEditPortal] = useState(false)
    const [deletePortal, setDeletePortal] = useState(false)

    const handleNewPortal = () => {
        setEditPortal(!editPortal)
    }


    const handleDeletePortal = () => {
        setDeletePortal(!deletePortal)
    }

    return ReactDOM.createPortal(
        <div className={style.backgroundEditOrDelete}>
            <div className={style.contEditOrDelete}>
                <div>
                    <button className={style.deleteButton} onClick={handleDeletePortal}>Delete</button>
                    <button className={style.editButton} onClick={handleNewPortal}>Edit</button>
                </div>
                    <button onClick={handlePortal}>Close</button>
            </div>
            {
                deletePortal ? 
                <DeleteOper openPortal={handleDeletePortal} medPortal={handlePortal} operation={loadOper} />
                : <></>
            }
            {
                editPortal ?
                <RegisterOper loadOper={loadOper} closePortal={handleNewPortal} />
                : <></>
            }
        </div>,
        document.getElementById('portals')
    )
}