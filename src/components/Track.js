import { React } from 'react';

export default function Track ({ searchResult, handleAddedTracks }) {

const artist = searchResult.artists[0].name;
const album = searchResult.album.name;
const track = searchResult.name;
const uri = searchResult.uri;
const id = searchResult.id;

    return (
        <div className='container'>
            <div className='info'>
                <p>{track} by {artist}</p>
                <p>{album}</p>
            </div>
            <p id='add' onClick={() => {handleAddedTracks(artist, album, track, uri, id)} }>+</p>
        </div>
    )
};