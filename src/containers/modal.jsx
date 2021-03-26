import './modal.scss'
import { useState} from 'react'
import ModalTop from '../../src/components/modalTop'
import{CardIcon} from '../../src/assets/icons/icon'
const Modal = ({setModalstate, modalState}) =>{
  return(
    <div className="modalka">
      <ModalTop setModalstate={setModalstate} modalState={modalState}>
      </ModalTop>
    </div>
  )
}
export default Modal;