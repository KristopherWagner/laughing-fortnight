import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter ) => {
  let retVal;

  switch (filter) {
    case 'SHOW_ALL':
      retVal = todos;
      break;
    case 'SHOW_COMPLETED':
      retVal = todos.filter(t => t.completed);
      break;
    case 'SHOW_ACTIVE':
      retVal = todos.filter(t => !t.completed);
      break;
    default:
      retVal = todos;
      break;
  }

  return retVal;
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
