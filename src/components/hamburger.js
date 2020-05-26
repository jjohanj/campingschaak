import React from 'React';
import Menu from 'react-burger-menu/lib/menus/slide'

import "./hamburger.css"

class Hamburger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleStateChange (state) {
  this.setState({menuOpen: state.isOpen})
}
  closeMenu () {
    this.setState({menuOpen: false})
  }
  showSettings (event) {
    event.preventDefault();
  }

  handleRoundChange = (i) => {
    var round = i;
    this.props.onSelectRound(round);
  }

  render () {
    return (
      <Menu
      isOpen={this.state.menuOpen}
      onStateChange={(state) => this.handleStateChange(state)}
      width={ '50%' } noOverlay>
      <ul className="list-unstyled">
        <li className="menu-item" onClick={()=> {this.handleRoundChange(1); this.closeMenu()}}>Ronde 1</li>
        <li className="menu-item" onClick= {()=>{this.handleRoundChange(2); this.closeMenu()}}>Ronde 2</li>
        <li className="menu-item" onClick= {()=>{this.handleRoundChange(3); this.closeMenu()}}>Ronde 3</li>
        <li className="menu-item" onClick= {()=>{this.handleRoundChange(4); this.closeMenu()}}>Ronde 4</li>
        <li className="menu-item" onClick= {()=>{this.handleRoundChange(5); this.closeMenu()}}>Ronde 5</li>
        <li className="menu-item" onClick= {()=>{this.handleRoundChange(6); this.closeMenu()}}>Ronde 6</li>
      </ul>
      <a href="http://onlineschaakcompetitie.nl/campingschaak/stand/index.html" className="menu-item">Onlineschaakcompetitie.nl</a>
      </Menu>
    );
  }
}
export default Hamburger
