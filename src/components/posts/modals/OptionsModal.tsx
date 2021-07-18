import React from 'react'
import ReactModal from 'react-modal'
import projects from '../../../assets/images/icons/projects.svg'
import ideas from '../../../assets/images/icons/ideas.svg'
import thoughts from '../../../assets/images/icons/thoughts.svg'

type ModalProps = {
    isOpen: boolean
    onRequestClose: (a: boolean) => void
    handlePostClick: (e: any) => void
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
        maxWidth: '35rem',
    },
}

const OptionsModal: React.FC<ModalProps> = (props) => {
    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={props.isOpen}
            onRequestClose={() => props.onRequestClose(false)}
            style={customStyles}
        >
            <div className="modal__options">
                <h1 className="u-margin-bottom-small u-center-text">
                    What would you like to post?
                </h1>
                <div
                    id="project"
                    onClick={props.handlePostClick}
                    className="modal__options__link"
                >
                    <img id="project" src={projects} alt=""></img>
                    <h1 id="project">Post a Project</h1>
                </div>
                <div className="modal__options__rule"></div>
                <div
                    id="idea"
                    onClick={props.handlePostClick}
                    className="modal__options__link"
                >
                    <img id="idea" src={ideas} alt=""></img>
                    <h1 id="idea">Post an Idea</h1>
                </div>
                <div className="modal__options__rule"></div>
                <div
                    id="thought"
                    onClick={props.handlePostClick}
                    className="modal__options__link"
                >
                    <img id="thought" src={thoughts} alt=""></img>
                    <h1 id="thought">Post a Thought</h1>
                </div>
            </div>
        </ReactModal>
    )
}

export default OptionsModal
