import React from 'react'
import user from '../../assets/images/icons/user-profile.svg'
import photo from '../../assets/images/icons/photo.svg'
import video from '../../assets/images/icons/video.svg'
import { useState } from 'react'

const CreatePost: React.FC = () => {
  const [postOptionsShow, setPostOptionsShow] = useState<boolean>(false)
  return (
    <div className="feed__center__create-post">
      <div
        onClick={() => setPostOptionsShow(true)}
        className="feed__center__create-post__text-area"
      >
        <img
          className="feed__center__create-post__text-area__image"
          src={user}
          alt=""
        ></img>
        <textarea
          disabled
          className="input-component--post"
          placeholder="Let your ideas flow..."
        ></textarea>
      </div>
    </div>
  )
}

export default CreatePost
