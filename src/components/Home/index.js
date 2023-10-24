// Write your code here
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const ThemeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const BgTheme = isDarkTheme ? 'dark' : 'false'
      return (
        <div>
          <Navbar />
          <div className={`content-container ${BgTheme}`}>
            <img src={ThemeUrl} alt="home" className="image" />
            <h1>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
