import React from 'react';
import { faHashtag, faBars, faHome, faUserAstronaut, faTerminal, faAtom, faLaptopCode, faFolder, faFileInvoice  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidenav = this.toggleSidenav.bind(this);
    this.state = {
      toggleSidebar: 'active',
    };
  }

  toggleSidenav() {
    const { toggleSidebar } = this.state;
    const css = (toggleSidebar === 'active') ? '' : 'active';
    this.setState({
      toggleSidebar: css,
    });
  }

  render() {
    const { toggleSidebar } = this.state;
    return (
      <div>
        <button
          type="button"
          id="sidebarCollapse"
          className="btn mt-3"
          onClick={this.toggleSidenav}
          style={{
            position: 'fixed',
            zIndex: '9999',
            top: '5%',
            left: '2%',
            backgroundColor: '#ffffff00',
          }}
        >
          <img alt="logo" className="img-fluid fadein" src="/logo.png" />
        </button>
        <div className={`vertical-nav toggleSidebar ${toggleSidebar} navbg`} id="sidebar">
          <div className="pt-4 px-3 ml-5 mt-1">
            <div className="media d-flex align-items-center">

              <div className="media-body mb-5">
              </div>
            </div>
          </div>
          <ul className="nav flex-column mb-0 mt-5 ml-5">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/me" className="nav-link">
                <FontAwesomeIcon icon={faUserAstronaut}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                <FontAwesomeIcon icon={faFolder}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">
                <FontAwesomeIcon icon={faLaptopCode}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link">
                <FontAwesomeIcon icon={faFileInvoice}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tweets" className="nav-link">
                <FontAwesomeIcon icon={faHashtag}/>
              </Link>
            </li>
          </ul>
          <ul className="nav flex-column mb-0 mt-5 ml-5">
            <li className="nav-item mt-5">
              <a className="mx-2" href="https://github.com/usagib" target="_blank" rel="noopener noreferrer">
                <img alt="mygithub" className="img-fluid fadein fadein-first mt-3" src="logogit.png" />
              </a>
            </li>
            <li className="nav-item">
              <a className="mx-2" href="https://www.linkedin.com/in/usagib/" target="_blank" rel="noopener noreferrer">
                <img alt="mylinkedin" className="img-fluid fadein mt-3 fadein-second" src="logolin.png" />
              </a>
            </li>
            <li className="nav-item">
              <a className="mx-2" href="https://twitter.com/UsagiBonilla" target="_blank" rel="noopener noreferrer">
                <img alt="mytwitter" className="img-fluid fadein mt-3 fadein-third" src="logotwi.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
