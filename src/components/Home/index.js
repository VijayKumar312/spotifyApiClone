import { useEffect, useContext } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import { DataLayerContext } from '../../App'
import Sidebar from '../Sidebar'
import Body from "../Body"
import Footer from "../Footer";

const spotify = new SpotifyWebApi()

const Home = () => {
    const [{ playlists }, dispatch] = useContext(DataLayerContext)

    useEffect(() => {
        const fetchDetails = async () => {
            const url = window.location.href
            const token = url.match(/access_token=([^&]*)/)[1]
            spotify.setAccessToken(token)       //token
            try {
                await spotify.getMe().then(user => {
                    dispatch({
                        type: 'SET_USER',
                        user: {
                            displayName: user.display_name,
                            id: user.id,
                            images: user.images,
                        },
                    })
                })
                dispatch({
                    type: 'SET_TOKEN',
                    token: token,
                })  //user
                await spotify.getUserPlaylists().then(playlists => {
                    dispatch({
                        type: 'SET_PLAYLISTS',
                        playlists: playlists.items.map(each => ({
                            id: each.id,
                            name: each.name,
                            owner: {
                                id: each.owner.id,
                                displayName: each.owner.display_name,
                            },
                            images: each.images,
                            tracks: each.tracks.total,
                        })),
                    })
                    dispatch({
                        type: 'CURRENT_PLAYLIST',
                        currentPlaylist: playlists.items[0]
                    })  //playlists
                })
            } catch (e) {
                console.log(e)
            }
        }
        fetchDetails()
    }, [])

    if (playlists === []) {
        return <p>Loading...</p>
    }
    return (
        <div style={{ minHeight: '100vh' }}>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Home
