import {useState} from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import{
   Icon1,Icon2,Icon3,Icon4,Icon5,Icon6,Icon7,Icon8
}from '../../assets/icons/icon'
const Header = () => {

  const [cont, chetCount] = useState('')
  return (
    <div className="header">

<div className="header-info">

      <Link className="link" onClick={() => chetCount('nimadir')} to="/" >
        {<Icon1/>}
        {/* <button className={`${cont} == 'nimadir'? 'active: ''`}>saasasdsad</button> */}
        </Link>
      <Link className="link" to="/populars">{<Icon3/>}</Link>
      <Link className="link" to="/movies">{<Icon8/>}</Link>
      <Link className="link" to="/TvMovie">{<Icon4/>}</Link>
      <Link className="link" to="/Upcoming">{<Icon5/>}</Link>
      <Link className="link" to="/LastMovies">{<Icon6/>}</Link>
      <Link className="link" to="/LastMovies">{<Icon7/>}</Link>
      <Link className="link" to="/LastMovies">{<Icon2/>}</Link>



</div>
    </div>
  )
}

export default Header;