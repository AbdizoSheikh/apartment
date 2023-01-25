import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function ChatModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>

                <p>
                    Do u have a question in mind or want to talk to us?
                </p>
                <p>
                    Feel free to text us on our whatsapp
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button className='bg-green-600 p-2 rounded-full'>
                <a
                        href="https://wa.me/+254701888444"
                        className="text-white uppercase no-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Text Us</a>

                </button>
                   

                


                <button className='bg-green-600 p-2 rounded-lg text-white uppercase' onClick={props.onHide}>Close</button>
            </Modal.Footer>

        </Modal>

    )
}

export default ChatModal