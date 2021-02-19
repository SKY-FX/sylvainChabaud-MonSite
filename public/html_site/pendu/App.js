import React, {Component} from 'react'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import WinContent from './components/winContent'
import './App.css'

const WORDS_TAB = [
  'vie',
  'joie',
  'magie',
  'amour',
  'enfant',
  'maison',
  'plante',
  'soleil',
  'parents',
  'boussole'
];

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      ended : false,
      nbWin : 0
    }
  }

  retNbWin = (level) => {
    const y = (level<=WORDS_TAB.length);
    // console.log("APP", y);
    
    this.setState({
      nbWin : level,
      ended : !y
    })
  }

  render() {
    return (
      <div className="App">
          
          <div className="leJeu">

            <Header />
            { !(this.state.ended) ? <Content nbWords = {WORDS_TAB.length} words = {WORDS_TAB} retNbWin = {this.retNbWin} /> : <WinContent words = {WORDS_TAB}/>}
            <Footer />
          
          </div>

      </div>
    );
  }
}
