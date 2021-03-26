import './right.scss'

import {RemoveIcon} from '../assets/icons/icon' 
import Icons from '../assets/icons/foo.png'
const RightBlocks = () =>{
  return(
<div className="">
  <div className="top">
    <div className="top1">
      <div className="top1-left">
        <div className="top1-left-left">
          <img className="imagex" src={Icons} alt=""/>
        </div>
        <div className="top1-right">
          <h3>Spicy seasoned sea...</h3>
          <p>$ 2.29</p>
        </div>
      </div>
      <div className="top-right">
        <button className="right-button2">2</button>
        <span>$ 4,58</span>
      </div>
    </div>
    <div className="top2">
   <div className="top2-left">
        <input placeholder="Order Note..." type="text"/>
   </div>
   <div className="top2-right">
    <button ><RemoveIcon/></button>
   </div>
    </div>
  </div>

</div>
  )
}
export default RightBlocks;