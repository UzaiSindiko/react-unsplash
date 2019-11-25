import React from 'react'
import './navbar.css'

export default function Navbar (props) {

    return (
        <div className="sticky-top">
     <nav>
          <div className="d-flex align-items-center justify-content-between">
            <img className="logo" src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" alt=""/>
            <form onSubmit={(e) => props.searchUpsplash(e)} className="w-50" action="">
                <input onChange={ (e) => props.mySetState( 'q', e.target.value ) } id="search-nav"  className="nav-input" type="te50" placeholder="Search. . ."/>
            </form>
            <div className="link">
                <span>Home</span>
                <span>Collection</span>
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
