import React, {Component} from 'react'
import NavLeft from './navLeft'
import NavRight from './navRight'


export default class Content extends Component {

    state = {
        nbFalse : 0
    }

    onFalse = (ret,level) => {
        this.props.retNbWin(level);

        this.setState({
            nbFalse : ret
        })

        
    }

    render() {
        console.log("CONTENT", this.state.nbFalse);
        return (
            <div className="content" >
                <NavLeft nbWords = {this.props.nbWords} retNbFalse = { (ret,level) => this.onFalse(ret,level) } words = {this.props}/>
                <NavRight nbFalse = {this.state.nbFalse} />
            </div>
        )
    }
}


