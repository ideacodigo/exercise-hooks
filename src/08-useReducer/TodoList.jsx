import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todoList = [], onDeleteTodo, onToggleTodo }) => {


   return (
      <>
         <ul className='list-group'>
            {
               todoList.map((todoItem, key) => (
                  <TodoItem
                     key={todoItem.id}
                     todoItem={todoItem}
                     onToggleTodo={onToggleTodo}
                     onDeleteTodo={id => onDeleteTodo(id)} />
               ))
            }
         </ul>

      </>
   )
}
