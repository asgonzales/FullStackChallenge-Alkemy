import style from './EditOrDelete.module.css';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import RegisterOper from '../RegisterOper/RegisterOper';
import { useDispatch } from 'react-redux';
import { deleteOperation } from '../../redux/actions';




export default function EditOrDelete ({handlePortal, loadOper}) {
    const dispatch = useDispatch()

    const [editPortal, setEditPortal] = useState(false)

    const handleNewPortal = () => {
        setEditPortal(!editPortal)
    }


    const deleteOper = () => {
        console.log(loadOper)
        dispatch(deleteOperation(loadOper.id, handlePortal))
    }

    return ReactDOM.createPortal(
        <div className={style.backgroundEditOrDelete}>
            <div className={style.contEditOrDelete}>
                <div>
                    <button onClick={deleteOper}>Delete</button>
                    <button onClick={handleNewPortal}>Edit</button>
                </div>
                    <button onClick={handlePortal}>Close</button>
            </div>
            {
                editPortal ?
                <RegisterOper loadOper={loadOper} closePortal={handleNewPortal} />
                : <></>
            }
        </div>,
        document.getElementById('portals')
    )
}