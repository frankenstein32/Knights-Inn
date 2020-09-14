import React from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{

    state = {
        isOpened: false
    }

    handleToggle = () => {
        console.log('Now: ', this.state.isOpened)
        this.setState({isOpened: !this.state.isOpened});
    }

    render(){
        return(
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>

                    </div>
                    <ul className={this.state.isOpened ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/" >Home</Link>
                            <Link to="/rooms/" >Rooms</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        );
    }
}

export default Navbar;