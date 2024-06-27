/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    isGameOver: false,
    count: 0,
    wonGame: false,
    score: 0,
    highScore: 0,
    idList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  }

  getModifiedList = id => {
    const {idList} = this.state
    const filtered = idList.filter(each => each !== id)
    return filtered
  }

  check = id => {
    const {idList} = this.state
    const list = idList.includes(id)
    return list
  }

  playAgainButtonClicked = () => {
    const {highScore} = this.state

    this.setState({
      isGameOver: false,
      count: 0,
      wonGame: false,
      score: 0,
      idList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    })
    if (highScore >= 12) {
      this.setState({highScore: 12})
    }
  }

  emojiClicked = id => {
    const {count} = this.state
    const checkWeatherIncludesInTheList = this.check(id)
    const modifiedList = this.getModifiedList(id)

    if (count < 12 && checkWeatherIncludesInTheList === false) {
      this.setState({isGameOver: true, wonGame: false})
    } else if (count === 11) {
      this.setState({isGameOver: true, wonGame: true, score: 12, highScore: 12})
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1,
        idList: modifiedList,
        score: prevState.score + 1,
        highScore: prevState.highScore + 1,
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {isGameOver, score, highScore, wonGame} = this.state
    const emojisList = this.shuffledEmojisList()
    return (
      <div className="backGround-container">
        <NavBar
          isGameOver={isGameOver}
          className="background"
          highScore={highScore}
          score={score}
        />
        <ul className="container-for-the-emojis">
          {!isGameOver &&
            emojisList.map(each => (
              <div key={each.id}>
                <EmojiCard
                  emojiDetails={each}
                  emojiClicked={this.emojiClicked}
                  key={each.id}
                />
              </div>
            ))}
          {isGameOver && (
            <WinOrLoseCard
              wonGame={wonGame}
              highScore={highScore}
              score={score}
              playAgainButtonClicked={this.playAgainButtonClicked}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
