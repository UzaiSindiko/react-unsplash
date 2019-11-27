import React, { Component } from 'react'
import qs from 'qs'
import {
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import Banner from '../../components/banner/banner'
import PicDetail from '../PicDetail/PicDetail'
import { connect } from 'react-redux'
import { getPhotos, searchPhotos, isLogin } from '../../store/actions'

import './home.css'

// componentDidUpdate

class Home extends Component {

  // kenang kenang-kenangan jangan dihapus
  state= {
    // photos1: [],
    // photos2: [],
    // photos3: [],
    // isBanner: true,
  }

  componentDidUpdate(prevProps){
    const prev = qs.parse(prevProps.location.search.slice(1)).q
    const current = qs.parse(this.props.location.search.slice(1)).q
    if(current && prev !== current && current !== '' ){
      const{ q }= qs.parse(this.props.location.search.slice(1))
      this.searchUpsplash(q)
    } 
    else if(!current && prev !== current) {
      this.props.getPhotos()
    }
  }

  mySetState = (stateName, value) => {
    this.setState({
      [stateName] : value
    })
  }

  searchUpsplash = (q) =>{
    this.props.searchPhotos(q)
  }

  componentDidMount(){
    const { q } = qs.parse(this.props.location.search.slice(1))
    if(q && q !== ''){
      this.searchUpsplash(q)
    } else {
      this.props.getPhotos()
    }

    if(localStorage.getItem('token')){
      this.props.isLogin()
    }
  }

  render() {
    return (
      <div>
        
        <Banner />

        <div className="pic-con d-flex justify-content-center flex-wrap">

          <div className="pic-card">
            {
              this.props.picture.photos1.map((v, i) => <Link key={v.id}  to={`pic/${v.id}`}> <img className="animated fadeInUp" src={v.urls.regular} alt=""/> </Link>)
            }
          </div>
          <div className="pic-card">
            { 
              this.props.picture.photos2.map((v, i) => <Link key={v.id} to={`pic/${v.id}`}> <img className="animated fadeInUp" src={v.urls.regular} alt=""/> </Link>)
            }
          </div>
          <div className="pic-card">
            {
              this.props.picture.photos3.map((v, i) => <Link key={v.id}  to={`pic/${v.id}`}> <img className="animated fadeInUp" src={v.urls.regular} alt=""/> </Link>)
            }
          </div>
        </div>

          <Switch>
            <Route path="/pic/:id">
                <PicDetail />
            </Route>
          </Switch>

      </div>
    )
  }
}


function mapStateToProps( state ){
  return {
    picture: state.picture
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: () => dispatch(getPhotos()),
    searchPhotos: (q) => dispatch(searchPhotos(q)),
    isLogin: () => dispatch(isLogin())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Home))
