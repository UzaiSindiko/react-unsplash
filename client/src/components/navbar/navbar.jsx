import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './navbar.css'
import {
  Link,
  useHistory
} from "react-router-dom";
import { logout } from '../../store/actions'

export default function Navbar (props) {
  const [keyword, setKeyword] = useState('')
  const {isLogin} = useSelector( state => state.users )
  const dispatch = useDispatch()
  let history = useHistory()

  function handleSubmit(){
    history.push(`/?q=${keyword}`)
    setKeyword('')
  }

  function handleClick(q){
    history.push(`/?q=${q}`)
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
                { isLogin ? <> <Link to="/collections"><span>Collections</span></Link>  <button onClick={ () => dispatch(logout()) } className="btn btn-dark">Logout</button> </>: <Link to="/login"><button className="btn btn-dark">Login</button></Link>}
                
            </div>
          </div>
          <div className="search-word d-flex justify-content-between">
            <span onClick={ () => handleClick('Wallpapers') } >Wallpapers</span>
            <span onClick={ () => handleClick('Textures & Patterns') } >Textures & Patterns</span>
            <span onClick={ () => handleClick('Nature') } >Nature</span>
            <span onClick={ () => handleClick('Current Events') } >Current Events</span>
            <span onClick={ () => handleClick('Architecture') } >Architecture</span>
            <span onClick={ () => handleClick('Business & Work') } >Business & Work</span>
            <span onClick={ () => handleClick('Film') } >Film</span>
            <span onClick={ () => handleClick('Animals') } >Animals</span>
            <span onClick={ () => handleClick('Travel') } >Travel</span>
            <span onClick={ () => handleClick('Fashion') } >Fashion</span>
            <span onClick={ () => handleClick('Food & Drink') } >Food & Drink</span>
            <span onClick={ () => handleClick('Experimental') } >Experimental</span>
          </div>
        </nav>
        </div>
    )
}
