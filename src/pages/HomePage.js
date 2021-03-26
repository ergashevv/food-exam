import ArtistCard from '../../src/components/ArtistCard/ArtistCard'
import Select from '../../src/components/ArtistCard/select'
import Cards from '../containers/cards/cards'
import HeaderTop from '../containers/headerTop'
import RightSection from '../containers/rightSection'
const HomePage = () => {
  return (
  <div className="comp">
      <div className="">
      <HeaderTop/>
     <ArtistCard/>
     <Select/>
     <div className="cardsSection">
       <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     </div>
     

    </div>

    <div className="">
<RightSection/>
    </div>
  </div>
  )
}

export default HomePage;
