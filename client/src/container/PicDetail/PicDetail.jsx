import React, {useEffect} from 'react'
import './PicDetail.css'
import {
    Link,
    useParams
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getPhotosById } from '../../store/actions'

export default function PicDetail() {
    let {id} = useParams()

    // const [pic, setPic] = useState('')
    // const [profilePic, setProfilePic] = useState()
    // const [name, SetName] = useState('username')
    // const [linkDownload, setLinkDownload] = useState('')

    const dispatch = useDispatch()
    const {pic, profilePic, name, linkDownload} = useSelector(state => state.picture )

    useEffect(()=>{
        dispatch(getPhotosById(id))
    }, [])    

    return (
        <div className="pic-detail-con d-flex align-items-center justify-content-center">
            <div className="animated zoomIn	detail-con" >
                <div className="detail-nav sticky-top d-flex justify-content-between">
                <div className=" d-flex ">
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <h4 className="text-dark">x</h4>
                    </Link> 
                    <div className="d-flex ml-3 mt-2 align-items-center">
                        <img src={profilePic} alt=""/>
                        <span className="ml-2">{ name }</span>
                    </div>
                </div>

                <div>
                    <button className="mx-1 border btn btn-light"><i className="fas fa-heart"></i></button>
                    <button className="mx-1 border btn btn-light">+ collect</button>
                    <a href={linkDownload}> <button className="mx-1 border btn btn-light">download</button> </a>
                </div>
                
                </div>
                <div className="detail-pic-con d-flex justify-content-center align-items-start">
                    <img src={pic} alt=""/>
                </div>
            </div>
        </div>
    )
}
