import './right.scss'
const RightTop = () =>{
  return(
   <div className="bigTop">
     <p className="p1">Orders #34562</p>
     <div className="buttons">
       <button className="button">Dine In</button>
       <button className="button">To Go</button>
       <button className="button">Delivery</button>

     </div>
     <div className="right-bottom container2">
       <div className="right-left">
         <p>Item</p>
       </div>
       <div className="right-right">
         <p>Qty</p>
         <p>Price</p>
       </div>
     </div>
   </div>

  )
}
export default RightTop;