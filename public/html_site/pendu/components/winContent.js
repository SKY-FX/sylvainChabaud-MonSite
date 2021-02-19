import React from 'react'

export default function winContent(props) {
    return (
        <div className="winContent">
            <h1>Vous êtes un champion !</h1>
            <br />
            <h3>Tout les mots ont été trouvés !</h3>
            
                {props.words.map((word, index) => 
                <h3 key={index}>{word}</h3>
                )}

        </div>
    )
}
