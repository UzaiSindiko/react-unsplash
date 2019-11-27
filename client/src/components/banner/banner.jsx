import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBg } from '../../store/actions'

import './banner.css'
// import axios from '../../apis/unsplash'
import {
  useHistory
} from "react-router-dom";

export default function Banner (props) {

  const dispacth = useDispatch()
  const { bgImage } = useSelector(state => state.picture )

  const [keyword, setKeyword] = useState('')
  let history = useHistory()
  
  function handleSubmit(){
    history.push(`/?q=${keyword}`)
    setKeyword('')
  }

  useEffect(()=>{
    dispacth(getBg())
  }, [])
  
  return (<div style={bgImage} className="con d-flex align-items-center justify-content-center">
      <div className="w-75 text-white">
        <h1> Unsplash </h1>
        <p> The internet’s source of freely usable images. Powered by creators everywhere. </p>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
          }} className="d-flex align-items-center justify-content-center">
          <input value={keyword} onChange={ (e) => setKeyword( e.target.value ) } type="text" id="search" className="form-control mr-3" />
          <input type="submit" value="search" className="btn btn-info" />
        </form>
      </div>
    </div>)
}
