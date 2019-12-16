// ./react-redux-client/src/containers/Aula.js
import { connect } from 'react-redux';
import * as aulaActions from '../actions/aulaActions';
import Aula from '../components/Aula';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAulaState: state.aulaState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchAulaById: aulaId => dispatch(aulaActions.fetchAulaById(aulaId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Aula);
