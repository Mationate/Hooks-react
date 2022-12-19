import { useReducer } from "react";

const initialState = [{
    id:1,
    todo:'recolectar la piedra del alma',
    done: false,
}];

const todoReducer = (state=initialState, action) => {
    return state;
}

let todos = todoReducer();
//!! todos.push({
//!!     id:2,
//!!     todo: 'recolectar piedra poder',
//!!     done:false
//!! })
console.log(todos);

