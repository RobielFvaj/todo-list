import React from 'react';
import TodoItem from './TodoItem'
import TodoData from './todosData'

function App() {

const items = TodoData
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
  );
}

export default App;
