import style from './RegisterOper.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories, registerOperation } from '../../redux/actions';
import ReactDOM from 'react-dom';







export default function RegisterOper ({closePortal}) {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)

    const [operation, setOperation] = useState({
        concept: '',
        mount: '',
        date: '',
        type: '',
        userId: 'aac191ad-bb5a-4901-a1af-f3265bf31500',
        categoryId: ''
    })

    const handleConcept = (e) => {
        setOperation({
            ...operation,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const submitForm = (e) => {
        e.preventDefault()
        console.log(operation)
        dispatch(registerOperation(operation))
    }

    return ReactDOM.createPortal(
        <div className={style.backgroundCont}>
            <div className={style.contRegisterOper}>
                <form onSubmit={submitForm} className={style.form}>
                    <input name='concept' type="text" placeholder='concept' onChange={handleConcept}/>
                    <input name='mount' type="number" placeholder='mount' onChange={handleConcept} />
                    <input name='date' type="date" placeholder='date' onChange={handleConcept} />
                    <select name="type" id="type" onChange={handleConcept}>
                        <option value="none" hidden>Select an option</option>
                        <option value="egreso">egreso</option>
                        <option value="ingreso">ingreso</option>
                    </select>
                    <select name="categoryId" id="category" onChange={handleConcept}>
                        <option value="none" hidden>Select an option</option>
                        {
                            categories.length > 0 && categories.map((val, index )=> {
                                return (
                                    <option key={index} value={val.id}>{val.name}</option>
                                )
                            })
                        }
                    </select>
                    <input type="submit" id="inputButton" value='Add' disabled />
                </form>
                <button className={style.cancelButton} onClick={closePortal}>Cancel</button>
            </div>
        </div>,
        document.getElementById('portals')
    )
}