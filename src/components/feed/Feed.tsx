import React, { useState } from 'react'
import TopNavbar from './../nav/TopNavbar'
import LeftSidebar from './../nav/LeftSidebar'
import RightSidebar from './../nav/RightSidebar'
import CreatePost from './../posts/CreatePost'

const Feed: React.FC = () => {
    return (
        <section className="feed">
            <TopNavbar />
            <div className="feed__wrapper">
                <LeftSidebar />
                <div className="feed__center">
                    <CreatePost />
                    <div className="feed__center__posts"></div>
                </div>
                <RightSidebar />
            </div>
            <div className="nav-component nav-component--bottom"></div>
        </section>
    )
}

export default Feed
