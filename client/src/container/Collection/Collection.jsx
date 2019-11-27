import React, { useEffect } from 'react'
import './Collection.css'
import { useDispatch, useSelector } from 'react-redux'
import { setDec, setInc, isLogin } from '../../store/actions'

export default function Collection() {

    const dispatch = useDispatch()

    useEffect( () => {
      if(localStorage.getItem('token')){
        dispatch(isLogin())
      }
    }, [])

    return (
      <div>

      </div>
    )
}
