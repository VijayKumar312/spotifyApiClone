import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import './index.css'

const Header = ({ name }) => {
    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input type="text" placeholder="Search for Artists, Songs" />
            </div>
            <div className='header-right'>
                <Avatar alt='avatar' />
                <h4>{name}</h4>
            </div>
        </div>
    )
}
export default Header