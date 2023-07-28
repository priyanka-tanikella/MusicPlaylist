import './index.css'

import {AiOutlineDelete} from 'react-icons/ai'

const TrackItem = props => {
  const {trackDetails, clickDeleteIcon} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onClickDeleteIcon = () => {
    clickDeleteIcon(id)
  }

  return (
    <li className="list-item">
      <div className="image-name-genre-container">
        <img src={imageUrl} className="image" alt="track" />
        <div className="name-and-genre-container">
          <p className="name">{name}</p>
          <p className="genre">{genre} </p>
        </div>
      </div>
      <div className="duration-and-delete-icon-container">
        <p className="duration">{duration} </p>
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={onClickDeleteIcon}
        >
          <AiOutlineDelete color="white" size={25} />
        </button>
      </div>
    </li>
  )
}
export default TrackItem
