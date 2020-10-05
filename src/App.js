import React from 'react';
import TodoItem from './TodoItem'
import todosData from './todosData';
import TodoData from './todosData'

class App extends React.Component{
 
  constructor(){
    super();
    this.state ={
      todos : todosData
    }
  }

  render() {
    const items = this.state.todos
    .map(item =>
    <TodoItem 
      text= {item.text}
      completed = { item.completed}
      key = {item.id}
    />)


    return (
      <div className="todo-list">
      {items}
      </div>
    )
}
}

export default App;
