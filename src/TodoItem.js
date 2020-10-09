import React from 'react'

function TodoItem (props){
  const styles ={ 
    fontWeight: 'bold',
    color:'gray',
    fontStyle: 'italic',
    textDecoration:'line-through'
  }

    return (
      <div className = 'todo-item'>
        
        <input 
        type='checkbox' 
        checked={props.item.completed} 
        onChange={() => props.handleChange(props.item.id)}  />
        <p style={props.item.completed ?styles:null}>{props.item.text}</p>
      </div>
    )
  
}

export default TodoItem