import React from 'react'
import ModalVideo from 'react-modal-video'

const Videos = (props) => {
  
  return (
    <div>
      <ModalVideo channel='vimeo' isOpen='true' videoId={props.videoId}/>
    </div>
  )
}

export default Videos;