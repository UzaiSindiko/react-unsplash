import React, { Component } from 'react'
import axios from '../../apis/unsplash'
import Banner from '../../components/banner/banner'
import Navbar from '../../components/navbar/navbar'

import './home.css'

class App extends Component {

  state= {
    q: '',
    photos1: [],
    photos2: [],
    photos3: [],
    isBanner: true
  }

  mySetState = (stateName, value) => {
    this.setState({
      [stateName] : value
    })
  }

  searchUpsplash = (e) =>{
    e.preventDefault()
    axios({
      method: 'get',
      url: `/search/photos?query=${this.state.q}&per_page=30`
    })
    .then(({data})=>{
      document.getElementById('search').value = ''
      document.getElementById('search-nav').value = ''
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
      console.log(data.length);
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
        <Navbar searchUpsplash={ this.searchUpsplash } mySetState={ this.mySetState } />
        <Banner searchUpsplash={ this.searchUpsplash } mySetState={ this.mySetState }/>
          

        <div className="pic-con d-flex justify-content-center flex-wrap">

          <div className="pic-card">
            {
              this.state.photos1.map((v, i) => <img key={i} src={v.urls.regular} alt=""/>)
            }
          </div>
          <div className="pic-card">
            {
              this.state.photos2.map((v, i) => <img key={i} src={v.urls.regular} alt=""/>)
            }
          </div>
          <div className="pic-card">
            {
              this.state.photos3.map((v, i) => <img key={i} src={v.urls.regular} alt=""/>)
            }
          </div>
        </div>

      </div>
    )
  }
}

export default App;
