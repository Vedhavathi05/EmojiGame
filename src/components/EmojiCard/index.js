// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClicked} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const nextPage = () => {
    emojiClicked(id)
  }

  return (
    <li className="emojiCard">
      <button type="button" className="button-styling">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="image-styling"
          onClick={nextPage}
        />
      </button>
    </li>
  )
}

export default EmojiCard
