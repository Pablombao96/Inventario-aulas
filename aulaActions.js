// ./react-redux-client/src/actions/aulaActions.js

const apiUrl = "/api/";

export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_AULA'
  }
}

export const addNewAula = (aula) => {console.log(aula)
  return (dispatch) => {
    dispatch(addNewAulaRequest(aula));
    return fetch(apiUrl, {
      method:'post',
      body: aula,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.aula);
          dispatch(addNewAulaRequestSuccess(data.aula, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewAulaRequestFailed(error))
        })
      }
    })
  }
}

export const addNewAulaRequest = (aula) => {
  return {
    type: 'ADD_NEW_AULA_REQUEST',
    aula
  }
}

export const addNewAulaRequestSuccess = (aula,message) => {
  return {
    type: 'ADD_NEW_AULA_REQUEST_SUCCESS',
    aula:aula,
    message:message
  }
}

export const addNewAulaRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_AULA_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchAulas = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchAulasRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchAulasSuccess(data.aulas,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchAulasFailed(error));
                    })
                  }
                })


  }
}

export const fetchAulasRequest = () => {
  return {
    type:'FETCH_AULAS_REQUEST'
  }
}


//Sync action
export const fetchAulasSuccess = (aulas,message) => {
  return {
    type: 'FETCH_AULAS_SUCCESS',
    aulas: aulas,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchAulasFailed = (error) => {
  return {
    type:'FETCH_AULAS_FAILED',
    error
  }
}

export const fetchAulaById = (aulaId) => {
  return (dispatch) => {
    dispatch(fetchAulaRequest());
      // Returns a promise
      return fetch(apiUrl + aulaId)
             .then(response => {console.log(response)
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchAulaSuccess(data.aula[0], data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchAulaFailed(error));
                 })
               }
             })

  }
}

export const fetchAulaRequest = () => {
  return {
    type:'FETCH_AULA_REQUEST'
  }
}


//Sync action
export const fetchAulaSuccess = (aula,message) => {
  return {
    type: 'FETCH_AULA_SUCCESS',
    aula: aula,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchAulaFailed = (error) => {
  return {
    type:'FETCH_AULA_FAILED',
    error
  }
}

export const showEditModal = (aulaToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    aula:aulaToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editAula = (aula) => {
    return (dispatch) => {
      dispatch(editAulaRequest(aula));
      return fetch(apiUrl, {
        method:'put',
        body:aula
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editAulaSuccess(data.aula,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editAulaFailed(error));
          })
        }
      })
    }
}

export const editAulaRequest = (aula) => {
   return {
     type:'EDIT_AULA_REQUEST',
     aula
   }
}

export const editAulaSuccess = (aula,message) => {
  return {
    type:'EDIT_AULA_SUCCESS',
    aula:aula,
    message:message
  }
}

export const editAulaFailed = (error) => {
  return {
    type:'EDIT_AULA_FAILED',
    error
  }
}

export const deleteAula = (aula) => {
  return (dispatch) => {
    dispatch(deleteAulaRequest(aula));
    return fetch(apiUrl + aula._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteAulaSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteAulaFailed(error));
        })
      }
    })

  }
}

export const deleteAulaRequest = (aula) => {
   return {
     type:'DELETE_AULA_REQUEST',
     aula
   }
}

export const deleteAulaSuccess = (message) => {
  return {
    type:'DELETE_AULA_SUCCESS',
    message:message
  }
}

export const deleteAulaFailed = (error) => {
  return {
    type:'DELETE_AULA_FAILED',
    error
  }
}

export const showDeleteModal = (aulaToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    aula:aulaToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}
