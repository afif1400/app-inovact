import React, { useState } from 'react'
import user from '../../assets/images/icons/user-profile.svg'
import OptionsModal from './modals/OptionsModal'
import ProjectsModal from './modals/ProjectsModal'
import ThoughtsModal from './modals/ThoughtsModal'
import IdeasModal from './modals/IdeasModal'
import CloseModal from './modals/CloseModal'

const CreatePost: React.FC = () => {
    const [postOptionsShow, setPostOptionsShow] = useState<boolean>(false)
    const [postShow, setPostShow] = useState<string | undefined>('')
    const [confirmCloseShow, setConfirmCloseShow] = useState<boolean>(false)

    const handlePostClick = (e: any) => {
        setPostOptionsShow(false)
        setPostShow(String(e.target.id))
    }

    const handleModalClose = (e: any) => {
        e.preventDefault()
        setConfirmCloseShow(true)
    }

    const handleModalCloseConfirm = (e: any) => {
        e.preventDefault()
        if (e.target.id === 'cancel') {
            setConfirmCloseShow(false)
        } else {
            setPostShow('')
            setConfirmCloseShow(false)
        }
    }

    return (
        <div className="feed__center__create-post">
            <OptionsModal
                isOpen={postOptionsShow}
                onRequestClose={setPostOptionsShow}
                handlePostClick={handlePostClick}
            />

            <ProjectsModal
                isOpen={postShow === 'project'}
                onRequestClose={setPostShow}
                handleModalClose={handleModalClose}
            />

            <ThoughtsModal
                isOpen={postShow === 'thought'}
                onRequestClose={setPostShow}
                handleModalClose={handleModalClose}
            />

            <IdeasModal
                isOpen={postShow === 'idea'}
                onRequestClose={setPostShow}
                handleModalClose={handleModalClose}
            />

            <CloseModal
                isOpen={confirmCloseShow}
                onRequestClose={setConfirmCloseShow}
                handleModalCloseConfirm={handleModalCloseConfirm}
            />

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
