import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
// import {ColorExtractor} from 'react-color-extractor';
import {Link} from 'react-router-dom'

function Poster({ id, imgUrl, name, textbottom, classname, colorTheme }) {

  return (
    <Link to={`/game-catalog/${id}`}>
      {/* <ColorExtractor
        maxColors={128}
        getColors={(colors) =>
          setFirstColor(colors[1]) || setSecondColor(colors[0])
        }
      > */}
      <img src={imgUrl} className={" rounded-[30px] " + classname} alt="" />
      {/* </ColorExtractor> */}
      <p
        style={{ bottom: `${textbottom}em` }}
        className={
          "  text-gray-100 relative rotate-[270deg] right-[11em] text-[10px] uppercase"
        }
      >
        {name}
      </p>
      <button
        style={{
          background: `linear-gradient(260deg,${colorTheme[0]}, ${colorTheme[1]})`,
        }}
        className="relative bottom-16 bg-cover overflow-hidden left-[55px] border-2 flex items-center p-2 px-4 rounded-xl border-none  active:scale-95 transition-all"
      >
        {" "}
        <BsCheck2Circle className="-ml-2 w-8 h-5 mt-1" />
        recomanded
      </button>
    </Link>
  );
}

export default Poster