import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ImageModel(props) {
    
  return (
    <div>
        <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body>
                    
                    <img className='w-full lg:h-[550px] object-cover' src={props}/>
                </Modal.Body>
                
            </Modal>
    </div>
  )
}

export default ImageModel