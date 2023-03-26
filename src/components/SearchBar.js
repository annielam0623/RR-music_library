import { useState, useEffect } from 'react'


export function SearchBar({ setSearch }) {
        const [query, setQuery] = useState('');

        const handleChange = (e) => {
            setQuery(e.target.value)
        }

        useEffect (() => {
            setSearch(query)
        }, [query])

        const handleSubmit = (e) => {
            e.preventDefault()
            setSearch(query)
        }

    return(
        <form onSubmit={{handleSubmit}}>
            <input type="text" value={ query } onChange={handleChange} />
            {/* <button onClick={(e) =>handleSearch(e, term.current.value) }  >submit</button> */}
            <input type="submit" value="Search here" />
            
        </form>
    )
}




