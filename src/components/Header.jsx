import { Link } from 'react-router-dom'
import GamerHubLogo from '../assets/images/gamershub.gif'

const Header = () => {
    return (
      <div className="header-container">
        <div className="box-1">
          <img src={GamerHubLogo} width="60px" height="60px" />
        </div>
        <div className="box-2">
          <Link to="/text" className="link">
            <h3>Message</h3>
          </Link>
        </div>
        <div className="box-3">
          <Link to="/dashboard" className="link">
            <h3>Dashboard</h3>
          </Link>
        </div>
      </div>
    );
}

export default Header