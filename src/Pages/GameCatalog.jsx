import React, { useState } from "react";
// Components
// import CategoryFilter from '../components/CategoryFilter';
import TopFilter from "../components/TopFilter";
import {
  Fade,
  Zoom,
} from "react-awesome-reveal";
// import FadeIn from "react-fade-in";

// import Rating from '../components/Rating';
import { CardSecondary, Card } from "../components/Card";
import games from "../data/Data";

import { Context } from "../Context/GameCatalogContext";
// {/* <Card img='horizon forbiden west' textSize='-ml-14'/> */}
// {/* <CardThirdly img='spider man miles morales'/> */}
// import img from '../img/ghost runner.jpg'
// import {FaStar} from 'react-icons/fa';
// import {BiCart} from 'react-icons/bi'
// import {FaDollarSign} from 'react-icons/fa';

function GameCatalog() {
  const [Big, setBig] = useState("hidden");
  const [Small, setSmall] = useState("");
  const [Effect, setEffect] = useState(true);
  const [SortBy, setSortBy] = useState(games);
  // console.log(SortBy);
  // const Games=[...games]
  // const Games = [...games].sort((a, b) => b.price - a.price);  sort by price
  // const Games = [...games].sort((a, b) => (a.id > b.id ? 1 : -1));   sort by name [a-z]
  // const Games = [...games].sort((a, b) => b.rate - a.rate);
  // const Games = [...games].sort((a, b) => (a.date > b.date ? -1 : 1)); sort by newest
  // const Games = [...games].sort((a, b) => (a.date > b.date ? 1 : -1)); sort by oldest
  return (
    <React.Fragment>
      <Context.Provider
        value={{ setBig, setSmall, SortBy, setSortBy, Effect, setEffect }}
      >
        <TopFilter />
        {/* <div className=' lg:w-full w-full h-full g-2  lg:pl-[75px] px-12 flex flex-col items-center lg:grid'>
  {
    games.map(e=><Card key={e.index} img={e.img} textSize={e.textSize} link={e.img} />)
  }
  </div> */}
        {Small && (
          <div
            className={
              " flex lg:flex-row flex-col pb-5  w-full lg:px-20 px-[4em] gap-7 py-4 justify-between flex-wrap h-full "
            }
          >
            {SortBy.map((e) => (
              <CardSecondary
                key={e.index}
                IsNew={e.new}
                name={e.id}
                img={e.img}
                imgUrl={e.imgUrl}
              />
            ))}
          </div>
        )}
        {Big && (
          <div
            id="container"
            className={
              " flex lg:flex-row flex-col flex-wrap lg:px-12 px-1 lg:gap-5 gap-y-6 items-center  py-3 w-full h-full "
            }
          >
            {Effect && (
              <Fade
                fraction={1}
                cascade
                triggerOnce
                damping={0.05}
                duration={900}
              >
                {SortBy.map((e) => (
                  <Card
                    key={e.index}
                    img={e.img}
                    textSize={e.textSize}
                    rate={e.rate}
                    price={e.price}
                    id={e.id}
                    name={e.name}
                    imgUrl={e.imgUrl}
                  />
                ))}
              </Fade>
            )}
            {Effect === false && (
              <Zoom
                fraction={1}
                cascade
                triggerOnce
                ZoomDirection="up"
                duration={500}
              >
                {SortBy.map((e) => (
                  <Card
                    key={e.index}
                    img={e.img}
                    textSize={e.textSize}
                    rate={e.rate}
                    price={e.price}
                    id={e.id}
                    name={e.name}
                    imgUrl={e.imgUrl}
                  />
                ))}
              </Zoom>
            )}
          </div>
        )}
      </Context.Provider>
    </React.Fragment>
  );
}

export default GameCatalog;
// <Fade cascade damping={0.05} duration={900}>
//   {SortBy.map((e) => (
//     <Card
//       key={e.index}
//       img={e.img}
//       textSize={e.textSize}
//       rate={e.rate}
//       price={e.price}
//       id={e.id}
//       name={e.name}
//       imgUrl={e.imgUrl}
//     />
//   ))}
// </Fade>;
