import React,{useState} from 'react'
export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success")
        
    }
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","success")
    }
    const handleClearClick=()=>{
        setText("");
        props.showAlert("Text Cleared","success")
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
        

    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied","success")

    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space has been cleared","success")
    }
    const [text, setText]=useState('Enter text here');

    // text="new text"; Wrong way to change the this.state
    // setText("new text"); Correct way to change the state
    
    const lengt=()=>{
        if(text.length=null){
            let len=0
        }
    }


    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1> 
            <div className="mb-3">
                <textarea className="form-control"  value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}} />
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>copy text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{(text.split(" ").length)} words and {text.length} charaters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
`        </div>
        </>
        
    )
}
