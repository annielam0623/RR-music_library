import { useState, useEffect, Suspense } from 'react'
import { Gallery } from './components/Gallery'
import { SearchBar } from './components/SearchBar'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import { createResource as fetchData } from './helper'
import { Spinner } from 'react-bootstrap';






function App() {

  let [data, setData] = useState(null)
  let [message, setMessage] = useState('Search for Music!')
  let [search, setSearch] = useState ('The Gorillaz')

  // const API_URL = 

  
  useEffect(() => {
      if (searchTerm) {
          setData(fetchData(searchTerm))
      }
    }, [searchTerm])



	// 	fetch(`https://itunes.apple.com/search?term=${search}`)
	// 		.then((response) => response.json())
	// 		.then(({resultCount, results}) => {
	// 			const successMessage = `Successfully fetched ${resultCount} result(s)!`;
	// 			const errorMessage = 'Not found';
	// 			setMessage(resultCount ? successMessage : errorMessage);
	// 			setData(results);
	// 		});
	// }, [search]);

 
  const renderGallery = () => {
    if(data){
        return (
            <Suspense fallback={<Spinner />}>
                <Gallery data={data} />
            </Suspense>
        )
    }
}

return (
  <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery()}
  </div>
)
}

export default App


