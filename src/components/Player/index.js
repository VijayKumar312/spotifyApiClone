import Body from "../Body";
import Sidebar from '../Sidebar'
import Footer from "../Footer";

const Player =()=>(
    <div>
        <div style={{display: 'flex'}}>
            <Sidebar />
            <Body />
        </div>
        <Footer />
    </div>

)
export default Player