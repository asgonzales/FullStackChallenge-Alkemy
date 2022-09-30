import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getResults } from '../../redux/actions';
import style from './SearchBar.module.css';








export default function SearchBar () {
    const dispatch = useDispatch()
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const [concept, setConcept] = useState('')
    const [mount, setMount] = useState({
        min: '',
        max: ''
    })
    const [date, setDate] = useState({
        min: '',
        max: ''
    })

    const categories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories(type))
    }, [dispatch, type])

    const handleType = (e) => {
        setType(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleConcept = (e) => {
        setConcept(e.target.value)
    }
    const handleMount = (e) => {
        setMount({
            ...mount,
            [e.target.name]: e.target.value
        })
    }
    const handleDate = (e) => {
        setDate({
            ...date,
            [e.target.name]: e.target.value
        })
    }


    const search = () => {
        dispatch(getResults(type, category, concept, mount.min, mount.max, date.min, date.max))
    }
    useEffect(() => {
        dispatch(getResults(type, category, concept, mount.min, mount.max, date.min, date.max))
    }, [type, category, dispatch])


    return (
        <div className={style.contSearchBar}>
            <h1>Filter by</h1>
            <div>
                <input type="text" name='concept' placeholder='Concept...' onChange={handleConcept} />
                <button onClick={search} >Search</button>
            </div>
            <div>
                <select name="type" id="type" onChange={handleType}>
                    <option hidden>Type</option>
                    <option value=''>Todos</option>
                    <option value="ingreso">ingreso</option>
                    <option value="egreso">egreso</option>
                </select>
                <select name="category" id="category" onChange={handleCategory} disabled={type===''?true:false} >
                    <option hidden>Category</option>
                    <option value=''>Todos</option>
                    {
                        categories.length > 0 && categories.map((val, index) => {
                            return(
                                <option key={index} value={val.id}>{val.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <input type="number" name='min' placeholder='Min Mount' onChange={handleMount} />
                <input type="number" name='max' placeholder='Max Mount' onChange={handleMount} />
            </div>
            <div>
                <input type="date" name='min' onChange={handleDate} />
                <input type="date" name='max' onChange={handleDate} />
            </div>
        </div>
    )
}