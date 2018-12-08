let nextTodoId = 0;

export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO"
}

export interface IAddTodoAction {
  type: TodoActionType.ADD_TODO;
  id: number;
  text: string;
}

export interface IToggleTodoAction {
  type: TodoActionType.TOGGLE_TODO;
  id: number;
}

export type TodoAction = IAddTodoAction | IToggleTodoAction;

export function addTodo(text: string): IAddTodoAction {
  return {
    id: nextTodoId++,
    text,
    type: TodoActionType.ADD_TODO,
  };
}

export function toggleTodo(id: number): IToggleTodoAction {
  return {
    id,
    type: TodoActionType.TOGGLE_TODO,
  };
}
