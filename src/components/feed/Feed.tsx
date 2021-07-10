import React, { useState } from 'react'
import { OutsideAlerter } from './OutsideAlerter'

const Feed: React.FC = () => {
  const [hamburger, setHamburger] = useState(false)
  const handleHamburger = () => {
    setHamburger(!hamburger)
    // if (!hamburger) {
    //   window.document
    //     .getElementById('ham')!
    //     .classList.replace('u-hidden', 'u-visible')
    // } else {
    //   window.document
    //     .getElementById('ham')!
    //     .classList.replace('u-visible', 'u-hidden')
    // }
  }
  return (
    <section className="feed">
      <div className="nav-component">
        <div
          onClick={handleHamburger}
          className="nav-component__hamburger"
        ></div>
      </div>
      {hamburger && (
        <OutsideAlerter
          onClose={() => {
            setHamburger(false)
          }}
        >
          <div id="ham" className="nav-hamburger"></div>
        </OutsideAlerter>
      )}
      <div className="feed__wrapper">
        <div className="feed__left">
          <div className="feed__left__links"></div>
          <div className="feed__left__teams"></div>
        </div>
        <div className="feed__center">
          <div className="feed__center__create-post"></div>
          <div className="feed__center__posts"></div>
        </div>
        <div className="feed__right">
          <div className="feed__right__profile"></div>
          <div className="feed__right__featured-projects"></div>
          <div className="feed__right__friend-suggestions"></div>
        </div>
      </div>
      <div className="nav-component nav-component--bottom"></div>
    </section>
  )
}

export default Feed
