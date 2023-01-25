
import React from 'react'
import { Button,Modal } from 'react-bootstrap'
import hero from '../video/hero.mp4'

function VideoModal(props) {
    return (
        
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body>
                    
                    <video className='w-full lg:h-[450px] object-cover'  autoPlay controls loop src={hero}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        
    )
}

export default VideoModal