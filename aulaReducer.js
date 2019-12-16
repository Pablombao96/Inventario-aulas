// ./react-redux-client/src/reducers/aulaReducer.js
const INITIAL_STATE = {
  aulas:[],
  aula:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  aulaToDelete: null,
  showEditModal: false,
  aulaToEdit: null,
  newAula: null
}

export  const aulaReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_AULAS_REQUEST':
          return {
            ...currentState,
            aulas:[],
            aula:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            aulaToDelete: null,
            showEditModal: false,
            aulaToEdit: null,
          }

    case 'FETCH_AULAS_SUCCESS':
          return {
            ...currentState,
            aulas:action.aulas,
            aula:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            aulaToDelete: null,
            showEditModal: false,
            aulaToEdit: null,
          }

    case 'FETCH_AULAS_FAILED':
          return {
            ...currentState,
            aulas:[],
            aula:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            aulaToDelete: null,
            showEditModal: false,
            aulaToEdit: null,
          }

    case 'FETCH_AULA_REQUEST':
          return {
            ...currentState,
            aulas:currentState.aulas,
            aula:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            aulaToDelete: null,
            showEditModal: false,
            aulaToEdit: null,
          }

    case 'FETCH_AULA_SUCCESS':
          return {
            ...currentState,
            aulas:currentState.aulas,
            aula:action.aula,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            aulaToDelete: null,
            showEditModal: false,
            aulaToEdit: null,
          }

    case 'FETCH_AULA_FAILED':
          return {
            ...currentState,
            aulas:[],
            aula:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            aulaToDelete: null,
            showEditModal: false,
            aulaToEdit: null,
          }

    case 'ADD_NEW_AULA_REQUEST':
          return {
            ...currentState,
            aulas:currentState.aulas,
            aula:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            aulaToDelete: null,
            showEditModal: false,
            aulaToEdit: null,
            newAula: action.aula
          }

    case 'ADD_NEW_AULA_REQUEST_FAILED':
          return {
            ...currentState,
            aulas:currentState.aulas,
            aula:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            aulaToDelete: null,
            showEditModal: false,
            aulaToEdit: null,
            newAula: null
          }

    case 'ADD_NEW_AULA_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            aulas:[...currentState.aulas, action.aula],
            aula:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            aulaToDelete: null,
            showEditModal: false,
            aulaToEdit: null,
            newAula: action.aula
          }
        return nextState;

  case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          aulas:currentState.aulas,
          aula:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          aulaToDelete: null,
          showEditModal: true,
          aulaToEdit: action.aula,
          newAula: null
        }

  case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          aulas:currentState.aulas,
          aula:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          aulaToDelete: null,
          showEditModal: false,
          aulaToEdit: null,
          newAula: null
        }

    case 'EDIT_AULA_REQUEST':
          return {
            ...currentState,
            aulas:currentState.aulas,
            aula:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            aulaToDelete: null,
            showEditModal: true,
            aulaToEdit: action.aula,
            newAula: null
          }

    case 'EDIT_AULA_SUCCESS':
         const updatedAulas = currentState.aulas.map((aula) => {
           if(aula._id !== action.aula._id){
             //This is not the item we care about, keep it as is
             return aula;
           }
           //Otherwise, this is the one we want to return an updated value
           return { ...aula, ...action.aula }
         })
          return {
            ...currentState,
            aulas:updatedAulas,
            aula:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            aulaToDelete: null,
            showEditModal: true,
            aulaToEdit: action.aula,
            newAula: null
          }

  case 'EDIT_AULA_FAILED':
        return {
          ...currentState,
          aulas:currentState.aulas,
          aula:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: false,
          aulaToDelete: null,
          showEditModal: true,
          aulaToEdit: currentState.aulaToEdit,
          newAula: null
        }

  case 'DELETE_AULA_REQUEST':
        return {
          ...currentState,
          aulas:currentState.aulas,
          aula:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          aulaToDelete: action.aula,
          showEditModal: false,
          aulaToEdit: null,
          newAula: null
        }

  case 'DELETE_AULA_SUCCESS':
  const filteredAulas = currentState.aulas.filter((aula) => aula._id !== currentState.aulaToDelete._id)
        return {
          ...currentState,
          aulas:filteredAulas,
          aula:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          aulaToDelete: null,
          showEditModal: false,
          aulaToEdit: null,
          newAula: null
        }


  case 'DELETE_AULA_FAILED':
        return {
          ...currentState,
          aulas:currentState.aulas,
          aula:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          aulaToDelete: null,
          showEditModal: false,
          aulaToEdit: null,
          newAula: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          aulas:currentState.aulas,
          aula:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          aulaToDelete: action.aula,
          showEditModal: false,
          aulaToEdit: null,
          newAula: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          aulas:currentState.aulas,
          aula:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          aulaToDelete: null,
          showEditModal: false,
          aulaToEdit: null,
          newAula: null
        }


    default:
       return currentState;

  }
}
