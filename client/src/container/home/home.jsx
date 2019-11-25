import React, { Component } from 'react'
import axios from '../../apis/unsplash'
import Banner from '../../components/banner/banner'
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
        <nav className="sticky-top">
          <div className="d-flex align-items-center justify-content-between">
            <img className="logo" src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" alt=""/>
            <form className="w-50" action="">
                <input className="nav-input" type="te50" placeholder="Search. . ."/>
            </form>
            <div className="link">
                <span>Home</span>
                <span>Collection</span>
            </div>
          </div>
          <div className="search-word d-flex justify-content-between">
            <span>Wallpapers</span>
            <span>Textures & Patterns</span>
            <span>Nature</span>
            <span>Current Events</span>
            <span>Architecture</span>
            <span>Business & Work</span>
            <span>Film</span>
            <span>Animals</span>
            <span>Travel</span>
            <span>Fashion</span>
            <span>Food & Drink</span>
            <span>Experimental</span>
          </div>
        </nav>

          {
            this.state.isBanner && <Banner searchUpsplash={ this.searchUpsplash } mySetState={ this.mySetState }/>
          }

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
