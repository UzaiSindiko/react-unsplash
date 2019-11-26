import React from 'react'
import {
    useLocation,
    useHistory
  } from "react-router-dom";

export default function Login(props) {

    const location = useLocation()
    const history = useHistory()


    function toPrevPath(){
        const lastPath = location.state ? location.state.from : '/'
        history.replace(lastPath)
    }

    return (
        <div>
            <button onClick={ () =>{
                props.setLogin(true)
                toPrevPath()
            }
            }>Login</button>
        </div>
    )
}
