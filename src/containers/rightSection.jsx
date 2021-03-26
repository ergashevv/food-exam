import './rightSection.scss'
import RightBlock from '../components/rightBlock'
import RightTop from '../components/rightTop'
import RightBottom from '../components/rightBottom'
import RightBlocks from '../components/rightBlock'
import Modal from './modal'
import { useState } from 'react'

const RightSection = ()=>{
  const [modalState, setModalState] = useState(false)
  return(
   <div className="right">
    <RightTop/>
 <div className="foots">
      <RightBlock/>
    <RightBlock/>
    <RightBlock/>
    <RightBlock/>
    <RightBlock/>
 </div>
 <RightBottom setModalState={setModalState}/>
 <Modal modalState={modalState} setModalState={setModalState}/>
   </div>
  )
}
export default RightSection;