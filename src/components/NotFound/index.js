// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar/index'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const BgTheme = isDarkTheme ? 'dark' : 'false'
      return (
        <div>
          <Navbar />
          <div className={`content-container ${BgTheme}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
              className="image"
            />
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page you are looking for</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
