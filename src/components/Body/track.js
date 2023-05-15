import { useContext, useState, useEffect } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { DataLayerContext } from '../../App';
import './index.css'

const Track = ({ trackDetails }) => {
    const { track } = trackDetails
    const { trackNumber, album, name, artists, duration, id, previewUrl } = track
    const [content, setContent] = useState(trackNumber)
    const [trackNum, setTrackNum] = useState(0)

    const [{ playerState }, dispatch] = useContext(DataLayerContext)

    useEffect(() => {
        setTrackNum(trackNum + 1)
    }, [trackDetails])

    const onPlay = () => {
        dispatch({
            type: 'SET_TRACK',
            track: {
                id,
                name,
                previewUrl,
                album,
            }
        })
        dispatch({
            type: 'SET_PLAYERSTATE',
            playerState: !playerState,
        })
    }
    return (
        <li className='track'
            onMouseEnter={() => setContent(<PlayArrowIcon onClick={onPlay} className="play-icon" />)}
            onMouseLeave={() => setContent(trackNum)}
        >
            <div style={{ display: 'flex', flex: '0.4', alignItems: 'center' }}>
                <p className='icon-box'>{content}</p>
                <img src={album.images[0]?.url} alt="album" className="trackImg" />
                <div style={{ textAlign: 'start' }}>
                    <p style={{ fontSize: '18px', fontWeight: '600' }}>{name}</p>
                    <ul className='artist-container'>
                        {artists.map((each) => (
                            <li key={each.id} style={{ marginRight: '3px' }}>{each.name},</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div style={{ flex: 0.3, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', }}>
                <p>{album.name}</p>
            </div>
            <p style={{ flex: '0.2' }}>date</p>
            <p style={{ flex: '0.1' }}>{duration}</p>
        </li>
    )
}
export default Track
