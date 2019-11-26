import React, { useState } from 'react'
import './navbar.css'
import {
  Link,
  useHistory
} from "react-router-dom";

export default function Navbar (props) {
  const [keyword, setKeyword] = useState('')

  let history = useHistory()

  function handleSubmit(){
    history.push(`/q=${keyword}`)
    setKeyword('')
  }

    return (
        <div className="sticky-top">
     <nav>
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/">
                <img className="logo" src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" alt=""/>
            </Link>
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
                }} 
                className="w-50" action="">
                <input value={keyword} onChange={ (e) => setKeyword( e.target.value ) }  className="nav-input" type="te50" placeholder="Search. . ."/>
            </form>
            <div className="link" >
                <Link to="/"><span>Home</span></Link>
                <Link to="/collections"><span>Collections</span></Link>
            </div>
          </div>
          <div className="search-word d-flex justify-content-between">
            <span>Wallpapers</span>
            <span>Textures & Patterns</span>
            <span>Nature</span>
            <span>Current Events</span>
            <span>Architecture</span>
            <span>Business & Work</span>
            <span>Film</span>
            <span>Animals</span>
            <span>Travel</span>
            <span>Fashion</span>
            <span>Food & Drink</span>
            <span>Experimental</span>
          </div>
        </nav>
        </div>
    )
}
