import { useContext, useState, useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import './index.css'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { DataLayerContext } from '../../App';
const spotify = new SpotifyWebApi()

const Footer = () => {
    const [{ track }, dispatch] = useContext(DataLayerContext)
    const [trackDetails, setTrackDetails] = useState('')
    console.log(1, track)
    useEffect(() => {
        const loadTrack = async () => {
            try {
                const song = await spotify.getTrack(track?.id)
                console.log(song)
                const updatedSong = {
                    id: song.id,
                    name: song.name,
                    previewUrl: song.preview_url,
                    duration: song.duration_ms,
                    album: {
                        id: song.album.id,
                        name: song.album.name,
                        images: song.album.images,
                    },
                    artists: song.album.artists.map(each => ({
                        id: each.id,
                        name: each.name,
                    }))
                }
                setTrackDetails(updatedSong)
            }
            catch (e) {
                console.log(e)
            }
        }
        loadTrack()
    }, [])
    return (
        <div className='footer'>
            <div className='track-details'>
                <img className='track-image' src={track.album.images !== [] ? track.album.images[0].url : ''} alt="track" />
                <p className='track-name'>{track && track.name}</p>
            </div>
            <div style={{ width: '82%', paddingBottom: '10px' }}>
                <AudioPlayer
                    src={track ? track.previewUrl : ''}
                    controls
                    autoPlayAfterSrcChange={false}
                    layout='stacked-reverse'
                    className='audio-player'
                    style={{ background: 'inherit', width: '100%' }}
                />
            </div>
        </div>
    )
}
export default Footer