import React from 'react'
import { useState, useRef  } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false); 
    const speechInstance = useRef(null); 

   
    const handleOnChange = (event) => {
        const newText = event.target.value;
        setText(newText);
    }

    const handleUpperCase = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowerCase = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    
    const handleClearText = () => {
        const newText = '';
        setText(newText);
        props.showAlert("Text has been cleared!", "success");
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied to Clipboard!", "success");
    }


    const handleSpeak = () => {
        if (!text) {
            alert("Please enter some text to speak.");
            return;
        }

        // Case 1: Start or resume speech
        if (!isPlaying || isPaused) {
            if (!isPlaying) {
                // Stop any ongoing speech and create a new instance
                window.speechSynthesis.cancel();
                const speech = new SpeechSynthesisUtterance(text);
                speech.lang = "en-US";
                speech.rate = 1;
                speech.pitch = 1;

                speechInstance.current = speech;

                // When speech ends
                speech.onend = () => {
                    setIsPlaying(false);
                    setIsPaused(false);
                };

                window.speechSynthesis.speak(speech);
            } else if (isPaused) {
                window.speechSynthesis.resume(); // Resume paused speech
            }

            setIsPlaying(true);
            setIsPaused(false);
        } 
        // Case 2: Pause speech
        else {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    };

    // to count no.of integers in the text
    const numbers = text.replace(/[^0-9]/g,"").length;

    // to calculate the time to read the text
    const min = 0.008 * text.split("").length;

  return (

    <>

    <div className="container1" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} placeholder='Enter your text here' style={{backgroundColor: props.mode === 'dark'?'#0d1f37':'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2 p-2 bg-dark text-info" disabled={text.length===0} onClick={handleUpperCase}>Convert to uppercase</button> 
        <button className="btn btn-primary mx-2 my-2 p-2 bg-dark text-info" disabled={text.length===0} onClick={handleLowerCase}>Convert to lowercase</button>
        <button className='btn btn-primary mx-2 my-2 p-2 bg-dark text-info' disabled={text.length===0} onClick={handleSpeak} >{ isPlaying && !isPaused ? "Click to Pause" : "Click to Listen"}</button>
        <button className="btn btn-primary mx-2 my-2 p-2 bg-dark text-info" disabled={text.length===0} onClick={handleClearText}>Clear text</button>
        <button className="btn btn-primary mx-2 my-2 p-2 bg-dark text-info" disabled={text.length===0} onClick={handleCopyText}>Copy text</button>
    </div>

    <div className="container2 my-5 row" style={{color: props.mode === 'dark'?'white':'black'}}>

        <div className="preview col-8" >
            <h3>Preview of your text: </h3>
            <div className="yourText my-2 bg-dark text-info w-100 rounded p-2">
                <p>{text.length>0?text:"Enter something in the text box to preview it here!!!"}</p>
            </div>
        </div>
        
        <div className="summary col-2">
            <h3>Text Summary: </h3>
            <ul className='bg-dark text-info rounded p-2 list-unstyled' >
                <li>No.of Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</li>
                <li>No.of Characters: {text.length}</li>
                <li>No.of Integers: {numbers}</li>
                <li>No.of minutes: {min.toFixed(2)}</li>
                <li>Symbols: {text.match(/[^\w\s]/g) || [].join(", ")}</li>
            </ul>
        </div>
    </div>


    </>

    
  )
}

