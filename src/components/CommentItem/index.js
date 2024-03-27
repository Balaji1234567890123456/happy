import {formatDistanceToNow} from 'date-fns'
const Comment = props => {
  const {balu, opo, pok} = props
  const {id, username, usercomment, initialBackgroundColor, date, isLiked} =
    balu
  const postedDate = formatDistanceToNow(date)
  const like =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const liked =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const boy = isLiked ? liked : like
  const d = isLiked ? 'yuvan' : ''
  const h = () => {
    opo(id)
  }
  const v = () => {
    pok(id)
  }

  return (
    <li>
      <div className="kio">
        <div className={`bol ${initialBackgroundColor}`}>
          <h1>{username.slice(0, 1).toUpperCase()}</h1>
        </div>
        <div>
          <p>{username}</p>
          <p>{postedDate}</p>
        </div>
        <h1>{usercomment}</h1>
        <div>
          <div>
            <img src={boy} onClick={v} />
            <p className={d}>Like</p>
          </div>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          onClick={h}
        />
      </div>
    </li>
  )
}
export default Comment
/*

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
*/
