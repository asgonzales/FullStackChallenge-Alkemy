import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getResults } from '../../redux/actions';
import style from './SearchBar.module.css';








export default function SearchBar () {
    const dispatch = useDispatch()
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')

    const categories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const handleType = (e) => {
        setType(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    useEffect(() => {
        dispatch(getResults(type, category))
    }, [type, category])


    return (
        <div className={style.contSearchBar}>
            <h1>Filter by</h1>
            <div>
                <select name="type" id="type" onChange={handleType}>
                    <option hidden>Type</option>
                    <option value="ingreso">ingreso</option>
                    <option value="egreso">egreso</option>
                </select>
                <select name="category" id="category" onChange={handleCategory}>
                    <option hidden>Category</option>
                    {
                        categories.length > 0 && categories.map((val, index) => {
                            return(
                                <option key={index} value={val.id}>{val.name}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}