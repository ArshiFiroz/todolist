import React, { useState } from 'react'

function ToDo(props) {
    const[inputText, setInputText] = useState("");
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("e.target.value")
        }
    }
    onkeydown ={handleEnterPress}

  return (
    <div className='input-container'>
        <input type='text' className='input-box-todo'
         placeholder='enter your ToDo'
         value={inputText}
         onChange={e => {
            setInputText(e.target.value)
         }}
         />
        <button className='add-btn' onClick={()=>{
            props.addList(inputText)
            setInputText("")
        }}>+</button>
         
      
    </div>
  );
}

export default ToDo
