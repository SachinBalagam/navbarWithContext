// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const WebsiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const ThemeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const bgTheme = isDarkTheme ? 'bg-dark' : 'bg-light'
      const TextColors = isDarkTheme ? 'dark-text' : 'light-text'
      const onChangeTheme = () => {
        toggleTheme()
      }
      return (
        <nav className={bgTheme}>
          <ul className="navList-container">
            <img
              src={WebsiteLogo}
              alt="website logo"
              className="website-logo"
            />

            <div className="home-about-container">
              <Link to="/" className="link">
                <li className={`eachNav ${TextColors}`}>Home</li>
              </Link>
              <Link to="/about" className="link">
                <li className={`eachNav ${TextColors}`}>About</li>
              </Link>
            </div>
            <button
              type="button"
              className="button"
              onClick={onChangeTheme}
              data-testid="theme"
            >
              <img src={ThemeLogo} alt="theme" className="theme-logo" />
            </button>
          </ul>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
