import React from 'react'
import ModalVideo from 'react-modal-video'

const Videos = (props) => {

  const closeModal = () => {
    props.closeModal(undefined);
  }
  if (props.videoId === undefined) {
      return null;
    } else {
      return (
        <div className="videoModal">
          <ModalVideo channel='vimeo' isOpen='true' videoId={props.videoId} onClose={() =>closeModal()} />
        </div>
      )
    }
}

export default Videos;