import React from 'react'

function ToDoList(props) {
  return (
    <div>
      <li className='list-item'>
        {props.item}

        <span className='icons'>
          <i className="fa-regular fa-trash icon-delete" onClick={e => {
            props.deleteitem(props.index)
          }}></i>
          {/*<i className="fa-sharp fa-light fa-minus icon-delete" onClick={e=>{
              props.deleteitem(props.index)}}></i>*/}
          {/*<i className="fa-solid fa-trash icon-delete" onClick={e=>{
                props.deleteitem(props.item)
              }}></i>*/}



        </span>


      </li>


    </div>
  )
}

export default ToDoList
