import React, {useState} from 'react';

export default function TextForm (props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClearClick = ()=>{
        setText("")
        props.showAlert("Clear text done!", "success")
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowarcase</button>
                <button className='btn btn-primary' onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className='container my-3'>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} charactors</p>
                <p>{0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
        </div>
        </>
    );
};
