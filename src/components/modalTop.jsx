import './modalTop.scss'
import{CardIcon} from '../../src/assets/icons/icon'
// import CardIcon from '../../src/assets/images/icons/Card.png'

const ModalTop = (setModalstate, modalState) =>{
  return(
<div className="modalka active">
        <div className="top">
        <h1>Payment</h1>
        <p>3 payment method available</p>
      </div>
      <div className="forms">
      <div className="section-button">
    <button className="button">
      <CardIcon/>
      <p>Credit Card</p>
    </button>
    <button className="button">
      <CardIcon/>
      <p>Paypal</p>
    </button>
    <button className="button">
      <CardIcon/>
      <p>Cash</p>
    </button>
    </div>
    <div className="inputsForm">
     <div className="inp">
        <label >Cardholder Name</label>
      <input placeholder="Levi Ackerman"  type="text"/>
     </div>
    <div className="inp">
        <label htmlFor="">Card Number</label>
      <input placeholder="2564 1421 0897 1244" type="number"/>
    </div>
    <div className="inpt">
      <div className="left">
        <label htmlFor="">
          Expiration Date
        </label>
        <input placeholder="02/2022" type="date"/>
      </div>
      <div className="rightt">
        <label htmlFor="">CVV</label>
        <input type="password" name="" id=""/>
        
      </div>
    </div>
    </div>
</div>
</div>
    )
  }
  export default ModalTop;