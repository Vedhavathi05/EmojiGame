// Write your code here.
import './index.css'

const NavBar = props => {
  const {isGameOver, score, highScore} = props

  return (
    <div>
      {!isGameOver ? (
        <div className="navbar-styling">
          <div className="emoji-styles">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
            />
            <h1>Emoji Game</h1>
          </div>
          <div className="emoji-styles">
            <p className="paragraph">Score: {score}</p>
            <p className="paragraph">Top Score: {highScore}</p>
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <p>Emoji Game</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
