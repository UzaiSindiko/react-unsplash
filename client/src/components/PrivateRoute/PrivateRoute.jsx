import React from 'react'
import {
    Route,
    Redirect,
    useLocation
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

export default function PrivateRoute(props) {
    const location = useLocation()

    const { isLogin } = useSelector(state => state.users )

    return (
        <Route path={props.path}>
            {
                isLogin // better use global state management
                ? props.children // 
                : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location.pathname }
                    }}
                    />
            }
        </Route>
    )
}