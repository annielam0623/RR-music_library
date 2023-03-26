import { useState, useEffect } from 'react'
import { Gallery } from './components/Gallery'
import { SearchBar } from './components/SearchBar'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'





function App() {

  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')
  let [search, setSearch] = useState ('The Gorillaz')

  // const API_URL = 

  
  useEffect(() => {
		fetch(`https://itunes.apple.com/search?term=${search}`)
			.then((response) => response.json())
			.then(({resultCount, results}) => {
				const successMessage = `Successfully fetched ${resultCount} result(s)!`;
				const errorMessage = 'Not found';
				setMessage(resultCount ? successMessage : errorMessage);
				setData(results);
			});
	}, [search]);

 
return (
  <div>
      <SearchBar setSearch={ setSearch} />
      {message}
      <Gallery data={data} />
  </div>
)
}

export default App


