import React, {useState} from 'react'



export default function TextForm(props) {

  const handleUpClick = ()=>{
   
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","danger")

  }
  const handleDownClick = ()=>{
   
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","warning")

  }
  const handleClearClick = ()=>{
   
    let newText = '';
    setText(newText)
    props.showAlert("Text cleared!","dark")

  }
  
  const handleOnChange = (event)=>{
   
    setText(event.target.value)
  }
  
  const handleExtraSpace = ()=>{
   
   let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space cleared!","primary");
  }

  const handleCopy =()=>{
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    console.log("copied");
    props.showAlert("Copied to clipboard!","primary");
  }

  const[text, setText]= useState('');
  return (
    <>
    <div className="container" style={{backgrounColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3"> 
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="7" ></textarea>
</div>
<button className="btn btn-warning mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
<button className="btn btn-danger mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Clear extra spaces</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>

    </div>
    <div className="container my-3">
<h1 style={{backgrounColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>Your text details</h1>
<p style={{backgrounColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>Words-{text.split(" ").length} letters-{text.length}</p>
<p style={{backgrounColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>{0.008 * text.split(" ").length} Mins Read</p>
<h2 style={{backgrounColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>Preview</h2>
<p  style={{backgrounColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter something.."}</p>


    </div>
    </>
  )
}
