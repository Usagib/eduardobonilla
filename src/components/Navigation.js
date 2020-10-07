import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
            left: '5%',
            backgroundColor: '#ffffff00',
          }}
        >
          <FontAwesomeIcon icon={faBars} size="2x" className="fadein menu-bars" />
        </button>
        <div
          className="mt-3 text-right"
          style={{
            position: 'fixed',
            zIndex: '9999',
            top: '5%',
            right: '5%',
            backgroundColor: '#ffffff00',
          }}
        >
        <Link to='/'>
          <img alt="logo" className="img-fluid fadein" src="/eduardobonilla/logo.png" />
        </Link>
          <br />
          <a href="https://github.com/usagib" target="_blank" rel="noopener noreferrer">
            <img alt="mygithub" className="img-fluid fadein fadein-first mt-3" src="/eduardobonilla/logogit.png" />
          </a>
          <br />
          <a href="https://www.linkedin.com/in/usagib/" target="_blank" rel="noopener noreferrer">
            <img alt="mylinkedin" className="img-fluid fadein mt-3 fadein-second" src="/eduardobonilla/logolin.png" />
          </a>
          <br />
          <a href="https://twitter.com/UsagiBonilla" target="_blank" rel="noopener noreferrer">
            <img alt="mytwitter" className="img-fluid fadein mt-3 fadein-third" src="/eduardobonilla/logotwi.png" />
          </a>
        </div>
        <div className={`vertical-nav toggleSidebar ${toggleSidebar}`} id="sidebar">
          <div className="pt-4 px-3 ml-5 mt-1">
            <div className="media d-flex align-items-center">

              <div className="media-body mb-5">
              </div>
            </div>
          </div>
          <ul className="nav flex-column mb-0 mt-5 ml-5">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/me" className="nav-link">
                ME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">
                SKILLS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
