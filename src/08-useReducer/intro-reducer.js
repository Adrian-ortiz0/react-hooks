const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

const todoReducer = function (state = initialState, action = {}) {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  // el use reducer siempre debe devolver un estado
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar piedra del poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
