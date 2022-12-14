import { useState } from 'react';
import EditOrDelete from '../EditOrDelete/EditOrDelete';
import style from './CardOper.module.css';








export default function CardOper ({oper, edit}) {
    const [openEdit, setOpenEdit] = useState(false)

    const editOper = () => {
        setOpenEdit(!openEdit)
    }


    return (
        <div className={style.contCardOper}>
            <div className={style.visibleInfo}>
                {
                    edit? 
                        <div className={style.editDiv}>
                            <button onClick={editOper}>Edit</button>
                        </div>
                    :<></>
                }
                <div className={style.dataDiv}>
                    <input className={style.conceptInput} type="text" value={oper.concept} readOnly />
                    <input className={style.dateInput} type="text" value={oper.date} readOnly />
                </div>
                <div className={style.mountDiv}>
                    <input className={oper.type==='egreso'?style.expenses:style.income} type='text' value={oper.type==='egreso'?`- $${Number(oper.mount).toLocaleString('en-ca')}`:`+ $${Number(oper.mount).toLocaleString('en-ca')}`} readOnly />
                </div>
            </div>
            <div className={style.hideInfo}>
                <label>Type: </label>
                <input type='text' value={oper.type} readOnly />
                <label>Category: </label>
                <input type='text' value={oper.Category?.name} readOnly />
            </div>
            {
                openEdit?
                <EditOrDelete loadOper={oper} handlePortal={editOper} />
                : <></>
            }
        </div>
    )
}