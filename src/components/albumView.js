// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export function AlbumView() {
    const [ albumData, setAlbumData ] = useState([])
    const [songs, setSongs] = useParams([]);
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/song/${id}`)
            .then((response) => response.json() )
            .then(({results}) => {
                setAlbumData(results.shift())
                setSongs(results)
            } )
    })

    return (
        <div>
            <Link to="/"><botton>Home</botton></Link>
            <h1>{albumData.collectionName}</h1>
            <h2><Link to={`/../artist/${albumData.artistId}`} >
            {albumData.artistName}
            </Link></h2>
            <h2>{albumData.primaryGenreName}</h2>
            <ul>
                {songs.map((song) => {
                    return
                <li>
                    {song.trackName}
                </li>
                })}
            </ul>
        </div>
    )
}


 