import { useContext } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import './index.css'
import SidebarOptions from '../SidebarOptions'
import { DataLayerContext } from '../../App'

const Sidebar = () => {
    const [{ playlists, tracks }, dispatch] = useContext(DataLayerContext)

    if (tracks === []) {
        return <div>Loading...</div>
    }
    return (
        <div className='sidebar'>
            <img src='spotify2019-830x350.jpg' className="sidebar-logo" alt="sidebar-logo" />
            <SidebarOptions Icon={HomeIcon} title="Home" />
            <SidebarOptions Icon={SearchIcon} title="Search" />
            <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className='sidebar-title'>PLAYLIST</strong>
            <hr />
            <ul className='playlist-container'>
                {
                    playlists?.map(playlist => (
                        <li key={playlist.id}><SidebarOptions title={playlist.name} /></li>
                    ))
                }
            </ul>
        </div>
    )

}
export default Sidebar