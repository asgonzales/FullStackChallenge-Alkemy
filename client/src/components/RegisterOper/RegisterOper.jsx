import style from './RegisterOper.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories, registerOperation, updateOperation } from '../../redux/actions';
import ReactDOM from 'react-dom';







export default function RegisterOper ({closePortal, loadOper}) {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const date = new Date().toLocaleDateString('en-ca')

    const [operation, setOperation] = useState({
        concept: loadOper?.concept || '',
        mount: loadOper?.mount || '',
        date: loadOper?.date || date,
        type: loadOper?.type || '',
        categoryId: loadOper?.Category.id || ''
    })
    const [errors, setErrors] = useState({
        mount: true,
        date: false,
        type: true,
        categoryId: true
    })

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const handleOper = (e) => {
        setOperation({
            ...operation,
            [e.target.name]: e.target.value
        })
        switch (e.target.name) {
            case 'mount': setErrors({ ...errors, mount: e.target.value < 0 ? true : false }); break;
            case 'date': setErrors({ ...errors, date: e.target.value > date ? true : false }); break;
            case 'type': setErrors({ ...errors, type: false }); break;
            case 'categoryId': setErrors({ ...errors, categoryId: false }); break;
            default: break;
        }
    }
    useEffect(() => {
        console.log(!errors.mount)
        if((!errors.mount && !errors.date && !errors.type && !errors.categoryId) || loadOper) document.getElementById('inputButton').disabled = false;
        else document.getElementById('inputButton').disabled = true; 
    }, [operation.concept, operation.mount, operation.date, operation.type, operation.categoryId, loadOper])


    const submitForm = (e) => {
        e.preventDefault()
        if(loadOper) dispatch(updateOperation({ ...operation, operationId: loadOper.id}))
        else dispatch(registerOperation(operation))
    }

    return ReactDOM.createPortal(
        <div className={style.backgroundCont}>
            <div className={style.contRegisterOper}>
                <form onSubmit={submitForm} className={style.form}>
                    <input className={style.input} name='concept' type="text" placeholder='concept' onChange={handleOper} value={operation.concept} />
                    <input className={style.input} name='mount' type="number" placeholder='mount' onChange={handleOper} value={operation.mount} />
                    <input className={style.input} name='date' type="date" placeholder='date' onChange={handleOper} value={operation.date} max={date} />
                    <select className={style.input} name="type" id="type" onChange={handleOper} value={operation.type} disabled={loadOper?true:false}>
                        <option value="none" hidden>Select a type</option>
                        <option value="egreso">egreso</option>
                        <option value="ingreso">ingreso</option>
                    </select>
                    <select className={style.input} name="categoryId" id="category" onChange={handleOper} value={operation.categoryId}>
                        <option value="none" hidden>Select a category</option>
                        {
                            categories.length > 0 && categories.map((val, index )=> {
                                return (
                                    <option key={index} value={val.id}>{val.name}</option>
                                )
                            })
                        }
                    </select>
                    <input className={style.submitButton} type="submit" id="inputButton" value={loadOper?'Update':'Add'} disabled />
                </form>
                <button className={style.cancelButton} onClick={closePortal}>Cancel</button>
            </div>
        </div>,
        document.getElementById('portals')
    )
}