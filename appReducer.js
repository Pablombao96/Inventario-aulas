// ./react-redux-client/src/reducers/appReducer.js
const INITIAL_STATE = {
  showAddAula: false
}

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_AULA':
          return {
            ...currentState,showAddAula: !currentState.showAddAula
          }


    default:
       return currentState;

  }
}

export default appReducer;
