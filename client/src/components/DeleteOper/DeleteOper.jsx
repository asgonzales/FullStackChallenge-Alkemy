import { useDispatch } from 'react-redux';
import { deleteOperation } from '../../redux/actions';
import style from './DeleteOper.module.css';








export default function DeleteOper ({ openPortal, medPortal, operation }) {
    const dispatch = useDispatch()


    const deleteOper = () => {
        dispatch(deleteOperation(operation.id, openPortal))
        medPortal()
    }

    return (
        <div className={style.backDeleteOper}>
            <div className={style.contDeleteOper}>
                <div>
                    <h2>Do you want to delete this operation?</h2>
                </div>
                <div>
                    <button onClick={openPortal}>No</button>
                    <button onClick={deleteOper}>Yes</button>
                </div>
            </div>
        </div>
    )
}