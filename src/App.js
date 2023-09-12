import React, { useState } from 'react'
import "./App.css"
import ToDo from './component/ToDO'
import ToDoList from './component/ToDoList';

function App() {
  const[listTodo, setListTodo]= useState([]);
  let addList = (inputText)=>{
    if(inputText !=='')
     setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo =[...listTodo];
    newListTodo.splice(key,)
    setListTodo([...newListTodo])
  } 
  return (
    <div className='main-container'>
     <div className='center-container'>
       <ToDo  addList={addList}/>
       <h1 className='app-heading'>TODO</h1>
       <hr/>
       {listTodo.map((listItem, i)=>{
        return(
          <ToDoList key={i} index={i} item={listItem} deleteitem ={deleteListItem}/>)
       })}
     </div>   
    </div>
  )
}

export default App