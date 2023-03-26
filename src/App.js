import { useState, useEffect, useRef } from 'react'
import { Gallery } from './components/Gallery'
import { SearchBar } from './components/SearchBar'
import { Wrapper } from './components/Wrapper'
import { DataContext } from './context/DataContext'
import {SearchContext } from './context/SearchContext'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'





function App() {
  let [DataContext, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')
  
  let numberRef = useRef[0];
  let inputRef = useRef();



  
  const fetchData=(search) => {
    document.title = inputRef.value
		fetch(`https://itunes.apple.com/search?term=${search}`)
			.then((response) => response.json())
			.then(({resultCount, results}) => {
				const successMessage = `Successfully fetched ${resultCount} result(s)!`;
				const errorMessage = 'Not found';
				setMessage(resultCount ? successMessage : errorMessage);
				setData(results);
			});
	}

 
return (
  <div>
    <SearchContext.provider value={{ref: inputRef, fetchData}} >
      <SearchBar  />
      </SearchContext.provider>
      {message}
      <DataContext.provider value={data}>
      <Wrapper/>
      </DataContext.provider>
      <Gallery  />
  </div>
)
}

export default App


