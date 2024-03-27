import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Comment from '../CommentItem'

import './index.css'
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    searchInput: '',
    commentInput: '',

    commentsDetails: [],
  }
  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }
  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }
  onAddValue = event => {
    event.preventDefault()
    const {searchInput, commentInput} = this.state
    const initialColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newObj = {
      id: uuidv4(),
      username: searchInput,
      usercomment: commentInput,
      initialBackgroundColor: initialColor,
      date: new Date(),
      isLiked: false,
    }
    this.setState(p => ({
      commentsDetails: [...p.commentsDetails, newObj],
      searchInput: '',
      commentInput: '',
    }))
  }
  onRender = () => {
    const {commentsDetails} = this.state
    return commentsDetails.map(eachItem => (
      <Comment
        balu={eachItem}
        key={eachItem.id}
        opo={this.onDelete}
        pok={this.onTodo}
      />
    ))
  }
  onDelete = id => {
    const {commentsDetails} = this.state
    const filteredData = commentsDetails.filter(eachItem => eachItem.id !== id)
    this.setState({commentsDetails: filteredData})
  }
  onTodo = id => {
    this.setState(p => ({
      commentsDetails: p.commentsDetails.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {commentsDetails, searchInput, commentInput} = this.state
    return (
      <div className="background">
        <h1>Comments</h1>
        <div className="lol">
          <form type="submit" className="ply" onSubmit={this.onAddValue}>
            <p className="p">Say something about 4.0 Technologies</p>

            <input
              type="text"
              value={searchInput}
              onChange={this.onChangeInput}
            />
            <textarea
              rows="20"
              cols="50"
              onChange={this.onChangeComment}
              value={commentInput}
            ></textarea>
            <button>Add Comment</button>
          </form>

          <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" />
        </div>
        <div className="iol">
          <div className="pop">{commentsDetails.length}</div>
          <p className="p1">Comments</p>
        </div>
        <ul>{this.onRender()}</ul>
      </div>
    )
  }
}
export default Comments

/*import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  deleteComment = commentId => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
      console.log(initialBackgroundColorClassName)

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading">Comments</h1>
          <div className="comments-inputs">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <textarea
                placeholder="Your Comment"
                className="comment-input"
                value={commentInput}
                onChange={this.onChangeCommentInput}
                rows="6"
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p className="heading">
            <span className="comments-count">{commentsList.length}</span>
            Comments
          </p>
          <ul className="comments-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments*/
