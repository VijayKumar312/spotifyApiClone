import { useContext, useState, useEffect } from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Avatar } from '@mui/material';

import SpotifyWebApi from 'spotify-web-api-js'
import { DataLayerContext } from '../../App'
import './index.css'
import Header from './header'
import Track from './track';

const spotify = new SpotifyWebApi()
const Body = () => {
    const [playlistTracks, setPlaylistTracks] = useState('')
    const [trackNum, setTrackNum] = useState(0)
    const [{ selectedPlaylistId }, dispatch] = useContext(DataLayerContext)
    useEffect(() => {
        const getTracks = async () => {
            try {
                const response = await spotify.getPlaylist(selectedPlaylistId)

                const updatedPlaylist = {
                    id: response.id,
                    name: response.name,
                    owner: {
                        name: response.owner.display_name,
                        id: response.owner.id,
                    },
                    description: response.description,
                    images: response.images,
                    totalTracks: response.tracks.total,
                    tracks: response.tracks.items.map(each => ({
                        track: {
                            id: each.track.id,
                            name: each.track.name,
                            trackNumber: each.track.track_number,
                            addedAt: each.added_at,
                            duration: each.track.duration_ms,
                            previewUrl: each.track.preview_url,
                            artists: each.track.artists.map(artist => ({
                                id: artist.id,
                                name: artist.name,
                            })),
                            album: {
                                id: each.track.album.id,
                                name: each.track.album.name,
                                releaseDate: each.track.album.release_date,
                                totalTracks: each.track.album.total_tracks,
                                images: each.track.album.images.map(image => ({
                                    url: image.url,
                                }))
                            }
                        },
                    })),
                }
                setPlaylistTracks(updatedPlaylist)

            } catch (e) {
                console.log(e)
            }
        }
        getTracks()
    }, [selectedPlaylistId])

    if (!playlistTracks) {
        return <div>Loading...</div>
    }
    return (
        <div className="body">
            <div className='playlist-header'>
                <Header name={playlistTracks.owner.name} />
                <div className='body-info'>
                    <img src={playlistTracks.images[0].url} alt="discover" />
                    <div className='body-infoText'>
                        <strong>PLAYLIST</strong>
                        <h2>{playlistTracks.name}</h2>
                        <div style={{ display: 'flex' }}>
                            <p>{playlistTracks.owner.name} </p>
                            <p> -{playlistTracks.totalTracks} songs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='playlist-section'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PlayCircleIcon style={{ color: '#1DB954', fontSize: '90px' }} />
                    <FavoriteIcon style={{ fontSize: '60px' }} className="love" />
                </div>
                <div className="playlist-list">
                    <p style={{ flex: '0.4' }}><span style={{ marginRight: '13px' }}>#</span>TITLE</p>
                    <p style={{ flex: '0.3' }}>ALBUM</p>
                    <p style={{ flex: '0.2' }}>DATE ADDED</p>
                    <AccessTimeIcon style={{ flex: '0.1' }} />
                </div>
            </div>

            <ul className='playlist-tracks'>
                {
                    playlistTracks.tracks.map(each => {
                        return (
                            <Track key={each.track.id} trackDetails={each} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Body