import { createContext } from 'react'


export const SearchContext = createContext ({
        Ref: { current: undefined},
        setSearch: () => {},
        fetchData: () => {}

})