import React from 'react'
import user from '../../assets/images/icons/user-profile.svg'
import photo from '../../assets/images/icons/photo.svg'
import video from '../../assets/images/icons/video.svg'

const CreatePost: React.FC = () => {
  return (
    <div className="feed__center__create-post">
      <div className="feed__center__create-post__text-area">
        <img
          className="feed__center__create-post__text-area__image"
          src={user}
          alt=""
        ></img>
        <textarea
          className="input-component--post"
          placeholder="Let your ideas flow..."
        ></textarea>
      </div>
      <div className="feed__center__create-post__actions">
        <a href="/" className="feed__center__create-post__actions__link">
          <img
            src={photo}
            alt=""
            className="feed__center__create-post__actions__link__img"
          ></img>
          Photo
        </a>
        <a href="/" className="feed__center__create-post__actions__link">
          <img
            src={video}
            alt=""
            className="feed__center__create-post__actions__link__img"
          ></img>
          Video
        </a>
        <a
          href="/"
          className="feed__center__create-post__actions__button button button--purple"
        >
          Post
        </a>
      </div>
    </div>
  )
}

export default CreatePost
