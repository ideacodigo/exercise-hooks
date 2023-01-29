import React from 'react';
import { useEffect } from 'react';
import { useTodoApp } from '../hooks';
import { FormAddNewTodo } from './FormAddNewTodo';
import { TodoList } from './TodoList';

export const TodoApp = () => {

   const { todoList, handleNewTodo, handleDeleteTodo, handleToggleTodo, todoCount, todoCountPending } = useTodoApp();

   return (
      <div>
         <h3>Todo list: ({todoCount}), <small>progress: ({todoCountPending})</small></h3>
         <hr />


         <div className="row">
            <div className="col-7">

               <TodoList
                  todoList={todoList}
                  onDeleteTodo={handleDeleteTodo}
                  onToggleTodo={handleToggleTodo}
               />

            </div>

            <div className="col-7 my-2">

               <h4>Add todo</h4>
               <hr />

               <FormAddNewTodo onNewTodo={handleNewTodo} />

            </div>

         </div>


      </div>
   )
}