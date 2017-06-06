const visibilityFilter = (state = 'SHOW_ALL', action) => {
  let retVal;

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      retVal = action.filter;
      break;
    default:
      retVal = state;
  }

  return retVal;
};

export default visibilityFilter;
