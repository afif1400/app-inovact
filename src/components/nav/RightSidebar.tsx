import React from 'react'
import user from '../../assets/images/icons/user-profile.svg'

const RightSidebar: React.FC = () => {
  return (
    <div className="feed__right">
      <div className="feed__right__profile">
        <div className="feed__right__profile__lower">
          <img src={user} className="feed__right__profile__image" alt="" />
          <p className="feed__right__profile__name">Jane Doe</p>
          <p className="feed__right__profile__designation">UI/UX Designer</p>
          <a
            href="/"
            className="feed__right__profile__button button button--purple"
          >
            Go to Profile
          </a>
        </div>
      </div>
      <div className="feed__right__featured-projects"></div>
      <div className="feed__right__friend-suggestions"></div>
    </div>
  )
}

export default RightSidebar
