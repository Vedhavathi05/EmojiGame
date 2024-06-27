// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {wonGame, score, playAgainButtonClicked} = props
  const playAgain = () => {
    playAgainButtonClicked()
  }

  return wonGame ? (
    <div className="styling-the-won-and-lose-card">
      <div>
        <h1>You Won</h1>
        <p>Best Score</p>
        <p>{score}/12</p>
        <button type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    </div>
  ) : (
    <div className="styling-the-won-and-lose-card">
      <div>
        <h1>You Lose</h1>
        <p>Score</p>
        <p>{score}/12</p>
        <button type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      </div>
    </div>
  )
}
export default WinOrLoseCard
