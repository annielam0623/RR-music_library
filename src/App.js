import { Fragment, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Gallery } from './components/Gallery'
import { SearchBar } from './components/SearchBar'
import { AlbumView } from './components/albumView'
import { ArtistView } from './components/artistView'


function App() {

  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')
  let [search, setSearch] = useState('The Gorillaz')

  // const API_URL = 


  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=${search}`)
      .then((response) => response.json())
      .then(({ resultCount, results }) => {
        const successMessage = `Successfully fetched ${resultCount} result(s)!`;
        const errorMessage = 'Not found';
        setMessage(resultCount ? successMessage : errorMessage);
        setData(results);
      });
  }, [search]);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <SearchBar setSearch={setSearch} />
              {message}
              <Gallery data={data} />
            </Fragment>
          } />

          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

