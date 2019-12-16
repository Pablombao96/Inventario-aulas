// ./react-redux-client/src/containers/Aulas.js
import { connect } from 'react-redux';
import * as aulaActions from '../actions/aulaActions';
import Aulas from '../components/Aulas';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAulaState: state.aulaState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchAulas: () => dispatch(aulaActions.fetchAulas()),
    mappedEditAula: aulaToEdit => dispatch(aulaActions.editAula(aulaToEdit)),
    mappedshowEditModal: aulaToEdit => dispatch(aulaActions.showEditModal(aulaToEdit)),
    mappedhideEditModal: () => dispatch(aulaActions.hideEditModal()),
    mappedDeleteAula: aulaToDelete => dispatch(aulaActions.deleteAula(aulaToDelete)),
    mappedshowDeleteModal: aulaToDelete => dispatch(aulaActions.showDeleteModal(aulaToDelete)),
    mappedhideDeleteModal: () => dispatch(aulaActions.hideDeleteModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Aulas);
