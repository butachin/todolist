import * as React from "react";
import * as State from "../states/TodoState";
import Todo from "./Todo";

export interface ITodoListProps {
  todos: State.Todos;
  onTodoClick: (id: number) => void;
}

class TodoList extends React.Component<ITodoListProps, {}> {
  public render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={this.onTodoClick(todo.id)} />
        ))}
      </ul>
    );
  }

  private onTodoClick = (id: number) => () => {
    this.props.onTodoClick(id)
}

}

export default TodoList;
