import React from 'react'
import './Collection.css'
import { useDispatch, useSelector } from 'react-redux'
import { setDec, setInc } from '../../store/actions'

export default function Collection() {

    const count = useSelector(state => state.counter).count
    const dispatch = useDispatch()

    return (
      <div>
          <h1>{count}</h1>
          <button onClick={() => dispatch(setInc()) } >INC</button>
          <button onClick={() => dispatch(setDec()) } >DEC</button>
      </div>
    )
}
