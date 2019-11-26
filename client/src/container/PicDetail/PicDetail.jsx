import React, {useState, useEffect} from 'react'
import axios from '../../apis/unsplash'
import './PicDetail.css'
import {
    Link,
    useParams
  } from "react-router-dom";

export default function PicDetail() {
    let {id} = useParams()

    const [pic, setPic] = useState('')

    function getPhotoByid(){
        axios({
            method: 'get',
            url: `/photos/${id}`
        })
        .then(({data}) => {
            setPic(data.urls.raw)
            // console.log(data.urls.raw);
        })
        .catch(console.log)
    }

    useEffect(()=>{
        getPhotoByid()
    }, [])    

    return (
        <div className="pic-detail-con d-flex align-items-center justify-content-center">
            <div className="animated zoomIn	detail-con">
                <Link style={{ textDecoration: 'none' }} to="/">
                    <h4 className="sticky-top text-dark">x</h4>
                </Link> 
                <div className="detail-pic-con d-flex justify-content-center align-items-start">
                    <img src={pic} alt=""/>
                </div>
            </div>
        </div>
    )
}
