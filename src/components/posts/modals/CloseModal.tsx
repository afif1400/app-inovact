import React from 'react'
import ReactModal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        maxWidth: '40rem',
    },
}

type ModalProps = {
    isOpen: boolean
    onRequestClose: (a: boolean) => void
    handleModalCloseConfirm: (e: any) => void
}

const CloseModal: React.FC<ModalProps> = (props) => {
    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={props.isOpen}
            onRequestClose={() => props.onRequestClose(false)}
            style={customStyles}
        >
            <div className="modal__close">
                <h1 className="u-margin-bottom-small u-center-text">
                    Are you sure?
                </h1>
                <div className="modal__close__buttons">
                    <a
                        id="cancel"
                        onClick={props.handleModalCloseConfirm}
                        className="button button--modal button--modal--cancel"
                        href="/"
                    >
                        Cancel
                    </a>
                    <a
                        id="close"
                        onClick={props.handleModalCloseConfirm}
                        className="button button--modal button--modal--close"
                        href="/"
                    >
                        Close
                    </a>
                </div>
            </div>
        </ReactModal>
    )
}

export default CloseModal
