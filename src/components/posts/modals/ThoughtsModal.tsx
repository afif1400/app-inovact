import React, { useState } from 'react'
import ReactModal from 'react-modal'
import photo from '../../../assets/images/icons/photo.svg'
import video from '../../../assets/images/icons/video.svg'

type ModalProps = {
    isOpen: boolean
    onRequestClose: (a: string) => void
    handleModalClose: (e: any) => void
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        maxWidth: '50rem',
    },
}

const ThoughtsModal: React.FC<ModalProps> = (props) => {
    const [thought, setThought] = useState('')

    const onPhotoClick = (e: any) => {
        e.preventDefault()
    }

    const onVideoClick = (e: any) => {
        e.preventDefault()
    }

    const handleChange = (e: any) => {
        setThought(e.target.value)
    }

    const handlePost = (e: any) => {
        e.preventDefault()
    }

    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={props.isOpen}
            onRequestClose={() => props.onRequestClose}
            style={customStyles}
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={false}
        >
            <div className="modal">
                <div className="modal__heading">
                    <h1 className="modal__heading__text">Post a Thought</h1>
                    <a href="/" onClick={props.handleModalClose}>
                        &#10060;
                    </a>
                </div>
                <div className="modal__content">
                    <textarea
                        className="input-component input-component--modal input-component--modal--description"
                        placeholder="What woke you up today?"
                        value={thought}
                        onChange={handleChange}
                    ></textarea>
                    <div className="modal__content__actions modal__content__actions--thoughts">
                        <a
                            className="modal__content__actions__item"
                            href="/"
                            onClick={onPhotoClick}
                        >
                            <img
                                src={photo}
                                alt=""
                                className="modal__content__actions__item__icon"
                            ></img>
                            Photo
                        </a>
                        <a
                            className="modal__content__actions__item"
                            href="/"
                            onClick={onVideoClick}
                        >
                            <img
                                src={video}
                                alt=""
                                className="modal__content__actions__item__icon"
                            ></img>
                            Video
                        </a>
                        <a
                            href="/"
                            className="button button--blue modal__content__actions__button"
                            onClick={handlePost}
                        >
                            Post
                        </a>
                    </div>
                </div>
            </div>
        </ReactModal>
    )
}

export default ThoughtsModal
