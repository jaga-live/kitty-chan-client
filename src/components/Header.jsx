import GamerHubLogo from '../assets/images/gamershub.gif'

const Header = () => {
    return (
        <div className="header-container">
            <div className="box-1"><img src={GamerHubLogo } width='70px' height='70px'/></div>
            <div className="box-2"><h3>Hello World</h3></div>
            <div className="box-3"><h3>Hello World</h3></div>
        </div>
    )
}

export default Header