import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./sample.css"

function MyComponent() {
    return (
        <div className='sample'>
            <div style={{ width: '18%', height: '100%', background: 'black', display: 'flex', alignItems: 'center', overflow: 'hiddden' }}>
                <img src='' alt="track" style={{ height: '100%', width: '40px' }} />
                <p>Song Name</p>
            </div>
            <div style={{ width: '82%', paddingBottom: '16px', color: 'white' }}>
                <AudioPlayer
                    src='https://p.scdn.co/mp3-preview/80bcc01a73fb09cd8cc7535bffbd93e2acf742f4?cid=c3cac9a72abc48cbbcb20fc2de8673b6'
                    controls
                    layout='stacked-reverse'
                    className='audio-player'
                    style={{ background: 'inherit', color: 'blue', width: '100%' }}
                />
            </div>
        </div>
    );
}
export default MyComponent









// import React, { useEffect } from 'react'
// import Player from 'react-material-music-player'
// import { Track, PlayerInterface } from 'react-material-music-player'

// // import 'react-material-music-player/dist/index.css'

// new Track(
//     {
//         ID: 1, // unique ID used in shuffling and sorting
//         coverArt: 'cover',
//         title: 'title',
//         artist: 'artist',
//         source: 'https://p.scdn.co/mp3-preview/80bcc01a73fb09cd8cc7535bffbd93e2acf742f4?cid=c3cac9a72abc48cbbcb20fc2de8673b6' // url to music file
//     })

// function MyAudioPlayer() {
//     useEffect(() => {
//         PlayerInterface.play(Track)
//     }, [])
//     return (
//         <div>
//             <Player disableDrawer />
//         </div>
//     );
// }

// export default MyAudioPlayer
