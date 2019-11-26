import React, { useState, useEffect } from 'react'
import './banner.css'
import axios from '../../apis/unsplash'
import {
  useHistory
} from "react-router-dom";

export default function Banner (props) {

  const [bgImage,setBgImage] = useState({
    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR0MSXI_hwdeKRskkXc20kuHaPm_hAOvGGqtdwsjcsEE_qUxnu")`
  })

  const [keyword, setKeyword] = useState('')
  let history = useHistory()
  
  function handleSubmit(){
    history.push(`/q=${keyword}`)
    setKeyword('')
  }

  useEffect(()=>{
    let random = Math.floor(Math.random() * 11)
    axios({
      method: 'get',
      url: '/search/photos?query=wallpapers&per_page=10'
    })
    .then(({data}) =>{
      setBgImage({
        backgroundImage: `url("${data.results[random].urls.raw}")`
      })
    })
    .catch(console.log)
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
