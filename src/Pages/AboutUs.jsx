import React,{useEffect} from "react"
import Sec from "../components/Sec"
import Stat from '../components/Stat'
import TrustReview from "../components/TrustReview"
import Data from '../data/Data';
function AboutUs() {
    useEffect(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, []);
  return (
<React.Fragment>
  <Stat sales='4.5' users='50' games={Data.length}/>
  <Sec dir={'ltr'} topic='Lorem ipsum dolor sit amet.' text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis quas illum animi? Voluptatem unde dolor sint obcaecati inventore a reprehenderit ea, minus vero nam molestiae! Dolores itaque adipisci voluptatem, qui voluptatum iusto quaerat quibusdam quisquam assumenda maxime ratione, quod corrupti odit culpa doloremque laudantium dolore unde fugiat blanditiis ullam? Atque autem accusantium earum dicta? Esse ab aut perferendis atque iste non magnam necessitatibus voluptatibus eius dicta, corrupti nemo est.'}/>
  <Sec dir={'rtl'} topic='Lorem ipsum dolor sit amet.' text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis quas illum animi? Voluptatem unde dolor sint obcaecati inventore a reprehenderit ea, minus vero nam molestiae! Dolores itaque adipisci voluptatem, qui voluptatum iusto quaerat quibusdam quisquam assumenda maxime ratione, quod corrupti odit culpa doloremque laudantium dolore unde fugiat blanditiis ullam? Atque autem accusantium earum dicta? Esse ab aut perferendis atque iste non magnam necessitatibus voluptatibus eius dicta, corrupti nemo est.'}/>
  <TrustReview/>
  </React.Fragment>
  )
}

export default AboutUs