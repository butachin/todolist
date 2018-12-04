import {connect} from 'react-redux'
import {Dispatch} from 'react'
import { toggleTodo, TodoAction } from "../actions";
import TodoList from "../components/TodoList";
import { Todos } from "../states/TodoState";

interface StateFromProps {
  todos: Todos;
}

interface DispatchFromProps {
  onTodoClick: (id: number) => void;
}

function mapToProps(state: Todos): StateFromProps {
  return {
    todos: state
  }
}

function mapDispatchProps(dispatch: Dispatch<TodoAction>): DispatchFromProps {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id));
    }
  }
}

export default connect<StateFromProps, DispatchFromProps, {}>(
  mapToProps,
  mapDispatchProps
)(TodoList);
