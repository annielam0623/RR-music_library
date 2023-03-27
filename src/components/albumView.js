// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function AlbumView() {
    const [ albumData, setAlbumData ] = useState({})
    const [songs, setSongs] = useParams([]);
    const { id } = useParams()



    useEffect(() => {
        fetch(`http://localhost:4000/song/${id}`)
            .then(Response => Response.json() )
            .then(({result}) => {
                setAlbumData{result.shift()}
                setSongs{results}
            } )
    })

    return (
        <div>
            <Link to="/"><botton>Home</botton></Link>
            <h1>{albumtData.collectionName}</h1>
            <Link to={`/../artist/${albumData.artistId}`} >
             <h2>{albumtData.artistName}</h2>
            </Link>
            <h2>{albumtData.primaryGenreName}</h2>
            <ul>
                {songs.map((song) => {
                <li>
                    {song.trackName}
                </li>
                })}
            </ul>
        </div>
    )
}


