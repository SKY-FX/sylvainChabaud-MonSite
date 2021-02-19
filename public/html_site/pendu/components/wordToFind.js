import React from 'react'

export default function wordToFind (props) { 

    const tab = props.word.join(' ');

    // console.log("RESU", tab);

    return (
        <div className="wordToFind">
            <label htmlFor="name">Word to find</label>
            <input type="text" id="name" value={tab} size="7" readOnly></input>
        </div>
    )
}

