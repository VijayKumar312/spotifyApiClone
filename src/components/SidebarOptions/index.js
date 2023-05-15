import './index.css'

const SidebarOptions = ({title, Icon}) => (
    <div className='sidebar-option'>
            {Icon && <Icon className="icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
)
export default SidebarOptions