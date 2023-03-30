import { useState } from "react";
import { Link } from 'react-router-dom'

export function GalleryItem({ song }) {
    const {
        trackName,
        collectionId,
        collectionName,
        primaryGereName,
        releaseDate,
        artworkUrl100,
        artistName,
        artistId
    } = song; 


    let [isExpanded, setIsExpanded] = useState (false)

       const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${song.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }
    const handleClick = (e) => {
        setIsExpanded(!isExpanded)
    }

    const simpleView = (
        <div style={ simpleStyle }  onClick={handleClick}>            
             <h3>{ trackName }</h3>
             <h4>{ artistName }</h4>
        </div>
    )

    const detailView = (
        <div style={ detailStyle } onClick={ handleClick }>
            <h2>{ trackName }</h2>
            <h3>
                <Link to={`/artist/${artistId}`} >
                    {artistName}
                </Link>
            </h3>
            <h3>
                <Link to={`/album/${collectionId}`}>
                    { collectionName }
                </Link>
            </h3>
            <h4>{ primaryGereName }</h4>
            <h4>{ releaseDate }</h4>
        </div>
   )


    return (
        <div style={{'display' : 'inline-block'}} >
            {isExpanded ? detailView : simpleView }
        </div>
    )
}

