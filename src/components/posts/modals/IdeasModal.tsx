import React, { useState } from 'react'
import ReactModal from 'react-modal'
import photo from '../../../assets/images/icons/photo.svg'
import video from '../../../assets/images/icons/video.svg'
import document from '../../../assets/images/icons/document.svg'
import { AutoComplete, Tag } from 'antd'

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

interface IIdea {
    title: string
    description: string
    skills: string[]
}

const IdeasModal: React.FC<ModalProps> = (props) => {
    const [idea, setIdea] = useState<IIdea>({
        title: '',
        description: '',
        skills: [],
    })

    const [skillOptions, setSkillOptions] = useState<{ value: string }[]>([
        { value: 'HTML' },
        { value: 'CSS' },
        { value: 'React' },
        { value: 'Typescript' },
    ])

    const onSkillSelect = (value: string) => {
        if (idea.skills.includes(value)) {
            return
        }
        const temp = [...idea.skills, value]
        setIdea((prev) => {
            return { ...prev, skills: temp }
        })
    }

    const handleSkillRemove = (skill: string) => {
        let temp = idea.skills
        temp = temp.filter((s) => skill !== s)
        setIdea((prev) => {
            return { ...prev, skills: temp }
        })
    }

    const onPhotoClick = (e: any) => {
        e.preventDefault()
    }

    const onVideoClick = (e: any) => {
        e.preventDefault()
    }

    const onDocumentClick = (e: any) => {
        e.preventDefault()
    }

    const handleChange = (e: any) => {
        setIdea((prev) => {
            return { ...prev, [e.target.id]: e.target.value }
        })
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
                    <h1>Post an Idea</h1>
                    <a href="/" onClick={props.handleModalClose}>
                        &#10060;
                    </a>
                </div>
                <div className="modal__content">
                    <input
                        id="title"
                        type="text"
                        className="input-component input-component--modal input-component--modal--title"
                        placeholder="Title"
                        value={idea.title}
                        onChange={handleChange}
                    ></input>
                    <textarea
                        id="description"
                        className="input-component input-component--modal input-component--modal--description"
                        placeholder="Description"
                        value={idea.description}
                        onChange={handleChange}
                    ></textarea>
                    <AutoComplete
                        options={skillOptions}
                        onSelect={onSkillSelect}
                        style={{ width: '100%' }}
                    >
                        <input
                            id="contributor"
                            className="input-component input-component--modal"
                            placeholder="Skills or Tools required"
                        ></input>
                    </AutoComplete>
                    {idea.skills === [] ? null : (
                        <div className="modal__content__tags">
                            {idea.skills.map((skill) => {
                                return (
                                    <Tag
                                        key={skill}
                                        style={{ marginBottom: '1rem' }}
                                        closable
                                        onClose={() => handleSkillRemove(skill)}
                                    >
                                        {skill}
                                    </Tag>
                                )
                            })}
                        </div>
                    )}
                    <div className="modal__content__actions">
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
                            className="modal__content__actions__item"
                            href="/"
                            onClick={onDocumentClick}
                        >
                            <img
                                src={document}
                                alt=""
                                className="modal__content__actions__item__icon"
                            ></img>
                            Document
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

export default IdeasModal
