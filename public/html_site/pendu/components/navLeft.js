import React, { Component, Fragment } from 'react'
import WordToFind from './wordToFind'
import Alphabet from './alphabet'
import Level from './level'
import Success from './success'
import Chess from './chess'



export default class navLeft extends Component {
    
    state = {
        wordToFind : [
            "j","e","u"
        ],
        currentWord : [
            "-","-","-"
        ],
        NbRight : 0,
        NbWrong : 0,
        level : 0,
        success : -1
    };

    selectedLetter = (lettre) => {
        
        let Word = this.state.wordToFind;
        let currentWord = this.state.currentWord;
        let NbRight = this.state.NbRight;
        let NbWrong = this.state.NbWrong;

        let result = (this.state.wordToFind.indexOf(lettre) !== -1);
        if (result) // Une lettre a été trouvée
        {         
            let count=0;   
            Word.map( (res, index) => {
                if (res === lettre) 
                {
                    currentWord[index] = res; 
                    count++;
                }
                return 0
            });

            this.setState({
                currentWord: currentWord,
                NbRight : this.state.NbRight + count
            });

            NbRight++;
        } 
        else{ // la lettre choisit est fausse
            const Nb = this.state.NbWrong +1;
            this.setState({
                NbWrong : this.state.NbWrong+1
            });

            this.props.retNbFalse(Nb,this.state.level); 
            NbWrong++;           
        }

        // GAGNE : Toutes les lettres ont été trouvées
        if (NbRight === Word.length)
        {

            this.setState({
                level: this.state.level+1,
                NbRight : 0,
                NbWrong : 0,
                success : 1
            });
        }

        // PERDU :Le mot n'a pas été trouvés
        else if (NbWrong === 8)
        {
            this.setState({
                // level : 0,
                success : 0
            });

            // console.log("SUCCESSSSSSSS");
        }
    }

    
    
    onClickSuccess = () => {
        this.props.retNbFalse(0,this.state.level);
        let indice = this.state.level;

        if (indice>=this.props.nbWords) indice = this.props.nbWords; // Limite
        const newWord = this.props.words.words[indice-1].split("");

        
        const regex = new RegExp('[a-z]', 'gi');
        const currWord = this.props.words.words[indice-1].replace(regex,"-").split("");

        this.setState({
            NbWrong : 0,
            wordToFind : newWord,
            currentWord : currWord,
            success : -1
        });

          
    }

    onClickChess = () => {

        this.props.retNbFalse(0,this.state.level);        

        this.setState({
            NbWrong : 0,
            success : -1,
        });
    }

    render() {
        // console.log("wordToFind", this.state.wordToFind);
        // console.log("currentWord", this.state.currentWord);
        // console.log("NbRight", this.state.NbRight);
        // console.log("NbWrong", this.state.NbWrong);
        // console.log("level", this.state.level);
        // console.log("success", this.state.success);
        // console.log("Word length",this.state.wordToFind.length);

        const success = this.state.success;

        return (
            <div className="navLeft">
                {(success===-1) ? (
                    <Fragment>
                        <WordToFind word={this.state.currentWord} /> 
                        <Alphabet lettreSel = { (lettre) => {this.selectedLetter(lettre)} } />
                        <Level level={this.state.level}/>
                    </Fragment>
                 ) : success===1 ? 
                    <Success ClickOnButton={ () => this.onClickSuccess() } word={this.state.wordToFind} /> : <Chess ClickOnButton={ () => this.onClickChess() } />
                }
            </div>
        )
    }
}
