import React from 'react'
import {
    Route,
    Redirect,
    useLocation
  } from "react-router-dom";

export default function PrivateRoute(props) {
    const location = useLocation()

    return (
        <Route path={props.path}>
            {
                props.login // better use global state management
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