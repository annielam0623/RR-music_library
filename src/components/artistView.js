// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'



export function ArtistView() {
    //should be a list of artist's albums.
    // Need to pass the artistId, which we have access to
    // in the address of the route

    const [albums, setAlbums] = useState([])    
    const [artistData, setArtistData] = useState({})    
    const {id} = useParams()
    //returns (id: 567072)

    useEffect(() => {
        fetch(`http://localhost:4000/album/${id}`)
            .then((response) => response.json())
            .then(({results}) => {
                setArtistData(results.shift());
                setAlbums(results);
            });
    },  [id])

   
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>{artistData.artistName}</h1>
            <h2>{artistData.primaryGenreName}</h2>
            <ul>
                {albums.map((album) => {
                    return
                    <Link to={`/album/${album.collectionId}`}>
                     <li>{album.collectionName}</li>         
                    </Link>
                 })}
            </ul>
        </div>
    )
}



