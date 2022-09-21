import React, { useState } from "react";
import {bandAdded} from "./bandsSlice"
import {useDispatch} from "react-redux"

function BandInput() {
  const dispatch = useDispatch()
  const [name,setName] = useState("")
  function onBandSubmit(e) {
    e.preventDefault()
    dispatch(bandAdded(name))
  }
  return (
    <form onSubmit={onBandSubmit}>
      <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Input"/>
      <input type="submit" value="add band"/>
    </form>
    );
}

export default BandInput;
