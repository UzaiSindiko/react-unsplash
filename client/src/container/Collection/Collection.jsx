import React, { useEffect } from 'react'
import './Collection.css'
import { useDispatch, useSelector } from 'react-redux'
import { isLogin, showCol, removeCol } from '../../store/actions'

export default function Collection() {
  const dispatch = useDispatch()

  const { photos } = useSelector(state => state.collection)
  
  useEffect( () => {
      if(localStorage.getItem('token')){
        dispatch(isLogin())
      }
      dispatch(showCol())
    }, [])

    return (
      <div className="p-4" id="collection-con">
        <h1 >Collections</h1>
        <p >Explore the world through collections of beautiful photos free to use under the</p>
        <div className="col-con w-100 d-flex align-items-center flex-column">

          {
            photos.map((v) => 
                  <div key={v.photosId} className="d-flex w-100 align-items-center flex-column mt-5">
                    <button onClick={() => dispatch(removeCol(v._id)) } className="btn btn-secondary mt-3"><i className="fas fa-trash-alt"></i></button>
                    <img src={ v.url } alt=""/>
                  </div>)
          }
            
        </div>
      </div>
    )
}
