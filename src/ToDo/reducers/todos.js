const todo = (state = {}, action ) => {
  let retVal;

  switch (action.type) {
    case 'ADD_TODO':
      retVal = {
        id: action.id,
        text: action.text,
        completed: false,
      };
      break;
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        retVal = state;
      } else {
        retVal = Object.assign({}, state, {
          completed: !state.completed,
        });
      }
      break;
    default:
      retVal = state;
  }

  return retVal;
};

const todos = (state = [], action) => {
  let retVal;

  switch (action.type) {
    case 'ADD_TODO':
      retVal = [
        ...state,
        todo(undefined, action),
      ];
      break;
    case 'TOGGLE_TODO':
      retVal = state.map(t =>
                    todo(t, action)
                    );
      break;
    default:
      retVal = state;
  }

  return retVal;
};

export default todos;
