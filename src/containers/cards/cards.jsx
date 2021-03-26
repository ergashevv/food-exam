import './cards.scss'
import '../../assets/styles/main.scss'
import Pic1 from '../../assets/icons/p1.png'
const Cards = () =>{
  return(
    <div className="card1 container">
      <img src={Pic1} alt=""/>
    <div className="card-info">
        <h3>Spicy seasoned seafood noodles</h3>
      <h4>$ 2.29</h4>
      <p>20 Bowls available</p>
    </div>
    </div>
  )
}
export default Cards;