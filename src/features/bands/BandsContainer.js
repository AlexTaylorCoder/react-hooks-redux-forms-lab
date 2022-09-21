import React from "react";
import BandInput from "./BandInput";
import {useSelector} from "react-redux"

function BandsContainer() {
  const bands = useSelector(state => state.bands.entities)
  console.log(bands)
  return (
    <div id = "band-container">
      <BandInput/>
      <ul>
        {bands.map((band,index)=><li key={index}>{band}</li>)}
      </ul>
    </div>
  )

}

export default BandsContainer;
