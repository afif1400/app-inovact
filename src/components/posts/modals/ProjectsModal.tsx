import React, { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
import photo from '../../../assets/images/icons/photo.svg'
import video from '../../../assets/images/icons/video.svg'
import document from '../../../assets/images/icons/document.svg'
import { AutoComplete, Tag } from 'antd'

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

type ModalProps = {
    isOpen: boolean
    onRequestClose: (a: string) => void
    handleModalClose: (e: any) => void
}

interface IProject {
    title: string
    description: string
    contributors: string[]
    skills: string[]
}

const ProjectsModal: React.FC<ModalProps> = (props) => {
    const [project, setProject] = useState<IProject>({
        title: '',
        description: '',
        contributors: [],
        skills: [],
    })

    const [contributorOptions, setContributorOptions] = useState<
        { value: string }[]
    >([
        { value: 'Panav' },
        { value: 'Afif' },
        { value: 'Nidhi' },
        { value: 'Preethi' },
    ])

    const [skillOptions, setSkillOptions] = useState<{ value: string }[]>([
        { value: 'HTML' },
        { value: 'CSS' },
        { value: 'React' },
        { value: 'Typescript' },
    ])

    const onContributorSelect = (value: string) => {
        if (project.contributors.includes(value)) {
            return
        } else {
            const temp = [...project.contributors, value]
            setProject((prev) => {
                return { ...prev, contributors: temp }
            })
        }
    }

    const onSkillSelect = (value: string) => {
        if (project.skills.includes(value)) {
            return
        }
        const temp = [...project.skills, value]
        setProject((prev) => {
            return { ...prev, skills: temp }
        })
    }

    const handleContributorRemove = (contributor: string) => {
        let temp = project.contributors
        temp = temp.filter((c) => contributor !== c)
        setProject((prev) => {
            return { ...prev, contributors: temp }
        })
    }

    const handleSkillRemove = (skill: string) => {
        let temp = project.skills
        temp = temp.filter((s) => skill !== s)
        setProject((prev) => {
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
                    <h1>Post a Project</h1>
                    <a href="/" onClick={props.handleModalClose}>
                        &#10060;
                    </a>
                </div>
                <div className="modal__content">
                    <input
                        type="text"
                        className="input-component input-component--modal input-component--modal--title"
                        placeholder="Title"
                        value={project.title}
                        onChange={(e) => {
                            setProject((prev) => {
                                return { ...prev, title: e.target.value }
                            })
                        }}
                    ></input>
                    <textarea
                        className="input-component input-component--modal input-component--modal--description"
                        placeholder="Description"
                        onChange={(e) => {
                            setProject((prev) => {
                                return { ...prev, description: e.target.value }
                            })
                        }}
                    ></textarea>
                    <AutoComplete
                        options={contributorOptions}
                        onSelect={onContributorSelect}
                        style={{ width: '100%' }}
                    >
                        <input
                            id="contributor"
                            className="input-component input-component--modal"
                            placeholder="Contributors"
                        ></input>
                    </AutoComplete>
                    {project.contributors === [] ? null : (
                        <div className="modal__content__tags">
                            {project.contributors.map((contributor) => {
                                return (
                                    <Tag
                                        key={contributor}
                                        style={{ marginBottom: '1rem' }}
                                        closable
                                        onClose={() =>
                                            handleContributorRemove(contributor)
                                        }
                                    >
                                        {contributor}
                                    </Tag>
                                )
                            })}
                        </div>
                    )}
                    <AutoComplete
                        options={skillOptions}
                        onSelect={onSkillSelect}
                        style={{ width: '100%' }}
                    >
                        <input
                            className="input-component input-component--modal"
                            placeholder="Skills or Tools used"
                        ></input>
                    </AutoComplete>
                    <div className="modal__content__tags">
                        {project.skills === []
                            ? null
                            : project.skills.map((skill) => {
                                  return (
                                      <Tag
                                          key={skill}
                                          style={{ marginBottom: '1rem' }}
                                          closable
                                          onClose={() =>
                                              handleSkillRemove(skill)
                                          }
                                      >
                                          {skill}
                                      </Tag>
                                  )
                              })}
                    </div>

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

export default ProjectsModal
