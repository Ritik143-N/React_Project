import React ,{useState} from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleReverseClick = () => {
    let newText = text.split('').reverse().join('')
    setText(newText)
    
  };

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  // setText("NEW ETXT");
  return (
  <>
 
    <div className='container'>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="exampleFormControlTextarea1" className="form-label">Enter Your text</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button onClick={handleUpClick} className='btn btn-primary mx-2' >Convert to Upper</button>
        <button onClick={handleLowClick} className='btn btn-primary mx-2' >Convert to LOwer</button>
        <button className='btn btn-primary mx-2'  onClick={handleReverseClick}>Reverse Text</button>
    
    </div>
    <div className='container my-3'>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} chracters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </>
  )
}
