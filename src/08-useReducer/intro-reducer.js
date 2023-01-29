const initialState = [{
   id: 1,
   todo: 'gether rock',
   done: 'false',
}]

const todoReducer = (state = initialState, action = {})=> {

   if(action.type === '[todo] add todo') { 
      return [ ...state, action.payload];
   }

   return state;
}

let todo = todoReducer();

const newTodo = {
   id: 2,
   todo: 'gether rock soul',
   done: false,
}

const actonAddTodo = {
   type: '[todo] add todo',
   payload: newTodo,
}

todo = todoReducer(todo, actonAddTodo);

console.log({state: todo});

