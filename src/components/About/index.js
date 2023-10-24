// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar/index'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const ThemeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const BgTheme = isDarkTheme ? 'dark' : 'false'
      return (
        <div>
          <Navbar />
          <div className={`content-container ${BgTheme}`}>
            <img src={ThemeUrl} alt="about" className="image" />
            <h1>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
