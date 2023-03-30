import { Fragment, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Gallery } from './components/Gallery'
import { SearchBar } from './components/SearchBar'
import { AlbumView } from './components/albumView'
import { ArtistView } from './components/artistView'
import { Nav } from './components/Nav'
import './App.css'


function App() {

  let [data, setData] = useState([])
  let [message, setMessage] = useState('')
  let [search, setSearch] = useState('')


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
    <div className='App'>
      <BrowserRouter>
      <Nav />
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

