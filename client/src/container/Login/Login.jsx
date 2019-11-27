import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBg, login, register } from '../../store/actions'
import {
    useLocation,
    useHistory,
    Link
  } from "react-router-dom";
import './Login.css'

export default function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginFrom, setLoginForm] = useState(true)

    const dispacth = useDispatch()
    const { bgImage } = useSelector(state => state.picture )

    const location = useLocation()
    const history = useHistory()

    useEffect(()=>{
        dispacth(getBg())
    }, [])


    function handleLogin(){
        dispacth(login({ email, password, history, location }))
        setEmail("")
        setPassword("")
    }

    function handleRegister(){
        dispacth(register({ email, password, history, location }))
        setEmail("")
        setPassword("")
    }
    if(loginFrom){
        return (
            <div style={ bgImage } className="login-con d-flex align-items-center justify-content-center">
                <div className="login-form-con d-flex align-items-center justify-content-center flex-column">
                    <img className="mb-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0nRHPug4nQ9WjpDWuKnBhoBBrSxXC-btTc_bXXEGZUiQNKYvC" alt=""/>
                    <h1>Login</h1>
                    <form onSubmit={ (e) => {
                        e.preventDefault()
                        handleLogin()
                    }} className="w-100 h-50 d-flex align-items-center justify-content-center flex-column">
                        <input value={ email }  onChange={ (e) => setEmail( e.target.value ) } type="text" placeholder="Enter Email"/>
                        <input  value={ password } onChange={ (e) => setPassword( e.target.value ) }  type="password" placeholder="Enter Password"/>
                        <input className="btn btn-light w-25 border" type="submit"/>
                    </form>
                    <a onClick={ (e) => {
                        e.preventDefault() 
                        setLoginForm(false)
                    }} href="" > Don't have account? Register </a>
                </div>
            </div>
        )
    }
    else{
        return (
            <div style={ bgImage } className="login-con d-flex align-items-center justify-content-center">
                <div className="login-form-con d-flex align-items-center justify-content-center flex-column">
                    <img className="mb-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0nRHPug4nQ9WjpDWuKnBhoBBrSxXC-btTc_bXXEGZUiQNKYvC" alt=""/>
                    <h1>Register</h1>
                    <form onSubmit={ (e) => {
                        e.preventDefault()
                        handleRegister()
                    }} className="w-100 h-50 d-flex align-items-center justify-content-center flex-column">
                        <input value={ email }  onChange={ (e) => setEmail( e.target.value ) } type="text" placeholder="Enter Email"/>
                        <input  value={ password } onChange={ (e) => setPassword( e.target.value ) }  type="password" placeholder="Enter Password"/>
                        <input className="btn btn-light w-25 border" type="submit"/>
                    </form>
                    <a onClick={ (e) => {
                        e.preventDefault()
                        setLoginForm(true)
                    }} href="" > Already have account? Login</a>
                </div>
            </div>
        )
    }
}
