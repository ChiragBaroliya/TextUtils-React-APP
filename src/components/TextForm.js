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

    const [text, setText] = useState("");
    return (
        <>
            <div className='container my-2'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert to Lowarcase</button>
                <button disabled={text.length === 0} className='btn btn-primary' onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className='container my-3'>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} charactors</p>
                <p>{0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
        </div>
        </>
    );
};
