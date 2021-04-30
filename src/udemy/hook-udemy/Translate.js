import React, { useState } from 'react'
import DropDown from './DropDown';
import Convert from './Convert'
const options = [{
    label: 'afrikaans',
    value: 'af'
}, {
    label: 'arabic',
    value: 'ar'
}, {
    label: 'hindi',
    value: 'hi'
}]




const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />

                </div>

            </div>
            <DropDown label="select language" options={options} selected={language} onSelectedChange={setLanguage} />
            <hr/>
            <h3 className="ui header">out put </h3>
            <Convert text={text} language={language}/>
        </div>
    )
}

export default Translate;