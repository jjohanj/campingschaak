import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Image from "../components/image"
import Hamburger from "../components/hamburger"
import Masonry from "../components/masonry"
import './grid.css'
import axios from 'axios';

class IndexPage extends React.Component {
  state = {
  data: [],
  fulldata: [],
  currentround: ""
}

onUpdateRound = (i) => {
  this.setState ({currentround: i})
  var rounds =  this.state.fulldata.filter(function(round) {
  return round.round == i;
});
  this.setState({data: rounds});
};

componentDidMount = async () => {
  const response = await axios("https://www.flonxchess.nl/apicamping.php");
    this.setState({ fulldata: response.data,
                    data: response.data })
    this.onUpdateRound(1)
};
render() {
  return (
  <>
  <Hamburger onSelectRound={this.onUpdateRound} />

  <div className="grid-container">
    <div className="grid-item">
      <div className="wrapper">
        <h1>Campingschaak Uitslagen & Partijen</h1>

      </div>
      <div className="hero"><Image /></div>
    </div>
    <div className="grid-item grid-container-b">
      <div className="grid-item-a"> <h2 className="text-center pb-2">Ronde {this.state.currentround}</h2></div>
      <Masonry data={this.state.data}/>
    </div>


  </div>
  </>
  )
}}

export default IndexPage
