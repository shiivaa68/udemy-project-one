import React, { useEffect, useRef, useState } from 'react';

const DropDown = ({label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef();

    useEffect(() => {
        const onBodyClickk = (event) => {
            if (ref.current&&ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };
           document.body.addEventListener('click', onBodyClickk);

        return () => {
            document.body.removeEventListener('click', onBodyClickk)
        };
    }, [])


    const renderedList = options.map((option) => {

        //  if(option.value === selected.value){
        //      return null;
        //  }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })


    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">{label}</label>
                <div className={`ui selection dropdown${open ? ' visible active' : ''}`} onClick={() => setOpen(!open)}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedList}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DropDown;