import './index.css'
import { loginUrl } from '../../spotify'

const Login = () => (
    <div className="login">
        <img src="spotifyLogin.jpg" alt="spotify-logo" />
        <a href={loginUrl}>CONNECT TO SPOTIFY</a>
    </div>
)

export default Login