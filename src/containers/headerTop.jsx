import './Header/Header.scss'

const HeaderTop = () =>{
  return(
<div className="header-top">
  <div className="header-top-info">
    <h2>Jaegar Resto</h2>
    <h4>Tuesday, 2 Feb 2021</h4>
  </div>
  <div className="header-top-right">
    <input placeholder="Search for food, coffe, etc.." type="search"/>
  </div>
</div>
    )
}
export default HeaderTop;