import React, { useState, useEffect } from 'react'
import axios from '../../apis/unsplash'
import {
    useLocation,
    useHistory
  } from "react-router-dom";

import './Login.css'

export default function Login(props) {

    const location = useLocation()
    const history = useHistory()
    const [bgImage, setBgImage] = useState({
    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR0MSXI_hwdeKRskkXc20kuHaPm_hAOvGGqtdwsjcsEE_qUxnu")`
    })

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


    function toPrevPath(){
        const lastPath = location.state ? location.state.from : '/'
        history.replace(lastPath)
    }

    return (
        <div style={ bgImage } className="login-con d-flex align-items-center justify-content-center">
            <div className="login-form-con d-flex align-items-center justify-content-center flex-column">
                <img className="mb-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0nRHPug4nQ9WjpDWuKnBhoBBrSxXC-btTc_bXXEGZUiQNKYvC" alt=""/>
                <h1>Login</h1>
                <form onSubmit={ (e) => {
                    e.preventDefault()
                    props.setLogin(true)
                    toPrevPath()
                }} className="w-100 h-50 d-flex align-items-center justify-content-center flex-column">
                    <input type="text" placeholder="Enter Email"/>
                    <input type="password" placeholder="Enter Password"/>
                    <input className="btn btn-light w-25 border" type="submit"/>
                </form>
            </div>


            {/* <button onClick={ () =>{
                props.setLogin(true)
                toPrevPath()
            }
            }>Login</button> */}
        </div>
    )
}
