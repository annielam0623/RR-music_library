import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';


export function SearchBar(setSearch) {

        const [query, setQuery] = useState('')

        const handleChange = (e) => {
            setQuery(e.target.value)
       }

        const handleSubmit = (e) => {
            e.preventDefault()
            setSearch(query)
        }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} placeholder="Search Music!"/>
            <Button value="search">Search</Button>
        </form>
    )
}




