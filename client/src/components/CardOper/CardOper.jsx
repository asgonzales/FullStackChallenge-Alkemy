import { useState } from 'react';
import EditOrDelete from '../EditOrDelete/EditOrDelete';
import RegisterOper from '../RegisterOper/RegisterOper';
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
                    {/* <div className={style.infoConcept}> */}
                        <input className={style.conceptInput} type="text" value={oper.concept} readOnly />
                    {/* </div> */}
                    <input className={style.dateInput} type="text" value={oper.date} readOnly />
                </div>
                <div className={style.mountDiv}>
                    <input className={oper.type==='egreso'?style.expenses:style.income} type='text' value={oper.type==='egreso'?`- $${Number(oper.mount).toLocaleString('en-ca')}`:`+ $${Number(oper.mount).toLocaleString('en-ca')}`} readOnly />
                </div>
            </div>
            <div className={style.hideInfo}>
                {/* <div> */}
                    <label>Type: </label>
                    <input type='text' value={oper.type} readOnly />
                {/* </div>
                <div> */}
                    <label>Category: </label>
                    <input type='text' value={oper.Category?.name} readOnly />
                {/* </div> */}
            </div>
            {
                openEdit?
                // <RegisterOper loadOper={oper} closePortal={editOper}/>
                <EditOrDelete loadOper={oper} handlePortal={editOper} />
                : <></>
            }
        </div>
    )
}