import './right.scss'
import{CardIcon} from '../../src/assets/icons/icon'
import '../containers/modal.scss'
import { useState} from 'react'
import ModalTop from '../../src/components/modalTop'
const RightBottom = ({setModalState}) =>{
  return (
      <div className="container3">
    <div className="block1">
      <p>Discount</p>
      <span>$0</span>
    </div>
    <div className="block1">
      <p>Sub total</p>
      <span> $ 21,03</span>
    </div>
    <div className="block3">

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>



    </div>
  </div>
  )
}
export default RightBottom;