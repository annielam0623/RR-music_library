import { useState, useEffect,  useContext } from 'react';
import { SearchContext } from '../context/SearchContext';


export function SearchBar(props) {

        const { ref, fetchData } = useContext(SearchContext);

        // const [query, setQuery] = useState('');
        // // useEffect (() => {
        //     setSearch(query)
        // }, [query])

        const handleSubmit = (e) => {
            e.preventDefault()
            fetchData(ref.current.value)
            
        }

    return(
        <form onSubmit={{handleSubmit}}>
            <input type="text" ref={ref} />
            {/* <button onClick={(e) =>handleSearch(e, term.current.value) }  >submit</button> */}
            <input type="submit" value="Search here" />
            
        </form>
    )
}




