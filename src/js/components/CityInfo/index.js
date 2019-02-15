import { connect } from 'react-redux';
import CityInfo from './CityInfo';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    results: store.city.results,
  };
}


export default connect(mapStoreToProps)(CityInfo);