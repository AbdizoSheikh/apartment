import React, { useState } from 'react'
import '../Style.css'
import ChatModal from './ChatModal';
import VideoModal from './Modal';

function Message() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <a

                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setModalShow(!modalShow)}
            >

                <i class="fa fa-whatsapp whatsapp-icon">
                    <ChatModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />

                </i>
            </a>
        </div>
    )
}

export default Message