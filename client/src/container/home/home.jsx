import React, { Component } from 'react'
import qs from 'qs'
import axios from '../../apis/unsplash'
import {
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import Banner from '../../components/banner/banner'
import PicDetail from '../PicDetail/PicDetail'

import './home.css'

// componentDidUpdate

class Home extends Component {

  state= {
    photos1: [],
    photos2: [],
    photos3: [],
    isBanner: true,
  }

  componentDidUpdate(){
    const{ q }= qs.parse(this.props.location.pathname.slice(1))
    if(q){
      this.searchUpsplash(q)
    }
  }

  mySetState = (stateName, value) => {
    this.setState({
      [stateName] : value
    })
  }

  searchUpsplash = (keyword) =>{
    axios({
      method: 'get',
      url: `/search/photos?query=${keyword}&per_page=30`
    })
    .then(({data})=>{
      document.getElementById('search').value = ''
      let p1 = data.results.slice(0, 10)
      let p2 = data.results.slice(10, 20)
      let p3 = data.results.slice(20, 30)
      this.setState({ photos1: p1 , photos2: p2, photos3: p3})
    })
    .catch(console.log)
  }

  componentDidMount(){
    axios({
      method: 'get',
      url: `/photos?per_page=30`
    })
    .then(({data})=>{
      let p1 = data.slice(0, 10)
      let p2 = data.slice(10, 20)
      let p3 = data.slice(20, 30)
      this.setState({ photos1: p1 , photos2: p2, photos3: p3})
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        
        <Banner />
  
        <div className="pic-con d-flex justify-content-center flex-wrap">

          <div className="pic-card">
            {
              this.state.photos1.map((v, i) => <Link to={`pic/${v.id}`}> <img key={v.id} src={v.urls.regular} alt=""/> </Link>)
            }
          </div>
          <div className="pic-card">
            {
              this.state.photos2.map((v, i) => <Link to={`pic/${v.id}`}> <img key={v.id} src={v.urls.regular} alt=""/> </Link>)
            }
          </div>
          <div className="pic-card">
            {
              this.state.photos3.map((v, i) => <Link to={`pic/${v.id}`}> <img key={v.id} src={v.urls.regular} alt=""/> </Link>)
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

export default withRouter(Home);
