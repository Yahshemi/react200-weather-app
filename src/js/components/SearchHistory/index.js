import { connect } from 'react-redux';
import History from './history';


// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    historys: store.city.historys,
  };
}



export default connect(mapStoreToProps)(History);